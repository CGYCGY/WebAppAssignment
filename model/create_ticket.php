<?php
include 'connect.php';
    if (isset($_POST['backHome'])) {
        header('Location: ../view/browse.html');
        exit;
    }
    else if(isset($_POST['createTic'])) {
        $event_id = $_GET['event_id'];
//        $acc_id = $_COOKIE['user_id'];
        $acc_id = 1;

        $query = 'INSERT INTO `apply_ticket` (`user_id`, `event_id`) VALUES (?,?)';
        $param = array($acc_id, $event_id);
        $result = dataQuery($query, $param);

        echo 1 == $result ? 'Event ticket applied. ': 'There has been a problem processing your request, please try again later.';
        header( "refresh:5;../view/browse.html" );

    }

    //get user info and tix info
?>