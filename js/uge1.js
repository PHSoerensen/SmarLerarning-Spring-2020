function init()
{
	// en variabel til at opbevare det indtastede ord
    var ord="";

    // en do-while løkke kører mindst en gang
    do
    {
		// vha en prompt henter vi et ord fra brugeren
        ord = prompt("Indtast ord: ", "");
		// ord vises i console
        console.log(ord);
    // ord vises på skærmen
        document.getElementById('answer').innerHTML =  ord;
    }
    while (ord != "Stop")
	// løkken kører så længe variablen ord indeholder værdien Stop
}
