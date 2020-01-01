function createButton(customID, backgroundcolor, buttontext){
    var button = document.createElement("button");

    if (customID){
        button.id = customID;
    }
    else{
        button.id = "presetid"
    }

    button.innerHTML = buttontext;
    button.style.backgroundColor = backgroundcolor;
    document.getElementById("container").appendChild(button);
}

createButton("btn1", "green", "button 1");
createButton("btn2", "red", "button 2");
createButton("btn3", "blue", "button 3");

document.getElementById("btn1").onclick = function button1(){
    document.getElementsByClassName("bgc")[0].style.backgroundColor = "green";
};

document.getElementById("btn2").onclick = function button2(){
    document.getElementsByClassName("bgc")[0].style.backgroundColor = "red";
};

document.getElementById("btn3").onclick = function button3(){
    document.getElementsByClassName("bgc")[0].style.backgroundColor = "blue";
};
