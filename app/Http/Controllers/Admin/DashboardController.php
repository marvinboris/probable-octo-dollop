<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Applicant;
use App\Models\Job;
use Illuminate\Http\JsonResponse;

class DashboardController extends Controller
{
    public function index(): JsonResponse
    {
        $totalCompanies = Company::count();
        $totalApplicants = Applicant::count();
        $totalJobs = Job::count();

        return response()->json([
            'total_companies' => $totalCompanies,
            'total_applicants' => $totalApplicants,
            'total_jobs' => $totalJobs,
        ]);
    }
}
