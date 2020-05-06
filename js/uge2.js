function OPG1() {
  // Omregner Kroner til Euro
  let kroner = prompt("Indtast kroner");
  var nyeKroner = removeSpecials(kroner); // klader funktion for at skifte comma med punktum
 
  if (nyeKroner != 0)
  {
      //let euro = nyeKroner / 7.45;
      var result = ((nyeKroner / 7.45).toLocaleString('dk-DK', { style: 'currency', currency: 'EUR' })); // viser currency formateret til DK
      alert("Omregning: " + kroner + " kr. er = " + result);
  } else {
    alert("Du intastede ikke et krone beløb!")
  }
}

function removeSpecials(str) {
  var res = "";
  for(var i=0; i<str.length; ++i) {
      var strTmp = str.substr(i,1)
      switch (strTmp) {
        case ".":
          strTmp = "";
          break;
        case ",":
          strTmp = ".";
          break;
      }
      res += strTmp;
  }
  console.log(res); 
  return res;
}

function OPG2() {
  // Omregner mellem Celcius og Fahrenheit
  let temperatureCelcius = prompt("Indtast Celcius temepratur?");
  var nyCelcius = removeSpecials(temperatureCelcius); // klader funktion for at skifte comma med punktum

  if (nyCelcius != "") {
    let temperaturFahrenheit = (nyCelcius * 1.8000) + 32;
    alert(`${nyCelcius} garder Celcius er = ${temperaturFahrenheit} grader Fahrenheit`);
  } else {
    alert("Du intastede ikke en Celcius værdi")
  }
}

function OPG3() {
  //terning kast, skal foretage loop til man "slår" en 6'er
  var1 = Math.floor(Math.random()*6+1); //tilfældigt tal mellem 1 og 6 
  if (var1 == 6) {
    alert("Tillykke, du slog en 6'er")
  } else {
    alert(`Du slog en ${var1}'er. Prøv igen`)
  }
}

function OPG4() {
  // Den lille tabel
  let space = " "
  let newLine = "\r\n"
  let message = ""
  for (var x = 1; x <= 10; x++) {
    for (var i = 1; i <= 10; i++) {
      message += (i * x);
      if (i == 10) {message += newLine;} else {message += space;}
    }
  }
  alert(message);
}

function OPG5() {
  // Den lille tabel
  let tekst = "";
  let newLine = "\r\n"
  let message = ""
  for (var i = 1; i <= 20; i++) {
    // anvender % operator der giver en rest efter en division eks. hvis i=5 giver divsionen med 2 en rest på 1 og denne kan bruges i if-statement
    if(i % 2 == 0) {
      tekst = "lige";
    } else {
      tekst = "ulige";
    }
    message += (`${i} er ${tekst}`+ newLine);
  }
  alert(message);
}