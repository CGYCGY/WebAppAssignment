<?php

ini_set('display_errors', 1);
error_reporting(E_ALL);

// Use MySQLi
function post_organizer() {
    $db = mysqli_connect('localhost','root','','waadb')
    or die('Error connecting to Web Assignment Database Server.');

    if(!$db){
        echo "cannot connect to the server";
    }
}

post_organizer();
echo "organizer post called";

?>


