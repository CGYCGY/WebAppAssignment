<?php
include '../database/connect.php';

$aname = $_COOKIE['name'];

$query = "SELECT * FROM `event` WHERE `event_id` in (SELECT `event_id` FROM `create_event` WHERE `admin_id` = (SELECT `admin_id` FROM `admin` WHERE `username` = ?))";
$param = array($aname);
$result = dataQuery($query, $param);

echo json_encode($result);
?>