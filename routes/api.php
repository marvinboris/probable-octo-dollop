<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\FAQController;
use App\Http\Controllers\NewsController;
use App\Http\Controllers\ServiceController;
use App\Http\Controllers\TestimonyController;
use App\Http\Controllers\Admin\CompanyController as AdminCompanyController;
use App\Http\Controllers\Admin\JobController as AdminJobController;
use App\Http\Controllers\Admin\DashboardController as AdminDashboardController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\UtilController;

Route::apiResource('contacts', ContactController::class);
Route::apiResource('faqs', FAQController::class);
Route::apiResource('news', NewsController::class);
Route::apiResource('services', ServiceController::class);
Route::apiResource('testimonies', TestimonyController::class);

Route::namespace('Admin')->prefix('admin')->name('admin.')->group(function () {
    Route::post('/login', [AuthController::class, 'adminLogin'])->name('login');

    Route::middleware('auth:admin')->group(function () {
        Route::get('/dashboard', [AdminDashboardController::class, 'index'])->name('dashboard');

        Route::post('/jobs', [AdminJobController::class, 'store'])->name('jobs.store');
        Route::post('/companies', [AdminCompanyController::class, 'store'])->name('companies.store');
    });
});

Route::middleware('auth:admin,employer,api')->group(function () {
    Route::get('logout', [UtilController::class, 'logout'])->name('logout');
    Route::get('account', [UtilController::class, 'account'])->name('account');

    Route::prefix('notifications')->name('notifications.')->group(function () {
        Route::get('{notification}', [UtilController::class, 'notification'])->name('show');
        Route::get('', [UtilController::class, 'notifications'])->name('index');
    });
});
