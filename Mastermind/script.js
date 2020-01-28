document.body.style.backgroundColor = "gray";
document.getElementById("container").style.backgroundColor = "orange";

//maak de speelvelden aan
// var kleurcode = kleurcodegenerator();
var speelveld = document.createElement("DIV");
var gokcode = document.createElement("DIV");
var button = document.createElement("DIV");

//maak de titel en de informatiewoorden aan
var titel = document.createElement("p");
var text = document.createTextNode("Mastermind");
titel.id = "titel";
titel.appendChild(text);
document.getElementById("container").appendChild(titel);

//geef de speelvelden een ID
speelveld.id = "antwoord";
gokcode.id = "gokcode";

//voeg de speelvelden toe aan de pagina
document.getElementById("container").appendChild(gokcode);
document.getElementById("container").appendChild(speelveld);

//voeg de vakken toe waar de letters in komen
function createsquares() {
  for (i = 1; i <= 28; i++) {
    var letters = document.createElement("DIV");
    letters.innerHTML = i;
    letters.id = "letter" + i;
    document.getElementById("antwoord").appendChild(letters);
    document.getElementById("antwoord").style.display = "grid";
    document.getElementById("letter" + i).style.width = "50px";
    document.getElementById("letter" + i).style.height = "50px";
    document.getElementById("letter" + i).style.textAlign = "center";
    document.getElementById("letter" + i).style.backgroundColor = "powderblue";
    document.getElementById("letter" + i).style.marginLeft = "35px";
    document.getElementById("letter" + i).style.marginTop = "20px";
    document.getElementById("letter" + i).style.lineHeight = "3";
  }
}

createsquares();

var buttonvalue = [];

function createbuttons() {
  for (i = 1; i <= 4; i++) {
    var button = document.createElement("button");
    button.id = i;
    button.onclick = clickButton;
    buttonvalue[i] = 0;
    document.getElementById("gokcode").appendChild(button);
    document.getElementById(i).style.width = "50px";
    document.getElementById(i).style.height = "50px";
    document.getElementById(i).style.marginLeft = "120px";
    document.getElementById(i).style.marginTop = "100px";
  }
}

createbuttons();

function clickButton() {
  var buttonIdClicked = this.id;

  buttonvalue[buttonIdClicked]++;

  if (buttonvalue[buttonIdClicked] == 1) {
    this.style.backgroundColor = "red";
  } else if (buttonvalue[buttonIdClicked] == 2) {
    this.style.backgroundColor = "green";
  } else if (buttonvalue[buttonIdClicked] == 3) {
    this.style.backgroundColor = "blue";
  } else if (buttonvalue[buttonIdClicked] == 4) {
    this.style.backgroundColor = "purple";
  } else if (buttonvalue[buttonIdClicked] == 5) {
    this.style.backgroundColor = "yellow";
  } else if (buttonvalue[buttonIdClicked] == 6) {
    this.style.backgroundColor = "orange";
  }
}