<?php

use App\Models\Candidat;
use App\Models\Offre;
use App\Models\Offre_emploi;
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
        Schema::create('candidatures', function (Blueprint $table) {
            $table->id();
            $table->foreignIdFor(Offre::class)->constrained('offres');
            $table->foreignIdFor(Candidat::class)->constrained('candidats');
            $table->date('date_de_soumission');
            $table->enum('statut', ['accepted', 'pending', 'rejected']);
            $table->string('CV');
            $table->string('lettre_de_motivation');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('candidatures');
    }
};
