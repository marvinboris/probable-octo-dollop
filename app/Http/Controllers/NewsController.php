<?php
// app/Http/Controllers/NewsController.php

namespace App\Http\Controllers;

use App\Models\News;
use Illuminate\Http\Request;

class NewsController extends Controller
{
    public function index()
    {
        $count = request()->count;

        $data = News::latest();

        if ($count) $data = $data->limit($count);

        return $data->get();
    }

    public function show($id)
    {
        return News::findOrFail($id);
    }
}
