<?php

include 'connect.php';

if(!empty($_POST)) {
    $eName = $_POST['eventName'];
    $eDesc = $_POST['description'];
    $eLoc = $_POST['locate'];
    $eOrgName = $_POST['organizerName'];
    $eDTStart = $_POST['dtS'];
    $eDTEnd = $_POST['dtE'];

    $query = 'INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_dt_start`, `event_dt_end`) VALUES (?,?,?,?,?,?)';
    $param = array($eName, $eDesc, $eLoc, $eOrgName, $eDTStart, $eDTEnd);
    $result = dataQuery($query, $param);

    // for testing
    echo 1 == $result ? 'Event ' . $eName . ' has been created. ': 'There has been a problem processing your request, please try again later.';
//    echo json_encode($result);
}
?>