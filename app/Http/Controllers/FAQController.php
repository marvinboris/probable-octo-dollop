<?php

// app/Http/Controllers/FAQController.php

namespace App\Http\Controllers;

use App\Models\FAQ;
use Illuminate\Http\Request;

class FAQController extends Controller
{
    public function index()
    {
        return FAQ::all();
    }

    public function show($id)
    {
        return FAQ::findOrFail($id);
    }
}
