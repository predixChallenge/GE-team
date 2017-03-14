$(document).ready(function() {
    var num = $("#waterlevel_p").text();
    var waterLevel = parseInt(num, 10);
    var username;
    var pumpStatus;
    var waterVolume = 0;
    var signedInStatus = false;

    /*Setting the name of the tank*/
    $("#tName").text("Default Tank Name");


    /*Setting the liter*/
    $(".tankLitres p").text(waterVolume + " L");


    /*Water level bar*/
    $(".rise .level").css("height", (waterLevel + "%"));

    /*Pump status*/
    pumpStatus = $(".pumpstatus .name span");
    if (pumpStatus.text() == "off" || pumpStatus.text() == "Off")
        $(".pumpstatus .circle").css("background-color", "red");

    else if (pumpStatus.text() == "onff" || pumpStatus.text() == "On")
        $(".pumpstatus .circle").css("background-color", "lawngreen");

    else {
        $(".pumpstatus .circle").css("background-color", "orange");

        pumpStatus.text("Error");
    }

    /*Check to see if user has signed in*/
    var useElem = $(".user ");
    if (signedInStatus == true)
        userElem.css("display", "block");

    else useElem.css("display", "none");

    $.ajax({
        url: 'dataprocess.php',
        data: 'getTankLevel()',
        type: 'post',
        success: function(data) {
            alert(data);
        }
    });



});