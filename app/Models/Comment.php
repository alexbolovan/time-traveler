<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Notifications\Notifiable;

class Comment extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'body'
    ];

    public function comments() : HasMany {
        return $this->hasMany(Comment::class, 'parent_id');
    }


    public function prediction() : BelongsTo {
        return $this->belongsTo(Prediction::class);
    }

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function reactions() : MorphMany {
        return $this->morphMany(Reaction::class, 'reactionable');
    }

}
