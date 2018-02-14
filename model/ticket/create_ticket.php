<?php
include '../database/connect.php';
    if (isset($_POST['backHome'])) {
        header('Location: ../../view/event/browse.html');
        exit;
    }
    else if(isset($_POST['createTic'])) {
        $event_id = $_GET['event_id'];
        $uname = $_COOKIE['name'];
//        $acc_id = 1;

        $query = 'INSERT INTO `apply_ticket` (`user_id`, `event_id`) VALUES ((SELECT `user_id` FROM `user` WHERE `username` = ?),?)';
        $param = array($uname, $event_id);
        $result = dataQuery($query, $param);

        echo 1 == $result ? '<font size=\'14pt\'> Event ticket applied. Page will be redirect shortly.</font>': '<font size=\'14pt\'>There has been a problem processing your request, please try again later.</font>';
        header( "refresh:2;../../view/event/browse.html" );

    }

    //get user info and tix info
?>