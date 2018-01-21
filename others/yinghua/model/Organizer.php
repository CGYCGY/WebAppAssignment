<?php

// strict check on syntax and semantics to display ALL errors on cli
ini_set('display_errors', 1);
error_reporting(E_ALL);
include 'db.php';

function admin_registration() {
    if(!empty($_GET)) {

        $username = $_GET['username'];
        $password = $_GET['password'];
        $first_name = $_GET['firstname'];
        $last_name = $_GET['lastname'];
        $email_address = $_GET['email'];
        $telephone = $_GET['telephone'];
    }
    $query = "INSERT INTO admin (username, password, first_name, last_name, email_address, telephone_number) VALUES ('$username', '$password', '$first_name', '$last_name', '$email_address', '$telephone');";
    initDB($query);
}

admin_registration();

?>


