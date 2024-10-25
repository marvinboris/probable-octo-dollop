<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class FAQSeeder extends Seeder
{
    public function run()
    {
        $faqs = [
            [
                'question' => "What services do you offer?",
                'answer' => "We offer a range of services including visa processing, document clearance, medical typing, Emirates ID typing, and RTA typing services, tailored to meet your specific needs.",
            ],
            [
                'question' => "How can I contact you?",
                'answer' => "We offer a range of services including visa processing, document clearance, medical typing, Emirates ID typing, and RTA typing services, tailored to meet your specific needs.",
            ],
            [
                'question' => "What are your service fees?",
                'answer' => "We offer a range of services including visa processing, document clearance, medical typing, Emirates ID typing, and RTA typing services, tailored to meet your specific needs.",
            ],
            [
                'question' => "How long does it take to process my request?",
                'answer' => "We offer a range of services including visa processing, document clearance, medical typing, Emirates ID typing, and RTA typing services, tailored to meet your specific needs.",
            ],
            [
                'question' => "Do you offer expedited services?",
                'answer' => "We offer a range of services including visa processing, document clearance, medical typing, Emirates ID typing, and RTA typing services, tailored to meet your specific needs.",
            ],
        ];

        DB::table('f_a_q_s')->insert($faqs);
    }
}
