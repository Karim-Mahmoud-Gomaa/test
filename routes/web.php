<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
Route::get('/', function () {return redirect()->route('articles.index');});
Route::resource('articles', App\Http\Controllers\Web\ArticlesController::class);

Route::get('{any}', function ($any) {return view('backEnd');})->where('any', '.*');

// Route::get('admin', function () {return view('backEnd');});
// Route::get('admin/{route?}', function () {return view('backEnd');});
// Route::get('admin/{route}/{param}', function () {return view('backEnd');});
