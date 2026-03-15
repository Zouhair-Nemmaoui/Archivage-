<?php

namespace App\Models;


use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Chart extends Model
{
    use HasFactory;

    protected $table = 'charts';
    protected $fillable = ['category', 'total_count'];

    public function programmes()
    {
        return $this->hasMany(Programme::class, 'category', 'category');
    }
}

