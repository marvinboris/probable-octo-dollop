<?php
// app/Http/Controllers/TestimonyController.php

namespace App\Http\Controllers;

use App\Models\Testimony;
use Illuminate\Http\Request;

class TestimonyController extends Controller
{
    public function index()
    {
        return Testimony::all();
    }

    public function show($id)
    {
        return Testimony::findOrFail($id);
    }
}
