<?php

use App\Models\Candidat;
use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('profilecandidats', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Candidat::class)->constrained('candidats');
            $table->string('cin');
            $table->string('photo')->nullable();
            $table->string('niveau_etude')->nullable();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('profilecandidats');
    }
};
