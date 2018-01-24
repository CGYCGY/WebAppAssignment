<?php
include '../database/db.php';
ini_set('display_errors', 1);
error_reporting(E_ALL);

$message = '';
$username = $_GET['username'];
$password = $_GET['password'];


function admin_login($username, $password) {


    if(!CheckLoginInDB($username,$password))
    {
        return false;
    }
    else{
        return true;
    }

}

function CheckLoginInDB($username,$password)
{
    $query = "SELECT username, password FROM admin WHERE username = '$username' AND password = '$password';";
    $result = returnDB($query);

    if(!$result || mysqli_num_rows($result) <= 0 ) {
        return false;
    }

    return true;
}

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

if(admin_login($username,$password))
{
    header("Location: ../../view/login/logout.html");
}
else {
    header("Location: ../../view/login/logout.html");
}

?>
