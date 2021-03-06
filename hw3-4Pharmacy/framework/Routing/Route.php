<?php

namespace Framework\Routing;

    class Route
    {
        const METHOD_GET = 1;
        CONST METHOD_POST = 2;
        private $path;
        private $action;
        private $type;
        public function __construct($path, $action, $type)
        {
            $this->path = $path;
            $this->action = $action;
            $this->type = $type;
        }

        /**
         * @return mixed
         */
        public function getPath()
        {
            return $this->path;
        }

        /**
         * @return mixed
         */
        public function getAction()
        {
            return $this->action;
        }

        /**
         * @return mixed
         */
        public function getType()
        {
            return $this->type;
        }

    }