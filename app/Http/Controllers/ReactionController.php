<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use Illuminate\Http\Request;
use Inertia\Response;

class ReactionController extends Controller
{




    public function update(Request $request) {
        $reaction = $request->input('reaction'); // Could be 'like', 'dislike', etc., or null

        //dd($request->all());
        // failing here!
        $prediction = Prediction::findOrFail($request->input('prediction_id'));
        $user = auth()->user();

        $prediction->reactions()->where('user_id', $user->id)->delete();

        // Add new reaction if provided
        if ($reaction) {
            $prediction->reactions()->create([
                'user_id' => $user->id,
                'reaction_type' => $reaction,
            ]);
        }
        return response()->json(['success' => true]);
    }


}
