<?php

use App\Models\Entreprise;
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
        Schema::create('offreemplois', function (Blueprint $table) {
            $table->id();
            $table->string('titre');
            $table->string('domaine');
            $table->string('niveau_etude');
            $table->string('experience');
            $table->string('nombre_poste');
            $table->string('secteur_activite');
            $table->string('type_emploi');
            $table->string('lieu');
            $table->text('description');
            $table->date('date_Publication');
            $table->date('date_limite_candidature');
            $table->string('salaire')->nullable();
            $table->string('type_contrat');
            $table->foreignIdFor(Entreprise::class)->constrained('entreprises');
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('offre_emplois');
    }
};
