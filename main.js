var gameboard =document.getElementById('gameboard');

var base=document.getElementById('bottom-bar');

var alert=document.getElementById('alertbox');

window.onload = function(){
  gameboard.style.display="none";
  base.style.display="none";
  alert.style.display="none";
}

// here I have created a variable buttons for my boxes
var buttons = document.getElementsByClassName('back');

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

var progressBar = document.getElementById("myBar");

var box1;
var box2;
var click1 = 0;
var click2 = 0;
var score = 0;


function listenForClick(){
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        this.className = "square front";
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
   });
  }
}

function checkForMatch(){
  if(click1 === click2){
    score++;
    increaseTheBar();
    console.log("match! The score is now ", score);
  } else {
    console.log("it's not a match");
   
    setTimeout(function(){ 
      box1.className = "square back";
      box2.className = "square back";
     }, 500);

  
}
  click1 = 0;
  click2 = 0;
}


var seconds = 90;

  function secondPassed() {
    var minutes = Math.round((seconds - 30)/60);
    var remainingSeconds = seconds % 60;
    if (remainingSeconds < 10) {
        remainingSeconds = "0" + remainingSeconds;  
    }
    document.getElementById('countdown').innerHTML = minutes + ":" + remainingSeconds;
      if (seconds == 0) { 
        //clearInterval(countdownTimer);
        document.getElementById('countdown').innerHTML = "Spiled";
        document.getElementById('percentage').innerHTML ="";
        alert.style.display = "block"
        alert.innerHTML = " Hope to see you soon. "
        // document.getElementById('alertbox').innerHTML = "Congrats you win " + percentage.innerHTML + "great!"
        gameboard.style.display = "none"
        base.style.display="none"
        resetTheGame();
      } else {
        seconds--;
    }
}

function increaseTheBar(){

  if (score === 1) {
    myBar.setAttribute("style", "width: 8.33%");
    // document.getElementById('percentage').innerHTML ="5%(discount)" (grab a div from the html and add something to it's innerHTML)
  } else if(score === 2) {
    myBar.setAttribute("style", "width: 16.66%");
  } else if(score === 3) {
    myBar.setAttribute("style", "width: 24.99%");
    document.getElementById('myBar').innerHTML ="You Earned 5% Discount"
  } else if(score === 4) {
    myBar.setAttribute("style", "width: 33.32%");
  } else if(score === 5) {
    myBar.setAttribute("style", "width: 41.65%");
  } else if(score === 6) {
    myBar.setAttribute("style", "width: 49.98%");
    document.getElementById('myBar').innerHTML ="You Earned 10% Discount"
  } else if(score === 7) {
    myBar.setAttribute("style", "width: 58.31%");
  } else if(score === 8) {
    myBar.setAttribute("style", "width: 66.64%");
  } else if(score === 9) {
    myBar.setAttribute("style", "width: 74.97%");
    document.getElementById('myBar').innerHTML ="You Earned 15% Discount"
  } else if(score === 10) {
    myBar.setAttribute("style", "width: 83.30%");
  } else if(score === 11) {
    myBar.setAttribute("style", "width: 93.63%");
  } else if(score === 12) {
    myBar.setAttribute("style", "width: 100%");
    document.getElementById('myBar').innerHTML ="Hurray!! You Earned 20% Discount"
  }
}

var restart = document.getElementById("restart");
var squares = document.getElementsByClassName("square");

 restart.addEventListener("click", resetTheGame);

  function resetTheGame(){
    for(var i = 0; i < squares.length; i++) {
    squares[i].className = "square back";
  }

  var countdown = document.getElementById("countdown")
  countdown.style.display="none";
  console.log(countdownTimer)

  myBar.setAttribute("style", "width: 0%");
  click1 = 0;
  click2 = 0;
  score = 0;
}

var divElement = document.createElement("Div");
divElement.id = "welcome-box";

// Styling it
divElement.style.textAlign = "center";
divElement.style.fontWeight = "bold";
// divElement.style.fontSize = "smaller";
divElement.style.paddingTop = "15px";

var welcomeBox =
  "<p>Welcome to the Black Sheep challenge...</p>" +
  "<p>Black Sheep was started by a group of coffee-loving friends from uni who decided to 'Leave The Herd Behind' and stay awake for the rest of their lives. They set out to rid the world of boring, average-tasting coffee and committed to rethink long-established traditions and always challenge the status quo by only sourcing unorthodox coffees that have a story to be told. <br> <br>We have decided to give you a 30% discount on your coffee if you challange your memory with the game as we think that would lead to a lot less wars and voilence right ....</p>" + 
  "<input></input><br>" +
  "<button id='playGame'>Submit email address & start game</button>"
  divElement.innerHTML = welcomeBox;

// Appending the div element to body
document.getElementsByTagName("body")[0].appendChild(divElement);


var playGame = document.getElementById("playGame");

    playGame.addEventListener("click", function(){
    gameboard.style.display = "block"
    base.style.display="block"
    this.parentNode.style.display = "none";
 
      listenForClick();
      var countdownTimer = setInterval('secondPassed()', 1000);

    })

var end = document.getElementById("end");

  end.addEventListener("click", function(){
  var percentage = document.getElementById('myBar')
  gameboard.style.display = "none"
  base.style.display="none"
  alert.style.display = "block"
  alert.innerHTML = "Congrats you  " + percentage.innerHTML + " on your next buy <br> hope to see you soon. "
})




















