<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

function dataQuery($query, $param) {
    // database info
    $hostname = "localhost";
    $dbname = "waadb";
    $user = "root";
    $pass = "root";

    // type of query
    $query_type = explode(' ', $query);

    // establish database connection
    try {
        $connect = new PDO("mysql:host=$hostname;dbname=$dbname", $user, $pass);
        $connect->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
        $connect->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }
    catch(PDOException $e) {
        echo $e->getMessage();
        // might use this later
        $error_code = $e->getCode();
    }

    // run the query
    try {
        $query_result = $connect->prepare($query);
        $query_result->execute($param);
        if($query_result != null && 'SELECT' == $query_type[0]) {
            $results = $query_result->fetchAll(PDO::FETCH_ASSOC);
            return $results;
        }
        else {
            return $query_result->rowCount();
        }
        $query_result = null; // first of the two steps to properly close
        $connect = null; // second step tp close the connection
    }
    catch(PDOException $e) {
        $error_msg = $e->getMessage();
        echo $error_msg;
    }
// return ntg back
//return null;
}
?>