var myOutput = document.getElementById("btn_1");
myOutput.innerHTML = "Button";

var myButtons = document.getElementsByClassName("btn");
myButtons[1].innerHTML = "Second Button";

var myTags = document.getElementsByTagName("div");
myTags[3].innerHTML = "Third Button";

var changeBtn = document.getElementById("btn_4");
changeBtn.style.backgroundColor = "hotpink";

document.getElementById("output").innerHTML = document.title;
document.getElementById("myImage").src = "https://picsum.photos/200/300";

/* ---------------------------------------------------------------- */
var btn1 = document.getElementById("btn_1");
var output = document.getElementById("output");

btn1.onclick = changeButton;

function changeButton(){
    output.innerHTML = "BUTTON 1 CLICKED!"
    btn1.style.backgroundColor = "deeppink";
}

var btn5 = document.getElementById("btn_5");
btn5.onclick = changeAllButtons;

function changeAllButtons(){
    var mySelection, i;
    mySelection = document.querySelectorAll("div.btn");
    for(i=0; i < mySelection; i++){
        mySelection[i].innerHTML = "I changed!";
    }
}

