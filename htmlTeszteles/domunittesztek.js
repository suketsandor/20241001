function trKeszito(eredmenyTomb) {
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(eredmenyTomb[0]));
    td2.appendChild(document.createTextNode(eredmenyTomb[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);


    document.getElementById("torzs").appendChild(tr);
}
 
/*
- document.get...(getElementById,getElementsByTagName, getElementByClassName)
- document.querySelector --> az elso elemet adja vissza (p, .osztal, #azonosito)
- document.querySelectorAll --> az osszes elemet adja vissza (p, .osztaly, #azonosito)
*/
//UNIT tesztek 
 
function h1KozepreIgazitasTeszt(){
    try{
        var h1 = document.querySelector("h1");
        if(h1.style.textAlign == "center"){
            return ["h1KozepreIgaztasTeszt", "Sikeres"];
        }
        else {
            return ["h1KozepreIgaztasTeszt", "Sikertelen"];
        }
    } 
    catch{
        return ["h1KozepreIgaztasTeszt", "Hiba"];
    }

}

trKeszito(h1KozepreIgazitasTeszt());

function h1Tartalom(){
    try{
        var h1 = document.querySelector("h1");
        if(h1.innerHTML == "Bootstrap informaciok"){
            return ["h1Tartalom", "Sikeres"];
        }
        else {
            return ["h1Tartalom", "Sikertelen"];
        }
    }
    catch{
        return ["h1Tartalom", "Hiba"];
    }
}

trKeszito(h1Tartalom());

function kepTitle(){
    try {
        var img = document.querySelector("img");
        // if(img.getAttribute != null){}
        if(img.title != null){
            return ["kepTitle", "Sikeres"];
        }
        else {
            return ["kepTitle", "Sikertelen"];
        }
    }
    catch{
        return ["kepTitle", "Hiba"];
    }
}

trKeszito(kepTitle());

function bootstrapLogo(){
    try{
        var img = document.querySelector("img");
        if (img.title == "Bootstrap logo"){
            return ["bootstrapLogo", "Sikeres"];
        }
        else {
            return ["bootstrapLogo", "Sikertelen"];
        }
    }
    catch {
        return ["bootstrapLogo", "Hiba"];
    }
}

trKeszito(bootstrapLogo());

function link(){
    var link = document.querySelector("a");
    try {
        if (link.href == "https://getbootstrap.com/"){
            return ["link", "Sikeres"];
        }
        else {
            return ["link", "Sikertelen"];
        }
    }
    catch {
        return ["link", "Hiba"];
    }
}

trKeszito(link());

function lista(){
    var elemek = document.querySelectorAll("li");
    try{
        if ( elemek.length == 5){
            return ["lista", "Sikeres"];
        }
        else {
            return ["lista", "Sikertelen"];
        }
    }
    catch{
        return ["lista", "Hiba"];
    }
}

trKeszito(lista());

function h2tartalom(){
    var h2szoveg = document.querySelector("h2");
    try {
        if (h2szoveg.innerHTML == "Mire használjuk:"){
            return ["h2tartalom", "Sikeres"];
        }
        else {
            return ["h2tartalom", "Sikertelen"];
        }
    }
    catch {
        return ["h2tartalom", "Hiba"];
    }
}

trKeszito(h2tartalom());

function kepId(){
    var kepid = document.querySelector("img");
    try {
        if (kepid.id == "Bootstrap_logo"){
            return ["kepId", "Sikeres"];
        }
        else {
            return ["kepId", "Sikertelen"];
        }
    }
    catch {
        return ["kepId", "Hiba"];
    }
}

trKeszito(kepId());

function aTarget(){
    var aTargetTag = document.querySelector("a");
    try {
        if (aTargetTag.target == "_blank"){
            return ["aTarget", "Sikeres"];
        }
        else {
            return ["aTarget", "Sikertelen"];
        }
    }
    catch {
        return ["aTarget", "Hiba"];
    }
}

trKeszito(aTarget());

function masodikLi(){
    var masodikLiTartalom = document.querySelectorAll("li")[1];
    try {
        if (masodikLiTartalom.innerHTML == "Urlapkeszites"){
            return ["masodikLi", "Sikeres"];
        }
        else {
            return ["masodikLi", "Sikertelen"];
        }
    }
    catch {
        return ["masodikLi", "Hiba"];
    }
}

trKeszito(masodikLi());