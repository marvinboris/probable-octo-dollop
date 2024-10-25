<?php

namespace App\Http\Controllers;

use Intervention\Image\ImageManagerStatic as Image;
use App\Models\Admin;
use App\Models\Customer;
use App\Models\Language;
use App\Models\Applicant;
use App\Models\Company;
use Illuminate\Http\Request;

class UtilController extends Controller
{
    private function guard()
    {
        $account = request()->user();
        switch ($account->token()->name) {
            case Applicant::personalAccessToken():
                $account = Applicant::find($account->id);
                break;
            case Company::personalAccessToken():
                $account = Company::find($account->id);
                break;
            case Admin::personalAccessToken():
                $account = Admin::find($account->id);
                break;
        }
        return $account;
    }

    public static function message($content, $type = 'info')
    {
        return [
            'type' => $type,
            'content' => $content
        ];
    }

    public static function get()
    {
        $account = request()->user();
        switch ($account->token()->name) {
            case Applicant::personalAccessToken():
                return Applicant::find($account->id);
            case Company::personalAccessToken():
                return Company::find($account->id);
            case Admin::personalAccessToken():
                return Admin::find($account->id);
        }
    }

    public static function cms()
    {
        $jsonString = file_get_contents(base_path('cms.json'));
        return json_decode($jsonString, true);
    }

    public static function rules($rule_list, $model)
    {
        $rules = [];
        foreach ($rule_list as $key => $rule) {
            if (strpos($rule, 'file') > 0) {
                $rule = str_replace('required', 'nullable', $rule);
                $check = true;
            } else if (strpos($rule, 'array') >= 0) $check = true;
            else $check = request()->input($key) !== $model->toArray()[$key];
            if ($check) $rules[$key] = $rule;
        }
        return $rules;
    }

    public static function isJson($string)
    {
        json_decode($string);
        return json_last_error() === JSON_ERROR_NONE;
    }



    // Authentication
    public function logout()
    {
        request()->user()->token()->revoke();

        return response()->json([
            'message' => self::message('Successfully logged out.', 'success'),
        ]);
    }

    public function account()
    {
        $account = $this->guard();

        $type = $account->type();

        $data = array_merge($account->toArray(), [
            'notifications' => $account->notifications()->latest()->limit(5)->get(),
        ]);

        return response()->json(['data' => $data, 'role' => $type,]);
    }


    // Notifications
    public function notifications()
    {
        $account = $this->guard();

        $notifications = [];
        foreach ($account->notifications()->latest()->get() as $notification) {
            $notifications[] = array_merge($notification->toArray(), [
                'data' => $notification->data
            ]);
        }

        return response()->json([
            'notifications' => $notifications
        ]);
    }

    public function notification($id)
    {
        $account = $this->guard();

        $notification = $account->notifications()->find($id);
        $notification->markAsRead();

        $type = $account->type();

        $data = array_merge($account->toArray(), [
            'notifications' => $account->notifications()->latest()->limit(5)->get(),
        ]);
        if ($type === Applicant::type()) {
            $role = $account->role;

            $role_features = [];
            foreach ($role->features as $feature) {
                $role_features[] = [
                    'id' => $feature->id,
                    'prefix' => $feature->prefix,
                    'permissions' => $feature->pivot->access,
                ];
            }

            $role = $role->toArray();
            $role['features'] = $role_features;

            $data = $data + [
                'role' => $role
            ];
        } else $data = array_merge($data, []);

        return response()->json([
            'notification' => $notification,
            'data' => $data,
        ]);
    }
}
