<?php
    echo 'home work 1' . PHP_EOL;
    echo '***' . PHP_EOL;
//    Написать функцию, возведения числа N в степень M;

//    function exponentiation($n, $m)
//    {
//        if (is_numeric($n) && is_numeric($m)) {
//
//            return $n ** $m;
//        }
//        return 'вы ввели несколько значений, одно из которых или оба не является числом';
//    } не хочу совсем удалять, этот вариант мне больше нравится)))

    function exponentiation($n, $m)
    {
        if (is_numeric($n) && is_numeric($m)) {
            $e = 1;
            for ($i = 0; $i < $m; $i++) {
                $e *= $n;
            }
            return $e;
        };
        return "вы ввели несколько значений, одно из которых или оба не является числом";
    }

    $result1 = exponentiation(5, 4);
    $result2 = exponentiation(0, 2);
    $result3 = exponentiation('5', 2);
    $result4 = exponentiation(null, 2);
    $result5 = exponentiation([5, 2, 4], 2);
    $result6 = exponentiation(true, 2);
    $result7 = exponentiation('kuhj0', 2);

    var_dump($result1, $result2, $result3, $result4, $result5, $result6, $result7);

    echo '***' . PHP_EOL;
//    Написать функцию которая выводит первые N чисел Фибоначчи;

    /**
     * @param $n
     *
     * @return float|int
     */
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
    /**
     * Написать функцию которая по параметрам принимает число из десятичной системы счисления и преобразовывает в двоичную.
     * Написать функцию которая выполняет преобразование наоборот.
     */

    /**
     * @param $dec
     *
     * @return string
     */

    echo 'Перевод из десятичной СС в двоичную СС' . PHP_EOL;

    function decToBin($dec)
    {
        $dec             = floor($dec);
        $negDec          = $dec < 0;
        $dec             = abs($dec);
        $integerDivision = floor($dec / 2);
        $bin             = '';
        if ($integerDivision != 0) {
            $bin .= decToBin($integerDivision);
        }
        if ($negDec) {
            $bin = '-' . $bin;
        }
        return $bin .= $dec % 2;
    }

    var_dump(decToBin(-5));
    var_dump(decToBin(112));

    echo 'Перевод из двоичной СС в десятичную СС (i--)' . PHP_EOL;

    function binToDec($binNum)
    {
        $binNum       = (string)$binNum;
        $decNum       = 0;
        $strLenBinNum = strlen($binNum);
        for ($i = $strLenBinNum - 1; $i >= 0; $i--) {
            $decNum += exponentiation(2, $strLenBinNum - 1 - $i) * $binNum[$i]; // функция возведения в степень (exponentiation) создана ранее;
        }
        return $decNum;
    }

    var_dump(binToDec(1101010));
    var_dump(binToDec(101));

    echo 'Перевод из двоичной СС в десятичную СС (i++)' . PHP_EOL;

    function binToDec2($binNum)
    {
        $binNum       = (string)$binNum;
        $decNum       = 0;
        $strLenBinNum = strlen($binNum);
        for ($i = 0; $i <= $strLenBinNum - 1; $i++) {
            $decNum += exponentiation(2, $strLenBinNum - 1 - $i) * $binNum[$i];
        }
        return $decNum;
    }

    var_dump(binToDec2(1101010));
    var_dump(binToDec2(101));

    echo '***' . PHP_EOL;

    /**  Написать функцию которая вычисляет входит ли IP-адрес в диапазон указанных IP-адресов.
     * Вычислить для версии ipv4. */

    function ipInRange($startIp, $finishIp, $searchIp)
    {
        $startIpLong  = ip2long($startIp);
        $finishIpLong = ip2long($finishIp);
        $searchIpLong = ip2long($searchIp);

        if ($startIpLong === false || $finishIpLong === false
            || $searchIpLong === false) {
            echo 'Неверный IP-адрес';
        }

        if ($startIpLong <= $searchIpLong && $searchIpLong <= $finishIpLong) {
            echo 'IP-адрес в диапазоне указанных IP-адресов';
        } else {
            echo 'IP-адрес не входит в диапазон указанных IP-адресов';
        }
    }

    ipInRange('1.127.255.100', '128.0.0.0', '2.1.0.0');

    echo '***' . PHP_EOL;
    /**  Для одномерного массива
     * Подсчитать процентное соотношение положительных/отрицательных/нулевых/простых чисел
     * Отсортировать элементы по возрастанию/убыванию */
    $array = [6, -2, 0, 5];

    function is_prime($num)
    {
        for ($i = 2; $i <= sqrt($num); $i++) {
            if ($num % $i == 0) {
                return false;
            }
        }
        return true;
    }

    function sortMinToMax($array){
        for ($i = 0; $i < count($array); $i++) {
            for ($j = $i + 1; $j < count($array); $j++) {
                if ($array[$i] > $array[$j]) {
                    [$array[$i], $array[$j]] = [$array[$j], $array[$i]];
                }
            }
        }
        return $array;
    }

    function sortMaxToMin($array){
        for ($i = 0; $i < count($array); $i++) {
            for ($j = $i + 1; $j < count($array); $j++) {
                if ($array[$i] < $array[$j]) {
                    [$array[$i], $array[$j]] = [$array[$j], $array[$i]];
                }
            }
        }
        return $array;
    }

        function percentNumArray($array)
    {
        $countNull     = 0;
        $countPositive = 0;
        $countNegative = 0;
        $countSimple   = 0;
        $countAllElem  = 0;
        foreach ($array as $num) {
            $countAllElem++;
            if ($num == 0) {
                $countNull++;
            }
            if ($num < 0) {
                $countNegative++;
            }
            if ($num > 0) {
                $countPositive++;
                if (is_prime($num)) {
                    $countSimple++;
                }
            }
        }

        return 'Положительных чисел ' . $countPositive * 100 / $countAllElem . '%, ' .
            'отрицательных чисел ' . $countNegative * 100 / $countAllElem . '%, ' .
            'нулевых чисел ' . $countNull * 100 / $countAllElem . '%, ' .
            'простых чисел ' . $countSimple * 100 / $countAllElem . '%.';
    }

    var_dump(percentNumArray($array));
    var_dump(sortMinToMax($array));
    var_dump(sortMaxToMin($array));
