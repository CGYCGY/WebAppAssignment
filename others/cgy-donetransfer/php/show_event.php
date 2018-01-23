<?php
include 'connect.php';

    $query = "SELECT * FROM `event`";
    $param = "";
    $result = dataQuery($query, $param);

    echo json_encode($result);
?>