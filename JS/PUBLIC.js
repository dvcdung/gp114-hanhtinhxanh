//MENU HOVER
document.getElementsByClassName("mini_menu")[0].addEventListener("click", function() {
    jQuery("#menu_on_hover").slideToggle();
    // if(document.getElementById("menu_on_hover").style.display === "block")
    //     document.getElementById("menu_on_hover").style.display = "none";
    // else 
    //     document.getElementById("menu_on_hover").style.display = "block"
});

//CAP NHAT NGÀY
function currentDate() {
    var d = "";
    const weekday = ["CN","T2","T3","T4","T5","T6","T7"];
    var today = new Date();
    var day = weekday[today.getDay()];
    var date = today.getDate();
    var month = today.getMonth();
    var year = today.getFullYear();
    d += day +" ngày "+ date +" - "+ (month+1) +" - "+ year;
    document.getElementById("ngay").innerHTML = d;
};
currentDate();
//CAP NHAT GIO
function currentTime() {    
    var today = new Date();
    var time = ""
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();

    if(hours < 10) {
        time += "0"+ hours + ":";
    }else {
        time += hours + ":";
    }
    if(minutes < 10) {
        time += "0"+ minutes + ":";
    }else {
        time += minutes + ":";
    }
    if(seconds < 10) {
        time += "0"+ seconds;
    }else {
        time += "" + seconds;
    }
    document.getElementById("gio").innerHTML = time;
    if(parseInt(hours) == 0 && parseInt(minutes) == 0) {
        currentDate();
    }
    let t = setTimeout(function(){ currentTime() }, 1000);
};
currentTime();