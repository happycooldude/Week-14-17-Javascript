document.body.style.backgroundColor = "gray";
document.getElementById("container").style.backgroundColor = "rgb(255, 204, 102)"

//maak de input velden en buttons aan
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

//voeg input velden en buttons toe aan pagina
document.getElementById("container").appendChild(input1);
document.getElementById("container").appendChild(input2);
document.getElementById("container").appendChild(button);
document.getElementById("container").appendChild(speelveld);

//voeg de vakken toe waar de letters in komen
function createsquares(){
    for(i=1; i<6; i++){
        var letters = document.createElement("DIV");
        letters.innerHTML = i;
        letters.id = "letter"+i;
        document.getElementById("answer").appendChild(letters)
    }
}

createsquares();

//controlleer of de letters/woorden overeen komen
function checkanswer(){
    var string = document.getElementById("woord").value;
    input2 = document.getElementById("letter").value;
    input2 = input2.split("");
    console.log(input2);
    var inputWoordAsArray = string.split("");

    /**
     * Zet de kleur van de letter afhankelijk van Lingo regels
     * @param {*} letterToCheck de letter uit de invoer array
     * @param {*} arrayIndex het nummer van de letter die je aan het checken bent
     */
    function getColor(letterToCheck, arrayIndex) {
        // Is de letter op de goeie plek in het woord?
        if (letterToCheck == input2[arrayIndex]) {
            document.getElementById(`letter${arrayIndex + 1}`).innerHTML = input2[arrayIndex];
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor = "green"
        }
        // Komt de letter voor in het woord
        else if (inputWoordAsArray[arrayIndex] == input2[0] ||
            inputWoordAsArray[arrayIndex] == input2[1] ||
            inputWoordAsArray[arrayIndex] == input2[2] ||
            inputWoordAsArray[arrayIndex] == input2[3] ||
            inputWoordAsArray[arrayIndex] == input2[4]) {
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor = "yellow"
        }
        // De letter zit niet in het woord
        else if (inputWoordAsArray[arrayIndex] != input2[0] &&
            inputWoordAsArray[arrayIndex] != input2[1] &&
            inputWoordAsArray[arrayIndex] != input2[2] &&
            inputWoordAsArray[arrayIndex] != input2[3] &&
            inputWoordAsArray[arrayIndex] != input2[4]){
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor = "red"
        }
    }
    // Loop door hele ingevulde woord letter voor letter
    for (i = 0; i < inputWoordAsArray.length; i++){
        getColor(inputWoordAsArray[i], i);
    }
}