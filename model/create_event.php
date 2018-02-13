<?php

include 'connect.php';

if(!empty($_POST)) {
    $eName = $_POST['eventName'];
    $eDesc = $_POST['description'];
    $eLoc = $_POST['locate'];
    $eOrgName = $_POST['organizerName'];
    $OrgCon = $_POST['organizerCon'];
    $eDTStart = $_POST['dtS'];
    $eDTEnd = $_POST['dtE'];

    $query = 'INSERT INTO `event` (`event_name`, `event_description`, `event_location`, `event_org_name`, `event_contact`, `event_dt_start`, `event_dt_end`) VALUES (?,?,?,?,?,?,?)';
    $param = array($eName, $eDesc, $eLoc, $eOrgName, $OrgCon, $eDTStart, $eDTEnd);
    $result = dataQuery($query, $param);

    // for testing
    echo 1 == $result ? 'Event ' . $eName . ' has been created. ': 'There has been a problem processing your request, please try again later.';
    echo "\r\n";
//    echo json_encode($result);

    if(!isset($_COOKIE["name"])) {
        echo "Cookie (name) is missing!";
        echo "\r\n";
    }
    else {
        echo "Cookie value is: " . $_COOKIE["name"];
        echo "\r\n";

        $query = 'INSERT INTO `create_event` (`admin_id`, `event_id`) VALUES ((SELECT `admin_id` FROM `admin` WHERE `username` = ?),(SELECT MAX(event_id) FROM `event`))';
        $param = array($_COOKIE["name"]);
        $result = dataQuery($query, $param);

        echo 1 == $result ? 'Create event table has been updated. ': 'There has been a problem processing your request, please try again later.';
    }
}
?>