<?php

    namespace Models;

    class MyLogger
    {
        public static function trace($message)
        {
            self::log('TRACE', $message);
        }

        public static function debug($message)
        {
            self::log('DEBUG', $message);
        }

        public static function info($message)
        {
            self::log('INFO', $message);
        }

        public static function warn($message)
        {
            self::log('WARN', $message);
        }

        public static function error($message)
        {
            self::log('ERROR', $message);
        }

        public static function fatal($message)
        {
            self::log('FATAL', $message);
        }

        private static function log($level, $message)
        {
            $file = date('Y-m-d') . '.log';
            file_put_contents($file, implode(';', [date("Y-m-d H:i:s"), $level, $message]) . PHP_EOL, FILE_APPEND); // echo date("Y-m-d H:i:s") . ';' . $level . ';' . $message;
        }


    }