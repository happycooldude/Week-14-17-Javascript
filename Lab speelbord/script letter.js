document.body.style.backgroundColor = "gray";
document.getElementById("container").style.backgroundColor = "rgb(255, 204, 102)"

var input1 = document.createElement("INPUT");
var input2 = document.createElement("INPUT");
var button = document.createElement("BUTTON");
var speelveld = document.createElement("DIV");

button.innerHTML = "Check letter"
button.onclick = checkanswer;

speelveld.id = "answer";

input1.id = "woord";

input2.id = "letter";
button.id = "checkletter";

document.getElementById("container").appendChild(input1);
document.getElementById("container").appendChild(input2);
document.getElementById("container").appendChild(button);
document.getElementById("container").appendChild(speelveld);

function createsquares(){
    for(i=1; i<6; i++){
        var letters = document.createElement("DIV");
        letters.innerHTML = i;
        letters.id = "letter"+i;
        document.getElementById("answer").appendChild(letters)
    }
}

createsquares();

function checkanswer(){
    var string = document.getElementById("woord").value;
    input2 = document.getElementById("letter").value;
    var array = string.split("");

    //loop
    for(i = 0; i < array.length; i++){
        if(array[0] == input2){
            document.getElementById("letter1").innerHTML = input2;
        }
        if(array[1] == input2){
            document.getElementById("letter2").innerHTML = input2;
        }
        if(array[2] == input2){
            document.getElementById("letter3").innerHTML = input2;
        }
        if(array[3] == input2){
            document.getElementById("letter4").innerHTML = input2;
        }
        if(array[4] == input2){
            document.getElementById("letter5").innerHTML = input2;
        }
    }
}