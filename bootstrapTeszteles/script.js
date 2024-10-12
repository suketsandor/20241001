//UNIT tesztek
//Komment tovabb tovabb

function trKeszito(tomb){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(tomb[0]));
    td2.appendChild(document.createTextNode(tomb[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("torzs").appendChild(tr);
}

function tesztproba(){
    var tesztNev = "Elso 'div' container class";
    
    try {
        var div = document.querySelector("div");
        if ( div.classList.contains("container")){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(tesztproba());

function teszt1(){
    var tesztNev = "1 feladat";
    
    try {
        var elsoInput = document.querySelector("input");
        if ( elsoInput.type == "text"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt1());

function teszt2(){
    var tesztNev = "2 feladat";
    
    try {
        var masodikInput = document.querySelectorAll("input")[1];
        if ( masodikInput.id == "email"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt2());

function teszt3(){
    var tesztNev = "3 feladat";
    
    try {
        var elsoInput = document.querySelector("input");
        if ( elsoInput.classList.contains("form-control")){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt3());

function teszt4(){
    var tesztNev = "4 feladat";
    
    try {
        var gomb = document.querySelector("button");
        if ( gomb.type == "button"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt4());

function teszt5(){
    var tesztNev = "5 feladat";
    
    try {
        var haromOption = document.querySelectorAll("option");
        if ( haromOption.length == 3){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt5());

/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt6(){
    var tesztNev = "6 feladat";
    
    try {
        var elsoLabel = document.querySelector("label");
        if ( elsoLabel.innerHTML == "teljes nev"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt6());
/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt7(){
    var tesztNev = "7 feladat";
    
    try {
        var masodikDiv = document.querySelectorAll("div")[1];
        if ( masodikDiv.classList.contains("row")){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt7());

/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt8(){
    var tesztNev = "8 feladat";
    
    try {
        var elsoH1 = document.querySelector("h1");
        if ( elsoH1.classList.contains("text-center")){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt8());

/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt9(){
    var tesztNev = "9 feladat";
    
    try {
        var haromLabel = document.querySelectorAll("label");
        if ( haromLabel.length == 3){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt9());

/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt10(){
    var tesztNev = "10 feladat";
    
    try {
        var haromLabel = document.querySelectorAll("label");
        if ( haromLabel.length == 3){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt10());
/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt11(){
    var tesztNev = "11 feladat";
    
    try {
        var selectLabel = document.querySelectorAll("label")[2];
        if ( selectLabel.innerHTML == "munkakor"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt11());
/////////////////////////////////////////////////////////////////////////////////////////////////////

function teszt12(){
    var tesztNev = "12 feladat";
    
    try {
        var masodikOption = document.querySelectorAll("option")[1];
        if ( masodikOption.value == "be"){
            return [tesztNev,"sikeres"];
        }
        else {
            return [tesztNev,"sikertelen"];
        }
    }
    catch {
        return [tesztNev,"hiba"];
    }
}

trKeszito(teszt12());
