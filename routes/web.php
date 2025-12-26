<?php

use App\Http\Controllers\PostController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Laravel\Fortify\Features;

Route::get('/', function () {
    return Inertia::render('welcome', [
        'canRegister' => Features::enabled(Features::registration()),
    ]);
})->name('home');

Route::get('/hello', function () {
    return "hello World!";
});

Route::get('/contact', function () {
    return Inertia::render('Contact', [
        'greetings' => "Hello World!",
        'name' => 'Dhurjoy Paul'
    ]);
});

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', [PostController::class, 'index'])->name('dashboard');
});
Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('posts', [PostController::class, 'index'])->name('posts');
});


// Route::middleware(['auth', 'verified'])->group(function () {
//     Route::get('dashboard', function () {
//         return Inertia::render('dashboard');
//     })->name('dashboard');
// });

require __DIR__ . '/settings.php';
