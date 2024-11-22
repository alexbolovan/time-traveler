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
            'comments.user',
            'comments.reactions.user',
            'reactions.user'

        ])->paginate(10);


        // convert to assoc array so we can process it easier in the tsx file
        $prediction = $prediction->toArray();

        //dd($prediction);



        //dd($prediction);
        return Inertia::render('Predictions', [
            'predictions' =>  $prediction,
            'auth' => Auth::user()
        ]);
    }
}
