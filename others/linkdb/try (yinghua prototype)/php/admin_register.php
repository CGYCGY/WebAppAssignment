<?php

include 'connect.php';

if(!empty($_POST)) {
    $userName = $_POST['userName'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    $firstname = $_POST['firstName'];
    $lastname = $_POST['lastName'];
    $emailAddress = $_POST['emailAddress'];
    $telephone = $_POST['telephone'];

    $query = 'INSERT INTO `admin` (`username`, `password`, `first_name`, `last_name`, `email_address`, `telephone_number`) VALUES (?,?,?,?,?,?)';
    $param = array($userName, $password, $firstname, $lastname, $emailAddress, $telephone);
    $result = dataQuery($query, $param);

    // for testing
    echo 1 == $result ? 'Thanks for registering, ' . $userName : 'There has been a problem processing your request, please try again later.';
}
?>