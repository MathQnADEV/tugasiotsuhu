<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class suhukelas extends Model
{
    use HasFactory;

    protected $fillable = [
        'kelas',
        'suhu',
        'kelembapan'
    ];
}
