<?php


    namespace Models;


    use Exception;

    class Triangle implements ShapeInterface
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