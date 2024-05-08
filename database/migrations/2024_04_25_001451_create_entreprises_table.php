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
        Schema::create('entreprises', function (Blueprint $table) {
            $table->id();
            $table->string('nom_Entreprise');
            $table->string('logo');
            $table->string('adresse');
            $table->string('code_postal');
            $table->text('secteur');
            $table->string('ville');
            $table->string('Pays');
            $table->string('telephone');
            $table->string('email')->unique();
            $table->string('hr_email')->unique();
            $table->string('password');
            $table->string('site_web');
            $table->string('registre_decommerce');
            $table->string('hr_nom');
            $table->timestamp('verified_at')->nullable();
            $table->rememberToken();
            $table->softDeletes();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('entreprises');
    }
};
