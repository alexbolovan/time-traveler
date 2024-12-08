<?php

namespace App\Models;

// use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;

class User extends Authenticatable
{
    /** @use HasFactory<\Database\Factories\UserFactory> */
    use HasFactory, Notifiable;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'email',
        'password',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * Get the attributes that should be cast.
     *
     * @return array<string, string>
     */
    protected function casts(): array
    {
        return [
            'email_verified_at' => 'datetime',
            'password' => 'hashed',
        ];
    }

    public function predictions() :HasMany {
        return $this->hasMany(Prediction::class);
    }

    public function comments() :HasMany {
        return $this->hasMany(Comment::class);
    }

    public function reactions() :HasMany {
        return $this->hasMany(Reaction::class);
    }

    public function getUserInteractions($user_id)
    {
        // Fetch predictions and comments directly
        $predictions = Prediction::where('user_id', $user_id)->get();
        $comments = Comment::where('user_id', $user_id)->get();

        // Combine and sort by created_at
        $interactions = $predictions
            ->concat($comments) // Combine the two collections
            ->sortByDesc('created_at') // Sort by `created_at`
            ->values(); // Reset array keys

        // Return the combined data
        return response()->json($interactions);
    }

}
