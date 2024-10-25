<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Mail\CompanyCreated;
use App\Models\Company;
use Illuminate\Support\Facades\Mail;

class CompanyController extends Controller
{
    //
    public function store()
    {
        $data = request()->all();

        Company::create($data);
        Mail::to($data['email'])->send(new CompanyCreated($data));

        return response()->json([
            'message' => UtilController::message('Company successfully created', 'success')
        ]);
    }
}
