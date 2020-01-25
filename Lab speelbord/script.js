document.body.style.backgroundColor = "gray";
document.getElementById("container").style.backgroundColor = "orange";

//maak de input velden en button aan
var input1 = pickrandomwoord();
var gokwoord = document.createElement("INPUT");
var button = document.createElement("BUTTON");
var gokken = document.createElement("DIV");
var speelveld = document.createElement("DIV");
var aantalgokken = [];
var input1asarray = input1.split("");

//maak de titel en de informatiewoorden aan
var p = document.createElement("p");
var text = document.createTextNode("woord:");
p.id = "woord";
p.appendChild(text);
document.getElementById("container").appendChild(p);

var titel = document.createElement("p");
var text = document.createTextNode("Lingo");
titel.id = "titel";
titel.appendChild(text);
document.getElementById("container").appendChild(titel);

button.innerHTML = "Check letter";
button.onclick = checkanswer;

//geeft de Div's een id
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
    for (i = 1; i <= 25; i++) {
        var letters = document.createElement("DIV");
        letters.innerHTML = i;
        letters.id = "letter" + i;
        document.getElementById("answer").appendChild(letters);
        document.getElementById("answer").style.display = "grid";
        document.getElementById("letter"+i).style.width = "50px";
        document.getElementById("letter"+i).style.height = "50px";
        document.getElementById("letter"+i).style.textAlign = "center";
        document.getElementById("letter"+i).style.backgroundColor = "powderblue";
        document.getElementById("letter"+i).style.marginLeft = "50px";
        document.getElementById("letter"+i).style.marginTop = "5px";
    }
}

createsquares();

//controlleer of de letters/woorden overeen komen
function checkanswer() {
    gokwoord = document.getElementById("letter").value;
    gokwoord = gokwoord.split("");
    var inputWoordAsArray = input1.split("");

    /**
     * Zet de kleur van de letter afhankelijk van Lingo regels
     * @param {*} letterToCheck de letter uit de invoer array
     * @param {*} arrayIndex het nummer van de letter die je aan het checken bent
     */
    function getColor(letterToCheck, arrayIndex, rij) {
        // Is de letter op de goeie plek in het woord?
        if (letterToCheck == gokwoord[arrayIndex]) {
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).innerHTML = gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).style.backgroundColor = "green";
        }
        // Komt de letter voor in het woord
        else if (
            inputWoordAsArray[0] == gokwoord[arrayIndex] ||
            inputWoordAsArray[1] == gokwoord[arrayIndex] ||
            inputWoordAsArray[2] == gokwoord[arrayIndex] ||
            inputWoordAsArray[3] == gokwoord[arrayIndex] ||
            inputWoordAsArray[4] == gokwoord[arrayIndex]
        ) {
            console.log(arrayIndex);
            console.log(inputWoordAsArray[arrayIndex]);
            console.log(['te raden', inputWoordAsArray]);
            console.log(['invoer', gokwoord]);

            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).innerHTML = gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).style.backgroundColor = "yellow";
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).style.borderRadius = "50%"
        }
        // De letter zit niet in het woord
        else {
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).innerHTML = gokwoord[arrayIndex];
            document.getElementById(`letter${arrayIndex + (5*rij) + 1}`).style.backgroundColor = "red";
        }
    }
    var rij = aantalgokken.length;

    // Loop door hele ingevulde woord letter voor letter
    for (i = 0; i < inputWoordAsArray.length; i++) {
        getColor(inputWoordAsArray[i], i, rij);
    }
    
    aantalgokken.push(gokwoord);

    if (gokwoord.join("") == input1asarray.join("")){
        document.getElementById("letter").style.visibility = "hidden";
        document.getElementById("checkletter").style.visibility = "hidden";
        document.getElementById("woord").style.visibility = "hidden";
        document.getElementById("gokken").innerHTML = "U heeft het woord geraden gefeliciteerd!";
        alert("U heeft het woord geraden! Gefeliciteerd.");
    } else if (aantalgokken.length == 5) {
        document.getElementById("letter").style.visibility = "hidden";
        document.getElementById("checkletter").style.visibility = "hidden";
        document.getElementById("gokken").innerHTML += "Het goede andwoord was " + input1;
        alert("Je mag niet meer gokken. Het goede andwoord was " + input1);
    } 



}