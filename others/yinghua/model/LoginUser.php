<?php
include 'db.php';
ini_set('display_errors', 1);
error_reporting(E_ALL);

$message = '';
$username = $_GET['username'];
$password = $_GET['password'];


function user_login($username, $password) {


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
    $query = "SELECT username, password FROM user WHERE username = '$username' AND password = '$password';";
    $result = returnDB($query);

    if(!$result || mysqli_num_rows($result) <= 0 ) {
        return false;
    }

    return true;
}

function alert($msg) {
    echo "<script type='text/javascript'>alert('$msg');</script>";
}

if(user_login($username,$password))
{
    header("Location: ../view/loginSuccess.html");
}
else {
    header("Location: ../view/loginSuccess.html");
}

?>
