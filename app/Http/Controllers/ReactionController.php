<?php

namespace App\Http\Controllers;

use App\Models\Prediction;
use App\Models\Reaction;
use Illuminate\Http\Request;
use Inertia\Response;

class ReactionController extends Controller
{




    public function update(Request $request) {

        //dd($request->all());
        $reactionType = $request->input('reaction_type'); // Expecting 'like'
        $postId = $request->input('post_id'); // Expecting the post ID
        $userId = $request->input('user_id'); // Expecting the user ID

        // some intregity violation?
        // probably has to do with how this fuction is being called?
        // error :  SQLSTATE[23000]: Integrity constraint violation: 19 UNIQUE constraint failed: index 'reactions_user_id_post_id_reaction_type_unique' (Connection: sqlite, SQL: update "reactions" set "reaction_type" = dislike, "updated_at" = 2024-11-28 03:54:00 where "id" = 37)
        Reaction::updateOrCreate(
            [
                'user_id' => auth()->id(), // Always use the authenticated user
                'reactionable_id' => (int)$postId,
                'reactionable_type' => 'App\\Models\\Prediction', // If polymorphic
            ],
            [
                'reaction_type' => $reactionType, // Update or create with this value
            ]
        );



    }


}
