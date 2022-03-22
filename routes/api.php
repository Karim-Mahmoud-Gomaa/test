<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::post('login', [App\Http\Controllers\Api\AuthController::class,'login']);
Route::group(["middleware" => "auth:api"], function(){
    Route::post('logout', [App\Http\Controllers\Api\AuthController::class,'logout']);
    Route::resource('categories', App\Http\Controllers\Api\CategoriesController::class);
    Route::resource('articles', App\Http\Controllers\Api\ArticlesController::class);
    Route::resource('users', App\Http\Controllers\Api\UsersController::class);
    Route::get('user', [App\Http\Controllers\Api\AuthController::class,'user']);
    Route::get('home', [App\Http\Controllers\Api\PublicController::class,'home']);
    Route::post('articles_image', [App\Http\Controllers\Api\ArticlesController::class,'saveImage']);
});

