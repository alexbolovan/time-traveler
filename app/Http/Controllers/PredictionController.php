<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

use App\Models\Prediction;

class PredictionController extends Controller
{
    public function index(Request $request)  {
        $prediction = Prediction::with([
            'user',
            'reactions.user'

        ])->paginate(10);


        // convert to assoc array so we can process it easier in the tsx file
        $prediction = $prediction->toArray();

        return Inertia::render('Predictions', [
            'predictions' =>  $prediction,
            'auth' => Auth::user()
        ]);
    }


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
