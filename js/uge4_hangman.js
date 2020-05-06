// def. global variabels
var hangmanWord = ["kaffe", "ost", "smartlearning", "hestevogn", "student", "butik", "telefon" ,"computer", "parasol", "seng"];
var pickedWord ="";
var showResult = "";
var showTemp = [];
var firstTime = true;

function init() {
  // selcets a random number to pick the word at index i array variabel by onload
   let index = Math.floor(Math.random() * hangmanWord.length);
   //to avoid fail I convert all words and input letters to uppercase
   pickedWord = hangmanWord[index].toUpperCase(); 
   showTheWord(showResult);
   document.getElementById('messageToPlayer').innerHTML = `Du skal gætte et ord på ${pickedWord.length} bogstaver. Værsgo at indtast første bogstav!`;
}

function letterSelected() {
  //get user selction and valided parsed item
  var letter = document.getElementById("letterSelected").value.toUpperCase();

  var isValid = validateData(letter)

  if (isValid) {
    showResult = convertToPlaneText(pickedWord, letter);
    showTheWord(showResult);
    
    if (showResult === pickedWord) {
      document.getElementById('messageToPlayer').innerHTML = "<b>Bravo, du gættede rigtig !</b>";
    } else {
      document.getElementById('messageToPlayer').innerHTML = "Prøv igen !";
    }
  }
}

function validateData(letter) {
  //working with regEx expression to check if letter contain digits
  var result = ckeckForDigits();

  //validate user input
  if (letter === "") {
      document.getElementById('messageToPlayer').innerHTML = "Indtast et bogstav!";
  } else if (letter == pickedWord) {
      document.getElementById('messageToPlayer').innerHTML = "Bravo, du gættede rigtig!";
      return true;
  } else if (result == false || result == null) {
      document.getElementById('messageToPlayer').innerHTML = "Du må kun indtaste bogstaver!";
  } else {
      return true;
  }

  function ckeckForDigits() {
    var regExPattern = /\D/g;
    var result = false;
    if (letter.match(regExPattern) != "") {
      var result = true;
    } else {
      var result = false;    
    }
    return result;
  }
}

function convertToPlaneText(pickedWord, letter) {
  //converting array item to plane text 
  var showText = "";

  for (var i = 0; i < pickedWord.length; i++) {
    if (firstTime == true) {
      //first time: 
      if (pickedWord.substr(i,1) == letter) {
        showTemp.push(letter);
      } else {
        showTemp.push("_");
      }  
    } else {
      //second time:
      if (pickedWord.substr(i,1) == letter) {
        showTemp[i] = letter;
      }  
    }
  }
  firstTime = false;
  
  showTemp.forEach(createShowText);
  function createShowText(item) {
    showText += item;
  }
  return showText;
}

function showTheWord(showResult) {
  document.getElementById('resultOfWord').innerHTML = " ";
  for(let i = 0; i < pickedWord.length; i++) {        
    
    let textAtPosition = "";
    textAtPosition = showResult.substr(i,1);
    console.log(textAtPosition);
    
    document.getElementById('resultOfWord').innerHTML += "<input class='form-control colorField' type='text' value='" 
      + textAtPosition + "' disabled style='background-color:#feed01" + ";color:black" + "'>";
  }
}
