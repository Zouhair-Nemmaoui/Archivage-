<?php

use App\Http\Controllers\Forms;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ChartController;

Route::get('/', function () {
    return view('welcome');
});

// API Routes
Route::post('/ajouter', [Forms::class, 'create']);
Route::get('/programmes', [Forms::class, 'index']);

Route::get('/get-chart-data', [ChartController::class, 'index']);