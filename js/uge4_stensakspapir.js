const computerChoice = ["sten", "saks", "papir"];
var pointForPlayer = 0;
var pointForComputer = 0;

function init() {

    var result = validateChoices();

    var randomChoice = computerChoice[Math.floor(Math.random() * computerChoice.length)];
    document.getElementById(`${randomChoice}Computer`).checked = true;

    var resultOfGame = validateResult(result, randomChoice);

    document.getElementById('resultOfGame').innerHTML = "<b>" + resultOfGame + "</b>";

    switch (resultOfGame) {
        case "Sten vinder over saks.":
            if(result == "sten" && randomChoice == "saks") {pointForPlayer++;} else if (result == "saks" && randomChoice == "sten") {pointForComputer++;}
        break;
        case "Papir vinder over sten.":
            if(result == "papir" && randomChoice == "sten") {pointForPlayer++;} else if (result == "sten" && randomChoice == "papir") {pointForComputer++;}
        break;
        case "Saks vinder over papir.":
            if(result == "saks" && randomChoice == "papir") {pointForPlayer++;} else if (result == "papir" && randomChoice == "saks") {pointForComputer++;}
        break;
        case "Ens valg, uafgjort!":
            if(result == computerChoice) {
                pointForPlayer += 0;
                pointForComputer += 0;
            }
        break;
    }
    showPoints(pointForPlayer, pointForComputer);
}

function validateChoices() {
    //Checking the playsers selection
    for(let i = 0; i < computerChoice.length; i++) {
        if (document.getElementById(`${computerChoice[i]}Player`).checked == true) {
            var getPlayerChoice = document.getElementById(`${computerChoice[i]}Player`).value;
        }
    }    
    return getPlayerChoice;
}

function validateResult(result, randomChoice) {
    //validate selected choices     
    const resulText = ["Saks vinder over papir.", "Papir vinder over sten.", "Sten vinder over saks.", "Ens valg, uafgjort!"];

    if (result == "sten" && randomChoice == "saks" || result == "saks" && randomChoice == "sten") {
        return resulText[2];
    } else if (result == "sten" && randomChoice == "papir" || result == "papir" && randomChoice == "sten") {
        return resulText[1];
    } else if (result == "saks" && randomChoice == "papir" || result == "papir" && randomChoice == "saks") {
        return resulText[0];
    } else {
        return resulText[3];
    }
}

function showPoints(pointP, pointC) {
//show points for player and computer using css
    document.getElementById('pointsPlayer').innerHTML = "<input class='form-control colorField' type='text' value='" 
      + pointP + "' disabled style='background-color:#feed01" + ";color:black" + "'>";

      document.getElementById('pointsComputer').innerHTML = "<input class='form-control colorField' type='text' value='" 
      + pointC + "' disabled style='background-color:#feed01" + ";color:black" + "'>";

}

function restartGame() {
// Restart the game, set score to 0-0
    document.getElementById('resultOfGame').innerHTML = "Du er klar til et nyt spil!"
    clearRadios();
    pointForPlayer = 0;
    pointForComputer = 0;
    showPoints(pointForPlayer, pointForComputer);
}

function clearRadios() {
// Uncheck the radio buttons for both player and computer
    let radioPlayer = document.getElementsByName("player");
    for (let i = 0; i < radioPlayer.length; i++) {
        radioPlayer[i].checked = false;
    }
    let radioComputer = document.getElementsByName("computer");
    for (let j = 0; j < radioComputer.length; j++) {
        radioComputer[j].checked = false;
    }
}

  