// here I have created a variable buttons for my boxes
var buttons = document.getElementsByClassName('box');
// var items = [' red',' pink',' blue',' green'];
buttons[0].setAttribute("value", 1);
buttons[1].setAttribute("value", 1);
buttons[2].setAttribute("value", 2);
buttons[3].setAttribute("value", 2);
var click1 = 0;
var click2 = 0;
// here i have added an event listner for all of my boxes so when can be clicked

function listenForClick(){
  for(var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // this.className += " red";
        // click1 === "red"
        this.className = "red";
        if (click1 === 0) {
          click1 = this.getAttribute('value');
        } else {
          click2 = this.getAttribute('value');
          checkForMatch();
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
    click1 = 0;
    click2 = 0;
  }
}

listenForClick();


// document.getElementsByClassName("box").className = "red";

// document.getElementById("MyElement").className = "MyClass";

// var cell = document.querySelector('.box');

// for(var i=0;i<cell.length;i++){
//   cell[i].addEventListener('mouseover',callback,false);
// }