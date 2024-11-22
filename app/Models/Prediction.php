<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Relations\HasMany;
use Illuminate\Database\Eloquent\Relations\MorphMany;
use Illuminate\Notifications\Notifiable;

class Prediction extends Model
{
    //
    use HasFactory, Notifiable;
    protected $fillable = [
        'title',
        'body'
    ];

    public function user() : BelongsTo {
        return $this->belongsTo(User::class);
    }

    public function reactions() : morphMany {
        return $this->morphMany(Reaction::class, 'reactionable');
    }

    public function comments() : HasMany {
        return $this->hasMany(Comment::class);
    }





}
