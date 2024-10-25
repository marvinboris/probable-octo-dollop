<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class ServiceSeeder extends Seeder
{
    public function run()
    {
        $services = [
            [
                'name' => "Emirates ID Typing",
                'description' => "Emirates ID typing is a service that helps individuals in the United Arab Emirates with the process of applying for or renewing their Emirates ID card. Trained professionals assist in filling out the necessary forms and entering accurate information into the system to ensure a smooth and efficient application process. This service saves time and reduces the chances of errors, making it easier for individuals to obtain their Emirates ID card.",
                'body' => "",
                'link' => "/services/emirates-id-typing",
                'slug' => "emirates-id-typing",
            ],
            [
                'name' => "Visa Services",
                'description' => "Visa services provide assistance to individuals seeking to obtain visas for travel or immigration purposes. These services offer guidance on the visa application process, help with completing necessary forms, and ensure that all required documents are submitted correctly and on time. By utilizing visa services, individuals can navigate the often complex and time-consuming visa application process with ease, increasing their chances of approval and minimizing the possibility of delays or rejections.",
                'body' => "",
                'link' => "/services/visa-services",
                'slug' => "visa-services",
            ],
            [
                'name' => "Medical Typing",
                'description' => "Medical typing services in the UAE offer support to healthcare professionals and facilities in accurately transcribing medical reports, records, and other documentation. Trained typists ensure that medical terminology is correctly spelled and formatted, helping to maintain the integrity and accuracy of patient information. This service helps to streamline administrative tasks, reduce errors, and improve the efficiency of healthcare operations. By outsourcing medical typing tasks, healthcare providers can focus on delivering quality care to their patients while ensuring that their documentation is thorough and compliant with regulations.",
                'body' => "",
                'link' => "/services/medical-typing",
                'slug' => "medical-typing",
            ],
            [
                'name' => "Occupational Health Card",
                'description' => "Occupational Health Card (OHC) is a mandatory certification required for individuals working in specific occupations in the United Arab Emirates. The card is issued to those who pass a medical examination to ensure they are fit to work in their respective fields. Occupational Health Cards are essential for individuals working in industries such as construction, healthcare, and food handling, where there is a higher risk of occupational hazards. Possessing an OHC demonstrates that the individual has met the necessary health and safety standards to perform their job duties safely and effectively. This certification plays a crucial role in safeguarding the health and well-being of workers and promoting a safe working environment in various industries.",
                'body' => "",
                'link' => "/services/occupational-health-card",
                'slug' => "occupational-health-card",
            ],
            [
                'name' => "RTA Typing Services",
                'description' => "RTA typing services provide assistance to individuals in the United Arab Emirates who need help with processing various transactions related to the Roads and Transport Authority (RTA). These services help with filling out and submitting forms for vehicle registration, driver's license renewal, fines payment, and other RTA-related procedures. Trained professionals ensure that all necessary information is accurately entered into the system, helping to expedite the processing of applications and reduce the likelihood of errors or delays. By utilizing RTA typing services, individuals can save time and effort while ensuring that their transactions with the RTA are completed efficiently and effectively.",
                'body' => "",
                'link' => "/services/rta-typing-services",
                'slug' => "rta-typing-services",
            ],
            [
                'name' => "Document Clearance",
                'description' => "Document clearance services assist individuals and businesses in managing the process of obtaining necessary approvals and permits for various legal documents. These services involve facilitating the submission, review, and approval of paperwork required for tasks such as visa applications, business registrations, property transactions, and more. Document clearance services ensure that all required documents are properly prepared, submitted in a timely manner, and comply with relevant regulations. By outsourcing document clearance tasks to professionals, individuals and businesses can streamline the paperwork process, avoid potential errors, and expedite the approval process, ultimately saving time and reducing the hassle of dealing with complex legal requirements.",
                'body' => "",
                'link' => "/services/document-clearance",
                'slug' => "document-clearance",
            ],
        ];

        DB::table('services')->insert($services);
    }
}
