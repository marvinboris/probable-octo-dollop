<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function index(): JsonResponse
    {
        $totalCompanies = 0;
        $totalApplicants = 0;
        $totalJobs = 0;

        return response()->json([
            'total_companies' => $totalCompanies,
            'total_applicants' => $totalApplicants,
            'total_jobs' => $totalJobs,
        ]);
    }
}
