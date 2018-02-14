<?php
include '../database/connect.php';

if(isset($_GET['evid'])) {

    $url = '../view/event_list.html';
    $eID = $_GET['evid'];
    echo $_GET['evid'];

    $query = 'DELETE FROM `event`WHERE `event_id` = ?';
    $param = array($eID);
    $result = dataQuery($query, $param);

    // for testing
    echo 1 == $result ? 'Event has been deleted. ' : 'There has been a problem processing your request, please try again later.';
//    echo json_encode($result);
    header( "Location: $url" );
}
else {
    echo "no event id get from parameter";
}
?>