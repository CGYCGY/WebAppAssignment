<?php

include 'connect.php';

if(!empty($_POST)) {
    $eID = $_POST['eventID'];
    $eName = $_POST['eventName'];
    $eDesc = $_POST['description'];
    $eLoc = $_POST['locate'];
    $eOrgName = $_POST['organizerName'];
    $eDTStart = $_POST['dtS'];
    $eDTEnd = $_POST['dtE'];

    $query = 'UPDATE `event` SET `event_name` = ?, `event_description` = ?, `event_location` = ?, `event_org_name` = ?, `event_dt_start` = ?, `event_dt_end`=? WHERE `event_id` = ?';
    $param = array($eName, $eDesc, $eLoc, $eOrgName, $eDTStart, $eDTEnd, $eID);
    $result = dataQuery($query, $param);

    // for testing
    echo 1 == $result ? 'Event ' . $eName . ' has been updated. ': 'There has been a problem processing your request, please try again later.';
//    echo json_encode($result);
}
?>