<?php

    use Models\Rectangle;
    use Models\Circle;
    use Models\Triangle;
    use Models\MyLogger;

    function my_autoloader($class)
    {
        $class = str_replace('\\', DIRECTORY_SEPARATOR, $class);
        include __DIR__ . DIRECTORY_SEPARATOR . $class . '.php';
    }

    spl_autoload_register('my_autoloader');


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

    try {
        $triangle = new Triangle(3, 5, 4);
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