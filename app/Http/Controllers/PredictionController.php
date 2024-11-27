<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

use App\Models\Prediction;

class PredictionController extends Controller {
    // get data when on 'predictions page'
    public function index(Request $request) {

        // 'with' function provides the nested related fields
        $prediction = Prediction::with([
            'user',
            'reactions'
        ])
            // withCount passes these items in the attributes section of the response as 'additional fields'
            // it knows reaction_type through some sort of laravel magic from the reaction type
            // the long form way of doing this would be to use the query-builder and build it from scratch, ie (select, join, ...)
            ->withCount([
                'reactions as like_count' => function ($query) {
                    $query->where('reaction_type', 'like');
                },
                'reactions as dislike_count' => function ($query) {
                    $query->where('reaction_type', 'dislike');
                },
                'reactions as amazed_count' => function ($query) {
                    $query->where('reaction_type', 'amazed');
                },
                'reactions as clown_count' => function ($query) {
                    $query->where('reaction_type', 'clown');
                }
            ])
            ->paginate(10);


        //dd($prediction);

        // convert to assoc array so we can process it easier in the tsx file
        $prediction = $prediction->toArray();

        return Inertia::render('Predictions', [
            'predictions' => $prediction,
            'auth' => Auth::user()
        ]);
    }

    // get data when on specific post
    public function show(Request $request, $id) {
            // this might be querying too much info that we do not need
            $prediction = Prediction::with([
                'user',
                'comments.user',
                'comments.reactions.user',
                'comments.comments',
                'reactions.user'
            ])->findOrFail($id); // filter results by the id of Predictions

            $prediction = $prediction->toArray();

            //dd($prediction);

            return Inertia::render("Prediction", [
                'prediction' => $prediction,
                'id' => $id,
                'auth' => Auth::user()
            ]);
        }
}
