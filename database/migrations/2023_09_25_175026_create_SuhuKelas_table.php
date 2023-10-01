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
        Schema::create('SuhuKelas', function (Blueprint $table) {
            $table->id();
            $table->string('kelas');
            $table->decimal('suhu', 10,2);
            $table->integer('kelembapan');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.l
     */
    public function down(): void
    {
        Schema::dropIfExists('SuhuKelas');
    }
};
