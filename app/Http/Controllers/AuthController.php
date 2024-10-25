<?php

namespace App\Http\Controllers;

use App\Mail\ResetLink;
use App\Mail\Welcome;
use App\Models\Admin;
use App\Models\Applicant;
use App\Models\Company;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Mail;

class AuthController extends Controller
{
    //
    public function adminLogin()
    {
        $data = request()->all();

        $message = [
            'content' => 'Incorrect credentials',
            'type' => 'danger'
        ];

        $admin = Admin::where('email', $data['email'])->first();
        if (!$admin) return response()->json($message, 403);

        $check = Hash::check($data['password'], $admin->password);
        if (!$check) return response()->json($message, 403);


        $tokenResult = $admin->createToken(Admin::personalAccessToken());
        $token = $tokenResult->token;

        $token->expires_at = Carbon::now()->addWeeks(1);
        $token->save();

        return response()->json([
            'token' => 'Bearer ' . $tokenResult->accessToken,
            'expires_at' => Carbon::parse(
                $tokenResult->token->expires_at
            )->toDateTimeString(),
            'data' => $admin,
        ]);
    }
}
