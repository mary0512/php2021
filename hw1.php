<?php
    echo 'home work 1' . PHP_EOL;
    echo '***' . PHP_EOL;
//    Написать функцию, возведения числа N в степень M;

    function exponentiation($n, $m)
    {
        if (is_numeric($n) && is_numeric($m)) {

            return $n ** $m;
        }
        return 'вы ввели несколько значений, одно из которых или оба не является числом';
    }

    $result1 = exponentiation(5, 2);
    $result2 = exponentiation(0, 2);
    $result3 = exponentiation('5', 2);
    $result4 = exponentiation(null, 2);
    $result5 = exponentiation([5, 2, 4], 2);
    $result6 = exponentiation(true, 2);
    $result7 = exponentiation('kuhj0', 2);

    var_dump($result1, $result2, $result3, $result4, $result5, $result6, $result7);

    echo '***' . PHP_EOL;
//    Написать функцию которая выводит первые N чисел Фибоначчи;

    function fibonacci($n)
    {
        $sq5 = 5 ** 0.5;
        $a   = (1 + $sq5) / 2;
        $b   = (1 - $sq5) / 2;
        return (($a ** $n) - ($b ** $n)) / $sq5;
    }

    var_dump('fibonacci', fibonacci(6));

    function fibList($n)
    {
        $arrFib = [];
        for ($i = 1; $i <= $n; $i++) {
            array_push($arrFib, fibonacci($i));
        }
        return $arrFib;
    }

    var_dump('fibList', fibList(8));

    echo '***' . PHP_EOL;
