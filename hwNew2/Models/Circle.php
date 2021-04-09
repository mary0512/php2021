<?php


    namespace Models;

    use Exception;

    class Circle implements ShapeInterface
    {
        private $radius;

        public function __construct($radius)
        {
            if (!is_numeric($radius) || $radius <= 0) {
                throw new Exception(self::class . ' Некорректный ввод данных');
            }
            $this->radius = $radius;
        }

        function perimetr()
        {
            return round(2 * pi() * $this->radius);
        }

        function square()
        {
            return round(pi() * $this->radius ** 2);
        }
    }
