<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use App\Models\Reaction;
use Illuminate\Http\Request;
use Inertia\Response;

class ReactionController extends Controller {


    public function update(Request $request) {

        //dd($request->all());
        $reactionType = $request->input('reaction_type'); // Expecting 'like'
        $reactionableId = $request->input('post_id'); // Expecting the post ID
        $userId = $request->input('user_id'); // Expecting the user ID
        $reactionableType = $request->input('type');


            // check if reaction is already exists
            $same_reaction_exists = Reaction::where('user_id', $userId)
                ->where('reactionable_id', $reactionableId)
                ->where('reaction_type', $reactionType)
                ->where('reactionable_type', 'App\\Model\\' . $reactionableType)
                ->count();

        if ($same_reaction_exists == 1) {
            Reaction::where('user_id', $userId)
                ->where('reactionable_id', $reactionableId)
                ->where('reaction_type', $reactionType)
                ->where('reactionable_type', 'App\\Model\\' . $reactionableType)
                ->delete();
        } else {
            Reaction::updateOrCreate(
                [
                    'user_id' => auth()->id(), // Always use the authenticated user
                    'reactionable_id' => (int)$reactionableId,
                    'reactionable_type' => 'App\\Models\\' .$reactionableType, // If polymorphic
                ],
                [
                    'reaction_type' => $reactionType, // Update or create with this value
                ]
            );

        }


    }


}
