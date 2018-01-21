<?php
    // database info
    $hostname = "localhost";
    $dbname = "waadb";
    $user = "root";
    $pass = "root";
    $table = 'event';

    $con = mysql_connect($hostname,$user,$pass);
    $dbs = mysql_select_db($dbname, $con);

    $result = mysql_query("SELECT * FROM $table"); //query
    $array = mysql_fetch_row($result); //fetch result

    echo json_encode($array); //echo result as json
?>