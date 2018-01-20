<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Use MySQLi
function post_user() {
    $db = mysqli_connect('localhost','root','','waadb')
    or die('Error connecting to Web Assignment Database Server.');

    if(!$db){
        echo "cannot connect to the server";
    }
}

post_user();
echo "user post called";

?>


