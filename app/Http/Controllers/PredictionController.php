<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

use App\Models\Prediction;

class PredictionController extends Controller
{
    public function index(Request $request)  {
        $prediction = Prediction::with('comments')->get();

        $output = $prediction->map(function($prediction) {
            return [
                'prediction' => $prediction->toArray(),
                'comments' =>  $prediction->comments->toArray()
            ];
        });

        //dd($output);

        return Inertia::render('Predictions', [
            'predictions' =>  $output
        ]);
    }
}
