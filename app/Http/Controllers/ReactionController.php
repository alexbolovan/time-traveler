<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ReactionController extends Controller
{
    public function update(Request $request) : Request {
        // check if the current value is in the database for the given id

        dd($request->all());

        if ($request->all()['like'] == 1) {

        } else if ($request->all()['like'] == 2) {

        } else if ($request->all()['like'] == 3) {

        } else if ($request->all()['like'] == 4) {

        }
    }
}
