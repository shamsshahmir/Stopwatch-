let hours=0;
let minutes=0;
let seconds=0;
let miliseconds=0;


let displayHours;
let displayMins;
let displaySec;
let displayMilisec;

let status = "stopped";

let interval = null;
let splitnow = null;
//document.getElementById("startbtn").disabled = true;
document.getElementById("splitbtn").disabled = true;
document.getElementById("resetbtn").disabled = true;



function start() {
    
    miliseconds ++;

    if(miliseconds / 100 == 1){
        seconds++;
        miliseconds = 0;
        if(seconds / 60 == 1)
        {
            minutes++;
            seconds=0;
            if(minutes / 60 == 1)
            {
                hours++;
                minutes=0;

            }
        }
    }

    if(miliseconds < 10)
    {
        displayMilisec =  "0"+miliseconds;
    }
    else
    {
        displayMilisec = miliseconds;
    }
    if(seconds < 10)
    {
        displaySec = "0" + seconds;
    }
    else
    {
        displaySec = seconds;
    }
    if(minutes < 10)
    {
        displayMins = "0" + minutes;
    }
    else
    {
        displayMins = minutes;
    }
    if(hours < 10)
    {
        displayHours = "0" + hours;
    }
    else
    {
        displayHours = hours;
    }

    document.getElementById("timerhrs").innerHTML = displayHours;
    document.getElementById("timermin").innerHTML = displayMins;
    document.getElementById("timersec").innerHTML = displaySec;
    document.getElementById("timermilisec").innerHTML = displayMilisec;
    

}

function startPause() {
    if(status === "stopped"){
        interval=window.setInterval(start,10);
        status = "started";
        document.getElementById("startbtn"). innerHTML = "Pause";
        document.getElementById("startbtn"). style.backgroundColor = "#FB657F";
        document.getElementById("splitbtn").disabled = false;
        var a = document.getElementById("splitbtn");
        a.classList.add("splitbtn");
        console.log(a);
        
    }
    else{
        window.clearInterval(interval);
        status = "stopped";
        document.getElementById("startbtn"). innerHTML = "Start";
        
        document.getElementById("startbtn"). style.backgroundColor = "#18A69D";
        const node = document.createElement("li");
        const splitnow = document.createTextNode(displayHours + " : " + displayMins + " : " + displaySec + " : " + displayMilisec  + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Pause");
        node.classList="li1";
        node.appendChild(splitnow);
        document.getElementById("splitrec").appendChild(node);
        document.getElementById("resetbtn").disabled = false;
        document.getElementById("splitbtn").disabled = true;
        
    }
}

function reset() {
    window.clearInterval(interval);

    miliseconds = 0;
    seconds = 0;
    minutes = 0;
    hours = 0;

    displayMilisec = 0;
    displaySec = 0;
    displayMins = 0;
    displayHours = 0;

    status = "stopped";
    document.getElementById("timerhrs").innerHTML = "00";
    document.getElementById("timermin").innerHTML = "00";
    document.getElementById("timersec").innerHTML = "00";
    document.getElementById("timermilisec").innerHTML = "00";
    document.getElementById("splitrec").innerHTML = " ";
    document.getElementById("heading").innerHTML = "00:00:00.00 ";
    document.getElementById("splitbtn").disabled = true;
}

function split() {
    const node = document.createElement("li");
    const splitnow = document.createTextNode(displayHours + " : " + displayMins + " : " + displaySec + " : " + displayMilisec  + "\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0 Split");
   node.classList = "li2";
    node.appendChild(splitnow);
    document.getElementById("splitrec").appendChild(node);
    document.getElementById("heading").innerHTML = displayHours + " : " + displayMins + " : " + displaySec + " : " + displayMilisec;
    
}