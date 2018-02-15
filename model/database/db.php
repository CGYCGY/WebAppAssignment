<?php


// Use MySQLi db
function initDB($query) {

    $db = mysqli_connect('localhost:3306','root','','waadb')
//    $db = mysqli_connect('localhost:3306','root','root','waadb')
    or die('Error connecting to Web Assignment Database Server.');

    mysqli_query($db, $query) or die ('Error ' . mysqli_error($db));
    mysqli_close($db);
}

function returnDB($query) {

    $db = mysqli_connect('localhost:3306','root','','waadb')
//    $db = mysqli_connect('localhost:3306','root','root','waadb')
    or die('Error connecting to Web Assignment Database Server.');

    $result = mysqli_query($db, $query) or die ('Error ' . mysqli_error($db));
    mysqli_close($db);

    return $result;
}
