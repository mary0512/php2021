<?php


    namespace Models;

    use Exception;
    use Models\ShapeInterface;
    use Models\MyLogger;

    class Rectangle implements ShapeInterface
    {
        private $width;
        private $height;

        public function __construct($width, $height)
        {
            MyLogger::info('Прямоугольник');
            if (!is_numeric($width) || !is_numeric($height) || $width <= 0 || $height <= 0) {
                throw new Exception(self::class . ' Некорректный ввод данных');
            }
            $this->width  = $width;
            $this->height = $height;
        }

        function perimetr()
        {
            return ($this->width + $this->height) * 2;
        }

        function square()
        {
            return $this->width * $this->height;
        }
    }

