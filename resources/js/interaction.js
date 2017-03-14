$(document).ready(function() {
    var num = $("#waterlevel_p").text();
    var waterLevel = parseInt(num, 10);
    var waterLevel1 = 0;
    var username;
    var pumpStatusDisp;
    var pumpStat = 1;
    var waterVolume = 0;
    var signedInStatus = false;
    var tankName;

    /*Setting the name of the tank*/
    tankname = $("#tName");

    tankname.text("Default Tank Name");


    /*Setting the liter*/
    $(".tankLitres p").text(waterVolume + " L");


    /*Water level bar*/


    var intervalID = setInterval(function() {
        $(".rise .level").css("height", (waterLevel1 + "%"));

        $("#waterlevel_p").text(waterLevel1);

        /* if (waterLevel1 < 100)
             waterLevel1++;

         else
             clearInterval(intervalID);*/


    }, 100);

    /*Pump status*/
    pumpStatusDisp = $(".pumpstatus .name span");
    if (pumpStat == 0) {
        $(".pumpstatus .circle").css("background-color", "red");
        pumpStatusDisp.text() == "Off";
    }
    if (pumpStat == 1) {
        $(".pumpstatus .circle").css("background-color", "lawngreen");
        pumpStatusDisp.text() == "On";
    }
    /*if (pumpStat != 1 || pumpStat != 0) {
        $(".pumpstatus .circle").css("background-color", "orange");
        pumpStatusDisp.text("Error");
    }*/

    /*Check to see if user has signed in*/
    var useElem = $(".user ");
    if (signedInStatus == true)
        userElem.css("display", "block");

    else useElem.css("display", "none");

    setInterval(function() {
        $.ajax({
            url: 'dataprocess.php',
            data: 'getTankDetails()',
            /* type: 'post',*/
            success: function(data) {
                var dat = JSON.parse(data);


                waterLevel1 = dat.tankPercentage;


                /*   alert(dat.pumpStat, dat.tankname);*/







            }
        });

    }, 5000);



});