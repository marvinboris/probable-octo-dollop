<?php

namespace Database\Seeders;

use App\Models\News;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;

class NewsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $news = [
            [
                'title' => "Revolutionizing Car Sales: Introducing Our New Online Platform for Buying and Selling Vehicles",
                'body' => "One of the most striking aspects of Cameroonian culture is its diversity. With over 250 ethnic groups, each with its own language, customs, and traditions, Cameroon is a melting pot of cultures. From the Bamileke people of the West Region to the Tikar of the North, the Fulani of the Far North to the Duala of the Littoral Region, every corner of Cameroon offers a unique cultural experience. Despite this diversity, Cameroonians share a strong sense of national identity, united by their love for their country and pride in their heritage.",
                'comments' => 10,
                'photo' => "/images/a90a3531f330cb1702a835b35a4fbf93.png",
            ],
            [
                'title' => "Yaounde capital city cameroon africa hi-res stock photography and images ",
                'body' => "Cameroonian traditions are often celebrated through colorful ceremonies and festivals that highlight the rich cultural heritage of the various ethnic groups. One such ceremony is the Ngondo Festival, celebrated by the Duala people in Douala. This week-long event brings together people from all walks of life to honor their ancestors through music, dance, and ritual performances. Similarly, the Nguon Festival of the Bamileke people is a spectacle of vibrant costumes, traditional music, and elaborate masquerades, symbolizing unity and community spirit.",
                'comments' => 10,
                'photo' => "/images/86a4ed407bb2cb974e759abf3415a6e9.png",
            ],
            [
                'title' => "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
                'body' => "Cameroonian traditions are often celebrated through colorful ceremonies and festivals that highlight the rich cultural heritage of the various ethnic groups. One such ceremony is the Ngondo Festival, celebrated by the Duala people in Douala. This week-long event brings together people from all walks of life to honor their ancestors through music, dance, and ritual performances. Similarly, the Nguon Festival of the Bamileke people is a spectacle of vibrant costumes, traditional music, and elaborate masquerades, symbolizing unity and community spirit.",
                'comments' => 10,
                'photo' => "/images/44c253a0c8bfb01c6bf21458e47bcfaf.png",
            ],
            [
                'title' => "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
                'body' => "Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.",
                'comments' => 10,
                'photo' => "/images/2cb8a5aa0361618c368893d196ccddf0.webp",
            ],
            [
                'title' => "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
                'body' => "Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.",
                'comments' => 10,
                'photo' => "/images/072c34eb2c9f18d73507e3d1d3880ddb.webp",
            ],
            [
                'title' => "CDS Human Resources Ltd (Douala, Cameroon) - Contact Phone, Address",
                'body' => "Uncover the latest economic trends, investment opportunities, and development projects driving Cameroon's growth trajectory. Stay ahead with insightful commentary and industry reports.",
                'comments' => 10,
                'photo' => "/images/7241e675ff682badc2b2d3bb368db6f3.webp",
            ],
        ];
        foreach ($news as $item) {
            News::create($item);
        }
    }
}
