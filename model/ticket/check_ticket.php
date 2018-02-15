<?php
include '../database/connect.php';

$query = "SELECT * FROM `apply_ticket`";
$param = "";
$result = dataQuery($query, $param);

echo json_encode($result);
?>