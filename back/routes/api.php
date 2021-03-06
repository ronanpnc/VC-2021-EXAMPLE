<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\UserController;
use App\Http\Controllers\TaskController;

Route::get('users', [UserController::class, 'index']);
Route::post('users', [UserController::class, 'createUser']);

Route::get('tasks', [TaskController::class, 'index']);
Route::get('tasks/{id}', [TaskController::class, 'show']);

Route::post('tasks', [TaskController::class, 'createTask']);
Route::put('tasks/{id}', [TaskController::class, 'updateTask']);
Route::delete('tasks/{id}', [TaskController::class, 'deleteTask']);

Route::get('tasks/search/{title}', [TaskController::class, 'search']);
