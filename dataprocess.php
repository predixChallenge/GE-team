<?php

function connectToDB(){
define("HOST", "127.0.0.1:3307");
define("USERNAME", "root");
define("PASSWORD", "");
define("DB", "ge");


$dbConnection = new mysqli(HOST, USERNAME, PASSWORD, DB);

if($dbConnection->connect_error){
    die("Connection failed: " . $dbConnection->connect_error);
}

echo "Successfully connected";
}

function getTankLevel(){
    echo "Bruh";
}

function init(){
    echo "Initialising.";
    connectToDB();
}


/*Begin*/
init();



?>