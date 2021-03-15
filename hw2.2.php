<?php

//    spl_autoload_register();
    include 'MyLogger.php';

    interface Shape
    {
        public function perimetr();

        public function square();
    }

    class Rectangle implements Shape
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

    try {
        $rectangle = new Rectangle('3ррр', 5);
        var_dump('$rectangle', $rectangle->perimetr(), $rectangle->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }

    try {
        $rectangle1 = new Rectangle(8, 11);
        var_dump('$rectangle1', $rectangle1->perimetr(), $rectangle1->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }


    class Circle implements Shape
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

    try {
        $circle = new Circle(8);
        var_dump('$circle', $circle->perimetr(), $circle->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }

    try {
        $circle1 = new Circle('jj3');
        var_dump('$circle1', $circle1->perimetr(), $circle1->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }

    class Triangle implements Shape
    {
        private $side1;
        private $side2;
        private $side3;


        public function __construct($side1, $side2, $side3)
        {
            if (
                !is_numeric($side1)
                || !is_numeric($side2)
                || !is_numeric($side3)
                || $side1 <= 0
                || $side2 <= 0
                || $side3 <= 0
            ) {
                throw new Exception(self::class . ' Некорректный ввод данных');
            }
            $this->side1 = $side1;
            $this->side2 = $side2;
            $this->side3 = $side3;

        }

        function perimetr()
        {
            return $this->side1 + $this->side2 + $this->side3;
        }

        function square()
        {
            $perimetr = $this->perimetr();
            return round(($perimetr * ($perimetr - $this->side1) * ($perimetr - $this->side2) * ($perimetr - $this->side3)) ** 0.5);
        }
    }

    try {
        $triangle  = new Triangle(3, 5, 4);
        var_dump('$triangle', $triangle->perimetr(), $triangle->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }

    try {
        $triangle1 = new Triangle(-38, 15, 41);
        var_dump('$triangle1', $triangle1->perimetr(), $triangle1->square());
    } catch (Exception $e) {
        MyLogger::error($e->getMessage());
    }