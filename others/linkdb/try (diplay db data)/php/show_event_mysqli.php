<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    // database info
    $hostname = "localhost";
    $dbname = "waadb";
    $user = "root";
    $pass = "root";
    $table = 'event';

    $con = mysqli_connect($hostname,$user,$pass,$dbname);
    $dbs = mysqli_select_db($con, $dbname);

    $result = mysqli_query($con,"SELECT * FROM $table"); //query
    $array = mysqli_fetch_row($result); //fetch result

    echo json_encode($array); //echo result as json
?>