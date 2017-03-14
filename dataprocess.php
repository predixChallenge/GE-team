<?php

$dbConnection = $query = $lastID ="";
function connectToDB(){
define("HOST", "localhost");
define("USERNAME", "id1067563_ge");
define("PASSWORD", "powerful");
define("DB", "id1067563_ge_predix");

global $dbConnection;
$dbConnection = new mysqli(HOST, USERNAME, PASSWORD, DB);

if($dbConnection->connect_error){
    die("Connection failed: " . $dbConnection->connect_error);
}

/*echo "Successfully connected";*/
}

function select_query(){
    global $dbConnection, $query;

    $query = 'SELECT tank_Volume, tank_Percentage, tank_Name, tank_PumpState FROM tank ORDER BY id DESC LIMIT 1';
    $result = $dbConnection->query($query);

    /*if($result == true)
    echo "Selection works";

    else echo "Check selection";*/
    
    $row = $result->fetch_assoc();

   /* echo 'LastID :' . $GLOBALS['lastID'];
    echo "Tank Volume : " . $row["tank_Volume"];*/

return $row;
}

function insert_query($ard_tankVol, $ard_tankPerc, $ard_tankNme, $ard_tankPS){
    global $dbConnection, $query;

    $query = 'INSERT INTO tank(tank_Volume, tank_Percentage, tank_Name, tank_PumpState) ' . 
             'VALUES(' . "'$ard_tankVol','$ard_tankPerc' , '$ard_tankNme', '$ard_tankPS')";

    $result = $dbConnection->query($query);

   /* if($result == true){
        echo 'Works';
        $GLOBALS['lastID'] = $dbConnection->insert_id;
        echo $lastID;
    
    }*/

   /* else echo 'Neerh';*/

}


function getTankDetails(){
    $tankDeets = select_query();
    $array = array(
        'tankPercentage' => $tankDeets["tank_Percentage"],
        'tankVolume' => $tankDeets["tank_Volume"],
        'tankName' => $tankDeets["tank_Name"],
        'pumpStat' => $tankDeets["tank_PumpState"]

    );

    $data = json_encode($array);
    echo $data;


    
}

function init(){
    /*echo "Initialising.";*/
    connectToDB();
    getTankDetails();

    

  /*  insert_query(235,40,'XD',0);*/
}


/*Begin*/
init();



?>