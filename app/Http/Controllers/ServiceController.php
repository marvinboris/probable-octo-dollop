<?php
// app/Http/Controllers/ServiceController.php

namespace App\Http\Controllers;

use App\Models\Service;
use Illuminate\Http\Request;

class ServiceController extends Controller
{
    public function index()
    {
        return Service::orderBy('id', 'desc')->get();
    }

    public function show($id)
    {
        return Service::findOrFail($id);
    }
}
