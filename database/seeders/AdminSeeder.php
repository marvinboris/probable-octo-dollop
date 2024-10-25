<?php

namespace Database\Seeders;

use App\Models\Admin;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class AdminSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $admins = [
            [
                'name' => 'Boris Marvin Ndouma',
                'email' => 'jaris.ultio.21@gmail.com',
                'phone' => '237 655588688',
                'password' => Hash::make('12345'),
            ],
            [
                'name' => 'TC Typing',
                'email' => 'tctyping@admin.com',
                'phone' => '971 580232333',
                'password' => Hash::make('12345'),
            ]
        ];
        foreach ($admins as $admin) {
            Admin::create($admin);
        }
    }
}
