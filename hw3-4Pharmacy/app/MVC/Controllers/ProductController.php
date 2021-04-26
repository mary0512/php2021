<?php

    namespace App\MVC\Controllers;

    class ProductController extends Controller
    {
        public function __construct()
        {
            parent::__construct();
        }

        public function downloadCSV()
        {
            $this->loadModel("product", "ProductModel");

            $products = $this->product->getAll();
            return $products;

        }

    }