var buttonvalue = [];

function createbuttons(){
    for (i = 1; i <31; i++){
        var button = document.createElement("button");
        button.innerHTML = i;
        button.id = i;
        button.onclick = clickButton;
        buttonvalue[i] = 0;
        document.getElementById("container").appendChild(button);
    }
}

createbuttons();

function clickButton(){
    
    var buttonIdClicked = this.id;

    buttonvalue[buttonIdClicked] ++;

    if(buttonvalue[buttonIdClicked] == 1){
        this.style.backgroundColor = "red";
    }
    else if(buttonvalue[buttonIdClicked] == 2){
        this.style.backgroundColor = "purple";
    }
    else if(buttonvalue[buttonIdClicked] == 3){
        this.style.backgroundColor = "blue";
    }
    else if(buttonvalue[buttonIdClicked] == 4){
        this.style.backgroundColor = "black";
    }
    else if(buttonvalue[buttonIdClicked] == 5){
        document.getElementById("container").removeChild(this);
    }
}