<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('reactions', function (Blueprint $table) {
            $table->id();
            $table->foreignId('user_id')->constrained()->cascadeOnDelete(); // who made reaction

            // polymorphic depending on model being either post or comment (model should be specified here ie. App\Models\Prediction)
            // in the table there will also be an associated reactionable_id which specify the ID of the item in the model we select
            $table->morphs('reactionable');
            $table->string('reaction_type'); // this will need to be verified in the model

            $table->unique(['id']);
            $table->timestamps();


        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('reactions');
    }
};
