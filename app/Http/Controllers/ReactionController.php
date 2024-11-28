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

        if ($userId == -1) {
            Reaction::where('user_id', (int)$userId)->where('reactionable_id', (int)$postId)->create(['reaction_type' => $reactionType]);
        } else {
            Reaction::where('user_id', (int)$userId)->where('reactionable_id', (int)$postId)->update(['reaction_type' => $reactionType]);
        }



    }


}
