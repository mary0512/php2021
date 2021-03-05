<?php
    echo 'home work 1 <br/>' . PHP_EOL;
    echo '*** <br/>' . PHP_EOL;
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
        return "вы ввели несколько значений, одно из которых или оба не является числом <br/>";
    }

    $result1 = exponentiation(5, 4);
    $result2 = exponentiation(0, 2);
    $result3 = exponentiation('5', 2);
    $result4 = exponentiation(null, 2);
    $result5 = exponentiation([5, 2, 4], 2);
    $result6 = exponentiation(true, 2);
    $result7 = exponentiation('kuhj0', 2);

    var_dump($result1, $result2, $result3, $result4, $result5, $result6, $result7);

    echo '*** <br/>' . PHP_EOL;
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

    echo '*** <br/>' . PHP_EOL;
    /**
     * Написать функцию которая по параметрам принимает число из десятичной системы счисления и преобразовывает в двоичную.
     * Написать функцию которая выполняет преобразование наоборот.
     */

    /**
     * @param $dec
     *
     * @return string
     */

    echo 'Перевод из десятичной СС в двоичную СС <br/>' . PHP_EOL;

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

    echo 'Перевод из двоичной СС в десятичную СС (i--) <br/>' . PHP_EOL;

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

    echo 'Перевод из двоичной СС в десятичную СС (i++) <br/>' . PHP_EOL;

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

    echo '*** <br/>' . PHP_EOL;

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

    echo '*** <br/>' . PHP_EOL;
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

    function sortMinToMax($array)
    {
        for ($i = 0; $i < count($array); $i++) {
            for ($j = $i + 1; $j < count($array); $j++) {
                if ($array[$i] > $array[$j]) {
                    [$array[$i], $array[$j]] = [$array[$j], $array[$i]];
                }
            }
        }
        return $array;
    }

    function sortMaxToMin($array)
    {
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

        return 'Положительных чисел ' . $countPositive * 100 / $countAllElem . '%, <br/>' .
            'отрицательных чисел ' . $countNegative * 100 / $countAllElem . '%, <br/>' .
            'нулевых чисел ' . $countNull * 100 / $countAllElem . '%, <br/>' .
            'простых чисел ' . $countSimple * 100 / $countAllElem . '%. <br/>';
    }

    var_dump(percentNumArray($array));
    var_dump(sortMinToMax($array));
    var_dump(sortMaxToMin($array));

    echo '*** <br/>' . PHP_EOL;
    /**Для двумерных массивов
     * Транспонировать матрицу
     * Умножить две матрицы
     * Удалить те строки, в которых сумма элементов положительна и присутствует хотя бы один нулевой элемент. Аналогично для столбцов. */
    $matrix1              = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
    $matrix2              = [[7, 8, 9], [4, 5, 6], [1, 2, 3]];
    $countElMatrix1       = count($matrix1);
    $countInLastElMatrix1 = count($matrix1[$countElMatrix1 - 1]);
    $countElMatrix2       = count($matrix2);
    $countInLastElMatrix2 = count($matrix2[$countElMatrix2 - 1]);
    echo 'Первая матрица :' . '<br/>' . PHP_EOL;
    for ($row = 0; $row < $countElMatrix1; $row++) {
        for ($col = 0; $col < $countInLastElMatrix1; $col++)
            echo ' ' . $matrix1[$row][$col];
        echo '<br/>' . PHP_EOL;
    }
    echo 'Вторая матрица :' . '<br/>' . PHP_EOL;
    for ($row = 0; $row < $countElMatrix2; $row++) {
        for ($col = 0; $col < $countInLastElMatrix2; $col++)
            echo ' ' . $matrix2[$row][$col];
        echo '<br/>' . PHP_EOL;
    }
    echo 'Транспонирование первой матрицы:' . '<br/>' . PHP_EOL;
    for ($row = 0; $row < $countElMatrix1; $row++) {
        for ($col = 0; $col < $countInLastElMatrix1; $col++)
            echo ' ' . $matrix1[$col][$row];
        echo '<br/>' . PHP_EOL;
    }

    echo 'Умножение двух матриц:' . ' <br/>' . PHP_EOL;
    $resultMatrix = [];
    for ($i = 0; $i < $countElMatrix1; $i++) {
        for ($j = 0; $j < $countInLastElMatrix2; $j++) {
            $resultMatrix[$i][$j] = 0;
            for ($k = 0; $k < $countInLastElMatrix1; $k++)
                $resultMatrix[$i][$j] += $matrix1[$i][$k] * $matrix2[$k][$j];
        }
    }
    for ($row = 0; $row < $countElMatrix1; $row++) {
        for ($col = 0; $col < $countInLastElMatrix2; $col++) {
            echo ' ' . $resultMatrix[$row][$col];
        }
        echo '<br/>' . PHP_EOL;
    }

    echo 'Удалить те строки, в которых сумма элементов положительна и присутствует хотя бы один нулевой элемент.
     Аналогично для столбцов:' . ' <br/>' . PHP_EOL;

    $myMatrix = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
    ];

    function rowRemove($myMatrix)
    {
        for ($i = 0; $i < count($myMatrix); $i++) {
            $summElRow = 0;
            $rowHas0   = false;
            for ($j = 0; $j < count($myMatrix[$i]); $j++) {
                $summElRow += $myMatrix[$i][$j];
                if ($myMatrix[$i][$j] == 0) {
                    $rowHas0 = true;
                }
            }
            if ($summElRow > 0 && $rowHas0) {
                unset($myMatrix[$i]);
                $myMatrix = array_values($myMatrix);
            }
        }
        return $myMatrix;
    }

    var_dump(rowRemove($myMatrix));

    function colRemove($myMatrix)
    {
        for ($i = 0; $i < count($myMatrix[$i]); $i++) {
            $summElCol = 0;
            $colHas0   = false;
            for ($j = 0; $j < count($myMatrix); $j++) {
                $summElCol += $myMatrix[$j][$i];
                if ($myMatrix[$j][$i] == 0) {
                    $colHas0 = true;
                }
            }
            if ($summElCol > 0 && $colHas0) {
                foreach ($myMatrix as $row_index => $row) {
                    unset($myMatrix[$row_index][$i]);
                }
            }
        }
        foreach ($myMatrix as $row_index => $row) {
            $myMatrix[$row_index] = array_values($myMatrix[$row_index]);
        }

        return $myMatrix;
    }
var_dump(colRemove($myMatrix));
