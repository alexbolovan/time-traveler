<?php

namespace App\Http\Controllers;

use Illuminate\Auth\Access\Response;
use Illuminate\Http\Request;
use Inertia\Inertia;

use Illuminate\Support\Facades\Auth;

use App\Models\Prediction;
use function Psy\debug;


class PredictionController extends Controller {
    function debug($prediction) {
        $fields = collect($prediction->items())->map(function ($item) {
            return [
                'id' => $item['id'], // Add the fields you want to inspect
                'like_count' => $item['like_count'],
                'dislike_count' => $item['dislike_count'],
                'amazed_count' => $item['amazed_count'],
                'clown_count' => $item['clown_count'],
                'has_reacted' => $item['has_reacted'],
                // Add any other fields as necessary
            ];
        });


    }

    // get data when on 'predictions page'
    public function index(Request $request) {

        // getting the current users id for comparison
        $userId = auth()->id();


        // 'with' function provides the nested related fields
        $prediction = Prediction::with([
            'user',
            'reactions' => function ($query) use ($userId) {
                $query->where('user_id', $userId); // filter reactions so only the ones associated with the user_id are displayed
            }
        ])
            // withCount passes these items in the attributes section of the response as 'additional fields'
            // it knows reaction_type through some sort of laravel magic from the reaction type
            // the long form way of doing this would be to use the query-builder and build it from scratch, ie (select, join, ...)
            // NOTE all these 'fields' (ie like_count) can be accessed at the top level with item.{field}
            // the actual schema by dd is misleading
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
                },
                'reactions as has_reacted' => function ($query) use ($userId) {
                    $query->where('user_id', $userId);
                }
            ])
            ->paginate(10);


        //dd(debug($prediction->toArray()));
        // convert to assoc array so we can process it easier in the tsx file
        $prediction = $prediction->toArray();

        return Inertia::render('Predictions', [
            'predictions' => $prediction,
            'auth' => Auth::user()
        ]);
    }

    // get data when on specific post
    public function show(Request $request, $post_id) {
        // this might be querying too much info that we do not need
        $user_id = auth()->id();
        $prediction = Prediction::with([
            'user',
            'reactions' => function ($query) use ($user_id) {
                $query->where('user_id', $user_id); // filter reactions so only the ones associated with the user_id are displayed
            },
        ])
            // withCount passes these items in the attributes section of the response as 'additional fields'
            // it knows reaction_type through some sort of laravel magic from the reaction type
            // the long form way of doing this would be to use the query-builder and build it from scratch, ie (select, join, ...)
            // NOTE all these 'fields' (ie like_count) can be accessed at the top level with item.{field}
            // the actual schema by dd is misleading
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
                },
                'reactions as has_reacted' => function ($query) use ($user_id) {
                    $query->where('user_id', $user_id);
                }
            ])->find($post_id); // filter results by the id of Predictions

        $comments = Prediction::with([
            'comments.user',               // Load user for each comment
            'comments.reactions',          // Load reactions for each comment
            'comments.children.user',      // Load user for child comments
            'comments.children.reactions'  // Load reactions for child comments
        ])
            ->with([
                'comments' => function ($query) use ($user_id) {
                    $query->withCount([
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
                        },
                        'reactions as has_reacted' => function ($query) use ($user_id) {
                            $query->where('user_id', $user_id);
                        }
                    ]);
                },
                'comments.children' => function ($query) use ($user_id) {
                    $query->withCount([
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
                        },
                        'reactions as has_reacted' => function ($query) use ($user_id) {
                            $query->where('user_id', $user_id);
                        }
                    ]);
                }
            ])->find($post_id);

        $prediction = $prediction->toArray();
        $comments = $comments->toArray();

        //dd(debug($comments));

        return Inertia::render("Prediction", [
            'prediction' => $prediction,
            'comments' => $comments
        ]);
    }



}
