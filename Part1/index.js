console.log("hello world")

var clickedArray = [];

function play(idClicked) {
   let playerSpan = document.getElementById("player")
   let clickedElement = document.getElementById(idClicked) 
   if (playerSpan.innerText === "X") {
       playerSpan.innerText = "O";
       clickedElement.innerText = "X";
       clickedArray[idClicked] = "X";
   }
   else {
       playerSpan.innerText = "X"
       clickedElement.innerText = "O";
       clickedArray[idClicked] = "O"
   }
  
   //console.log(clickedArray)


var topLeft = clickedArray[0];
var topCenter = clickedArray[1];
var topRight = clickedArray[2];
var middleLeft = clickedArray[3];
var middleCenter = clickedArray[4];
var middleRight = clickedArray[5];
var bottomLeft = clickedArray[6];
var bottomCenter = clickedArray[7];
var bottomRight = clickedArray[8];

if (topRight !== undefined && topRight === topCenter && topRight === topLeft){
alert("You win");
return;
}



if (middleLeft !== undefined && middleLeft === middleCenter && middleLeft === middleRight){
    alert("You win");
return;
}
if (bottomLeft !== undefined && bottomLeft === bottomCenter && bottomLeft === bottomCenter){
    alert("You win");
return;
}
if (topRight !== undefined && topRight === middleCenter && topRight === bottomLeft){
    alert("You win");
return;
}
if (topLeft !== undefined && topLeft === middleCenter&& topLeft === bottomRight){
    alert("You win");
return;
}
if (topLeft !== undefined && topLeft === middleLeft&& topLeft === bottomLeft){
    alert("You win");
return;
}
if (topCenter !== undefined && topCenter === middleCenter && topCenter === bottomCenter){
    alert("You win");
    return;
}
if (topRight !== undefined && topRight === middleRight && topLeft === bottomRight){
    alert("You win");
return;
}
let boardFull = true
for (i = 0; i <= 8; i++) {
    if (clickedArray[i] === undefined) {
        boardFull = false;
    }      
}
if (boardFull === true) {
    alert("This is a cats game, no winner!");

}
}

function reset() {
    for (i = 0; i <= 8; i++){
        document.getElementById(i).innerText = "";
    }
}