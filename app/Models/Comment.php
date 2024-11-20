<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Notifications\Notifiable;

class Comment extends Model
{
    use HasFactory, Notifiable;
    protected $fillable = [
        'body'
    ];

    public function prediction() {
        return $this->belongsTo(Prediction::class);
    }


}
