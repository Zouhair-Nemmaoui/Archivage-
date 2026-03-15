<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Programme extends Model
{
 use HasFactory;

    protected $fillable = [
        'titre',
        'duree',
        'Date',
        'Ndesupport',
        'category',
        'technicien',
        'notes',
    ];
     public function chart()
    {
        return $this->belongsTo(Chart::class, 'category', 'category');
    }
   
}
