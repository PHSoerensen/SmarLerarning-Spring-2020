// Defines an object to get or set the value when the dice hold button is clicked or unclicked
let diceObj = [
  {currentValue: 0, hold: false},
  {currentValue: 0, hold: false},
  {currentValue: 0, hold: false},
  {currentValue: 0, hold: false},
  {currentValue: 0, hold: false}
]

// Object score sheet
let scoreSheet = [
  {
    ones: null,
    twos: null,
    threes: null,
    fours: null,
    fives: null,
    sixes: null
  },
  {
    threeOfAKind: null,
    fourOfAKind: null,
    fullHouse: null,
    smallStraight: null,
    largeStraight: null,
    yahtzee: null,
    chance: null
  },
  {
    smallYatzyTotal: null,
    smallYatzybonus: null,
    smallYatzyGrandTotal: null,
    bigYatzyGrandTotal: null,
    yatzyGrandTotal: null
  }
]

function init() {

}

function roleTheDice() {
  var diceAtPosition = [];

  for (var i = 0; i <5; i++) {
    diceAtPosition[i] = Math.floor(Math.random() * 6) + 1;
    console.log(`Terning${i+1} = ${diceAtPosition[i]}`);
    document.getElementById(`diceNo${i + 1}`).innerHTML = "<input class='form-control colorField' type='text' value='" 
    + diceAtPosition[i] + "' disabled style='background-color:#feed01" + ";color:black" + "'>";
  }
}

function enere(terninger) {
    let point = 0;
    for (let i = 0; i < 5; i++)
    {
    if (terninger[i] == 1) // Det er en etter
    {
        point += 1;          // Hver etter giver ét point
    }
    }
    return point;
}

  //Toggles the hold functionality and applies a new style class if hold is true.
  function toggleHold(key, holdElementId) {
    let clickedElement = document.getElementById(holdElementId);
  
    diceObj[key].hold = !diceObj[key].hold;
    if (diceObj[key].hold === true) {
      clickedElement.classList.add('hold');
    } else {
      clickedElement.classList.remove('hold');
    }
  }

// Calculates the score and updates the scoreSheet object and HTML.
function calculateUpper(argA, argB, argC) {
  if (!scoreSubmitted && argA === null) {
    argA = 0;
    diceObj.forEach(item => {
      if (item.currentValue === argB) {
        argA += argB;
      }
    });
  argC.textContent = argA;
  //calculationEnd();
  }
}
