<?php
include '../database/connect.php';

$query1 = "SELECT `username` FROM `admin`";
$param1 = "";
$result1 = dataQuery($query1, $param1);

$query2 = "SELECT `username` FROM `user`";
$param2 = "";
$result2 = dataQuery($query2, $param2);

echo json_encode(array_merge($result1, $result2));

?>