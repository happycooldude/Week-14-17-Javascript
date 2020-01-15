document.body.style.backgroundColor = "gray";
document.getElementById("container").style.backgroundColor = "orange";

//maak de input velden en buttons aan
var input1 = pickrandomwoord();
var gokwoord = document.createElement("INPUT");
var button = document.createElement("BUTTON");
var gokken = document.createElement("DIV");
var speelveld = document.createElement("DIV");
var aantalgokken = [];

var p = document.createElement("p");
var text = document.createTextNode("woord:");
p.id = "woord";
p.appendChild(text);
document.getElementById("container").appendChild(p);

button.innerHTML = "Check letter";
button.onclick = checkanswer;

gokken.id = "gokken";
speelveld.id = "answer";
gokwoord.id = "letter";
button.id = "checkletter";

//voeg input velden en buttons toe aan pagina

document.getElementById("container").appendChild(gokwoord);
document.getElementById("container").appendChild(button);
document.getElementById("container").appendChild(gokken);
document.getElementById("container").appendChild(speelveld);

//pakt een random woord uit de woordenlijst
function pickrandomwoord() {
    return words[Math.floor(Math.random() * words.length)];
}

console.log(input1);

//voeg de vakken toe waar de letters in komen
function createsquares() {
    for (i = 1; i < 26; i++) {
        var letters = document.createElement("DIV");
        letters.innerHTML = i;
        letters.id = "letter" + i;
        document.getElementById("answer").appendChild(letters);
    }
}

createsquares();

//controlleer of de letters/woorden overeen komen
function checkanswer() {
    //var string = document.getElementById("woord").value;
    gokwoord = document.getElementById("letter").value;
    gokwoord = gokwoord.split("");
    console.log(gokwoord);
    var inputWoordAsArray = input1.split("");

    /**
     * Zet de kleur van de letter afhankelijk van Lingo regels
     * @param {*} letterToCheck de letter uit de invoer array
     * @param {*} arrayIndex het nummer van de letter die je aan het checken bent
     */
    function getColor(letterToCheck, arrayIndex) {
        // Is de letter op de goeie plek in het woord?
        if (letterToCheck == gokwoord[arrayIndex]) {
            document.getElementById(`letter${arrayIndex + 1}`).innerHTML =
                gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor =
                "green";
        }
        // Komt de letter voor in het woord
        else if (
            inputWoordAsArray[arrayIndex] == gokwoord[0] ||
            inputWoordAsArray[arrayIndex] == gokwoord[1] ||
            inputWoordAsArray[arrayIndex] == gokwoord[2] ||
            inputWoordAsArray[arrayIndex] == gokwoord[3] ||
            inputWoordAsArray[arrayIndex] == gokwoord[4]
        ) {
            document.getElementById(`letter${arrayIndex + 1}`).innerHTML =
                gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor =
                "yellow";
        }
        // De letter zit niet in het woord
        else if (
            inputWoordAsArray[arrayIndex] != gokwoord[0] &&
            inputWoordAsArray[arrayIndex] != gokwoord[1] &&
            inputWoordAsArray[arrayIndex] != gokwoord[2] &&
            inputWoordAsArray[arrayIndex] != gokwoord[3] &&
            inputWoordAsArray[arrayIndex] != gokwoord[4]
        ) {
            document.getElementById(`letter${arrayIndex + 1}`).innerHTML =
                gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + 1}`).style.backgroundColor =
                "red";
        }
    }
    // Loop door hele ingevulde woord letter voor letter
    for (i = 0; i < inputWoordAsArray.length; i++) {
        getColor(inputWoordAsArray[i], i);
    }

    aantalgokken.push(gokwoord.join(""));

    console.log(aantalgokken);

    if (aantalgokken.length == 1) {
        document.getElementById("gokken").innerHTML +=
            "Uw eerste gok is " + gokwoord + "<br>";
    } else if (aantalgokken.length == 2) {
        document.getElementById("gokken").innerHTML +=
            "uw tweede gok is " + gokwoord + "<br>";
    } else if (aantalgokken.length == 3) {
        document.getElementById("gokken").innerHTML +=
            "uw derde gok is " + gokwoord + "<br>";
    } else if (aantalgokken.length == 4) {
        document.getElementById("gokken").innerHTML +=
            "Uw vierder gok is " + gokwoord + "<br>";
    } else if (aantalgokken.length == 5) {
        document.getElementById("gokken").innerHTML +=
            "Uw vijfde gok is " + gokwoord + "<br>";
        document.getElementById("letter").style.visibility = "hidden";
        document.getElementById("checkletter").style.visibility = "hidden";
        alert("Je mag niet meer gokken");
        document.getElementById("gokken").innerHTML +=
            "Het goede andwoord was " + input1;
    }
}