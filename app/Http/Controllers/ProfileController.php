<?php

namespace App\Http\Controllers;

use App\Http\Requests\ProfileUpdateRequest;
use App\Models\Prediction;
use App\Models\User;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;
use Inertia\Inertia;
use Inertia\Response;

class ProfileController extends Controller
{
    public function debug($prediction) {
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

    /**
     * Display the user's profile form.
     */
    public function edit(Request $request): Response
    {
        return Inertia::render('Profile/Edit', [
            'mustVerifyEmail' => $request->user() instanceof MustVerifyEmail,
            'status' => session('status'),
        ]);
    }

    /**
     * Update the user's profile information.
     */
    public function update(ProfileUpdateRequest $request): RedirectResponse
    {
        $request->user()->fill($request->validated());

        if ($request->user()->isDirty('email')) {
            $request->user()->email_verified_at = null;
        }

        $request->user()->save();

        return Redirect::route('profile.edit');
    }

    /**
     * Delete the user's account.
     */
    public function destroy(Request $request): RedirectResponse
    {
        $request->validate([
            'password' => ['required', 'current_password'],
        ]);

        $user = $request->user();

        Auth::logout();

        $user->delete();

        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return Redirect::to('/');
    }

    public function user(Request $request, $user_id) {
        // user_name
        // paginate most recent comments and posts
        $user_profile = User::with([
            'predictions',
            'comments'
        ])->find($user_id);

        $user_profile = $user_profile->toArray();

        //dd($user_profile);

        Return Inertia::render("User", [
            'profile' => $user_profile
        ]);
    }
}
