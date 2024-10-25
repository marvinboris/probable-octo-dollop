<?php
// app/Http/Controllers/ContactController.php

namespace App\Http\Controllers;

use App\Mail\Contact as ContactMail;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return Contact::all();
    }

    public function store(Request $request)
    {
        $contact = Contact::create($request->all());
        Mail::to('brilucews@gmail.com')->send(new ContactMail($contact));
        return response()->json($contact, 201);
    }

    public function show($id)
    {
        return Contact::findOrFail($id);
    }
}
