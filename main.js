// here I have created a variable buttons for my boxes
var buttons = document.getElementsByClassName('back');
// var items = [' red',' pink',' blue',' green'];
var choices = [1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11,12];
for(var i=0;i<buttons.length;i++) {

  // generate random index
  var randomIndex = Math.floor(Math.random() * choices.length);
  // remove number form array
  var removedElementsArray = choices.splice(randomIndex, 1); // returns an array of removed elements
  // because this is an array, we need to get the first element out of it
  var value = removedElementsArray[0];

  buttons[i].setAttribute("value", value);
}

var box1;
var box2;
var click1 = 0;
var click2 = 0;
// here i have added an event listner for all of my boxes so when can be clicked

function reset() {
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].className = "back";
  }  
}

// var seconds = Math.floor( (t/1000) % 120 );

function listenForClick(){
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        this.className = "front";
        if (click1 === 0) {
          box1 = this;
          click1 = this.getAttribute('value');
        } else {
            if (this !== box1) {
              box2 = this;
              click2 = this.getAttribute('value');
              checkForMatch();
            }
        }
        console.log("The first number stored is..", click1);
        console.log("The second number stored is..", click2);
   });
  }
}

function checkForMatch(){
  if(click1 === click2){
    console.log("match");
  } else {
    console.log("it's not a match");
   
    setTimeout(function(){ 
      box1.className = "back";
      box2.className = "back";
     }, 1500);

  
}
  click1 = 0;
  click2 = 0;
}
listenForClick();

var seconds = 120;
function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
    if (seconds == 0) {
        clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Spiled";
    } else {
        seconds--;
    }
}
 
var countdownTimer = setInterval('secondPassed()', 1000);

// function move() {
//   var elem = document.getElementById("myBar");
//   var width = 1;
//   var id = setInterval(frame, 10);
//   function frame() {
//     if (click1 === click2)
//       (width >= 100) {
//       clearInterval(id);
//     } else {
//       width++;
//       elem.style.width = width + '%';
//     }
//   }
// }
 
 
function score(){
  var back = (24 - backleft) * 20; // 20 points for each successful back=480 pts
    var timebonus = (120 - time) * 4;  // 8 points for each second = 480 pts
    var triesbonus = (24 - nrTries) * 10;  // (deduct) 10 points for each try = 400 pts
    if (tilesbonus <0) { tilesbonus = 0; }
    if (timebonus <0) { timebonus = 0; }
    if (triesbonus <0) { triesbonus = 0; }
    return tilesbonus + timebonus + triesbonus;
}


























