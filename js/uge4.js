var tal = [5, 7, 1, 9, 8, 4, 6, 3, 2];
var max = 0;
var erStigende = true;

function init() {
    for (var i = 0; i < tal.length; i++) {
        if (max < tal[i]) {
            max = tal[i];
        }
    }
    alert("Det største tal er: " +max);    
}

function init2() {
    for (var i = 0; i < tal.length-1; i++) {
        if (tal[i] > tal[i+1]) {
            erStigende = false;;
        }
    }
    if (erStigende == true) {
        alert("Talrækken er stigende");
    } else {
        alert("Talrækken er falende");
    }      
}
