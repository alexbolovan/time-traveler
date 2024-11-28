<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use Illuminate\Http\Request;
use Inertia\Response;

class ReactionController extends Controller
{




    public function update(Request $request) {

        dd($request->all());

        Reaction::where();
    }


}
