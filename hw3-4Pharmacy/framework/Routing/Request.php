<?php


    namespace Framework\Routing;


    class Request
    {
        private $path;
        private $get_params;
        private $post_params;
        private $method;

        public function __construct()
        {
            $this->path = $_GET['path'] ?? ''; // isset($_GET['path']) ? $_GET['path'] : ''
            $this->get_params = $_GET;
            unset($this->get_params['path']);
            $this->post_params = $_POST;
            if($_SERVER['REQUEST_METHOD'] === 'POST') $this->type = Route::METHOD_POST;
            if($_SERVER['REQUEST_METHOD'] === 'GET') $this->type = Route::METHOD_GET;
        }

        /**
         * @return mixed|string
         */
        public function getPath(): string
        {
            return $this->path;
        }

        /**
         * @return array
         */
        public function getGetParams(): array
        {
            return $this->get_params;
        }

        /**
         * @return int
         */
        public function getType(): int
        {
            return $this->type;
        }
    }

