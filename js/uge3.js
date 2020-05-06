// def. global variabels
var allCards = [];
var cardValue = ["A", "2", "3", "4", "5", "6", "7" ,"8", "9", "X", "J", "Q", "K"];
var cardType = ["H", "S", "R", "K"];

function init() {
  //calls createCards function and parse global variabels by onload
  var str = "";
  var counter = 0;
  ({ str, counter } = createCards(cardType, cardValue, str, counter, allCards));
}

function createCards(cardType, cardValue, str, counter, allCards) {
  //creates array with all cards at onload
  for (var z = 0; z < cardType.length; z++) {
    for (var i = 0; i < cardValue.length; i++) {
      str = 100 + counter + 1;
      allCards.push(str + cardValue[i] + cardType[z]);
      counter++;
    }
  }
  return { str, counter };
}

function cardSelected() {
  //get user selction and valided parsed item
  var cardNo = document.getElementById("selectCardNo").value;

  var isValid = validateData(cardNo)

  if (isValid) {
    var cardResult = allCards[cardNo -1];
    var showResult = convertToPlaneText(cardResult);
    document.getElementById('resultOfCard').innerHTML = "Du har valg kort nummer: " + cardNo + " som er " + showResult;
  }
}

function validateData(cardNo) {
  //validate user input
  if (cardNo === "") {
      document.getElementById('resultOfCard').innerHTML = "Indtast et tal!";
  } else if (cardNo < 1 || cardNo > 52) {
      document.getElementById('resultOfCard').innerHTML = "Indtast venligst et nummer mellem 1 og 52!";
  } else {
      return true;
  }
}

function convertToPlaneText(cardResult) {
  //converting array item to plane text 
  var showText = "";
 
  switch (cardResult.substr(4,1)) {
    case "H":
      showText = "<b>Hjerter ";
    break;
    case "S":
      showText = "<b>Spar ";
    break;
    case "R":
      showText = "<b>Ruder ";
    break;
    case "K":
      showText = "<b>Klør ";
    break;
  }  

  switch (cardResult.substr(3,1)) {
    case "A":
      showText += "es !</b>";
    break;
    case "X":
      showText += "10 !</b>";
    break;
    case "J":
      showText += "knægt !</b>";
    break;
    case "Q":
      showText += "dame !</b>";
    break;
    case "K":
      showText += "konge !</b>";
    break;
    default:
      showText += "<b>" + cardResult.substr(3,1)+"</b>";
  }  

  return showText;
}