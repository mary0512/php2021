<?php


    namespace App\MVC\Models;


    class ProductModel
    {
        public function getAll()
        {
            return [
                [
                    "name" => "Аспирин",
                    "type" => "таблетки",
                    "price" => "80",
                    "availability" => "17"
                ],
                [
                    "name" => "парацетамол",
                    "type" => "таблетки шипучие",
                    "price" => "100",
                    "availability" => "77"

                ],
                [
                    "name" => "Диазолин",
                    "type" => "драже",
                    "price" => "15",
                    "availability" => "9"
                ],
                [
                    "name" => "Смекта",
                    "type" => "порошки",
                    "price" => "100",
                    "availability" => "5"
                ],
            ];
        }

    }