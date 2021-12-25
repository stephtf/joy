console.log("joy to the world");

var songTitle = document.getElementById("song-title");

var songSubtitle = document.createElement("h2");
songSubtitle.textContent = "a poem for you :)"; 

songTitle.appendChild(songSubtitle);


// other variables 
var paraOne = document.getElementsByClassName("para-1"); 

var paraTwo = document.getElementsByClassName("para-2");

var paraThree = document.getElementsByClassName("para-3");

var paraFour = document.getElementsByClassName("para-4");

var paraFive = document.getElementsByClassName("para-5");

var paraSix = document.getElementsByClassName("para-6");

var paraSeven = document.getElementsByClassName("para-7");

var paraEight = document.getElementsByClassName("para-8");


// making stuff reappear on time 

var current = ["1", "2", "3", "4", "5", "6", "7", "8"];

var j = 0;

function setTime() {
var timerInterval = setInterval(function(){
    var currentPara = document.getElementsByClassName("para-" + current[j]);

    for (i = 0; i < currentPara.length; i++) {
        currentPara[i].style.display = "flex";
    }

    if (j >= 1) { 
        var previousPara = document.getElementsByClassName("para-" + current[j-1]);

        for (i = 0; i < previousPara.length; i++) {
            previousPara[i].style.display = "none"; 
        } 
    } else {
    for (i = 0; i < paraEight.length; i++) {   
    paraEight[i].style.display = "none"; 
}
}
    j++; 



    if (j === 8) {
        // clearInterval(timerInterval); 
        j = 0;
    }

        }, 2000);
}

setTime();


// testing stuff

console.log(paraOne);