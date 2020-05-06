function init() {
  // color used for the squar fields, in hex code
  const fieldColor = ["cf1719", "3fa535", "feed01", "009fe3"];
    
  for(let i = 0; i < 5; i++) {        
    for(let j = 0; j < 8; j++) { 
    
    let randomColor = fieldColor[Math.floor(Math.random() * fieldColor.length)];
    let randomNumber = Math.floor(Math.random() * 10);
  
    // If background color is yellow the text color must be black
    if (randomColor === "feed01") {
      var correctTextColor = "black";
    } else {
      var correctTextColor = "white";
    }
    
    document.getElementById('newPincode').innerHTML += "<input class='form-control colorField' type='tel' value='" 
    + randomNumber + "' maxlength='1' style='background-color:#" + randomColor + ";color:" + correctTextColor + "'>";
    }
    document.getElementById('newPincode').innerHTML += "<br>";
  }
}

document.addEventListener("DOMContentLoaded", init, false);