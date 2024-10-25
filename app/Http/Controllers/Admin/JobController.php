<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Http\Controllers\UtilController;
use App\Models\Job;

class JobController extends Controller
{
    //
    public function store()
    {
        $data = request()->all();

        Job::create($data);

        return response()->json([
            'message' => UtilController::message('Job successfully created', 'success')
        ]);
    }
}
