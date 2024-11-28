<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasOne;
use Illuminate\Database\Eloquent\Relations\belongsTo;
use Illuminate\Database\Eloquent\Relations\MorphTo;

class Reaction extends Model
{

    protected $fillable = [
        'user_id',
        'reaction_type'
    ];

    public function reactionable(): morphTo {
        return $this->morphTo();
    }

    public function user() : belongsTo {
        return $this->belongsTo(User::class);

    }

    public function prediction() : HasOne {
        return $this->hasOne(Prediction::class);
    }

    public function comment() : HasOne {
        return $this->hasOne(Comment::class);
    }

}
