<?php

    namespace App\MVC\Controllers;

    class Controller
    {
        private $data = [];

        public function __construct()
        {
        }

        public function loadModel($alias, $title){
            $model = "\\app\\MVC\\models\\" . $title;
            $this->$alias = new $model();
        }

        public function data($variable, $value){
            $this->data[$variable] = $value;
        }

    }