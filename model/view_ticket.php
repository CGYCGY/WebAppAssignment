<?php
include 'connect.php';

    $query = "SELECT * FROM `apply_ticket` WHERE `user_id` = (SELECT `user_id` FROM `user` WHERE `username` = ?)";
    $param = array($_COOKIE["name"]);
    $result = dataQuery($query, $param);

    echo json_encode($result);
?>