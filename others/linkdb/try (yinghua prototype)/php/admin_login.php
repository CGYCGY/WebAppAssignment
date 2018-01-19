<?php
include 'connect.php';

if(!empty($_POST)) {
    $userName = $_POST['username'];
    $password = $_POST['pass'];
    $query = "SELECT `password` FROM `admin` WHERE `username` = ?";
    $param = array($userName);
    $result = dataQuery($query, $param);
}

$hash = $result[0]['password'];
echo $hash;
echo "\n";
echo password_hash($password, PASSWORD_DEFAULT);
echo $_POST['pass'];
echo "\n";
echo password_verify($password, $hash) ? 'You are logged in.' : 'We are unable to log you in.';

if(password_verify($password, $hash)) {
    //what happen if password true
}
?>