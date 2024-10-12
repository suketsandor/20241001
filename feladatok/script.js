document.getElementById("felvitel").addEventListener("click", function(){

    var rendszam = document.getElementById("rendszam").value;
    var gyarto = document.getElementById("gyarto").value;
    var tipus = document.getElementById("tipus").value;
    var forgalomban = document.getElementById("forgalomban").value;

    
    var auto = {
        rsz: rendszam,
        gy: gyarto,
        t:tipus,
        f:forgalomban
    };
        document.getElementById("formula").reset();

    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");

    td1.appendChild(document.createTextNode(auto.rsz));
    td2.appendChild(document.createTextNode(auto.gy));
    td3.appendChild(document.createTextNode(auto.t));
    td4.appendChild(document.createTextNode(auto.f));

    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    document.getElementById("torzs").appendChild(tr);
})

function trKeszito(tomb){
    var tr = document.createElement("tr");

    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    td1.appendChild(document.createTextNode(tomb[0]));
    td2.appendChild(document.createTextNode(tomb[1]));

    tr.appendChild(td1);
    tr.appendChild(td2);

    document.getElementById("torzs2").appendChild(tr);
}
//==========================================================================
function teszt1(){
    var tesztNev = "H1 tartalom";

    try{
        var h1Tartalom = document.querySelector("h1");
        if (h1Tartalom.innerHTML == "Jarmuvek felvitele"){
            return [tesztNev, "Sikeres"];
        }
        else {
            return [tesztNev, "Sikertelen"];
        }
    }
    catch {
        return [tesztNev, "Hiba"];
    }
}

trKeszito(teszt1());
//==========================================================================
function teszt2(){
    var tesztNev = "Elso input tipusa";

    try{
        var elsoinput = document.querySelector("input");
        if (elsoinput.type == "text"){
            return [tesztNev, "Sikeres"];
        }
        else {
            return [tesztNev, "Sikertelen"];
        }
    }
    catch {
        return [tesztNev, "Hiba"];
    }
}

trKeszito(teszt2());
//==========================================================================
function teszt3(){
    var tesztNev = "Negyedik input tipusa";

    try{
        var negyedikinput = document.querySelectorAll("input")[3];
        if (negyedikinput.type == "date"){
            return [tesztNev, "Sikeres"];
        }
        else {
            return [tesztNev, "Sikertelen"];
        }
    }
    catch {
        return [tesztNev, "Hiba"];
    }
}

trKeszito(teszt3());
//==========================================================================
function teszt4(){
    var tesztNev = "Elso div class container";

    try{
        var elsoDiv = document.querySelector("div");
        if (elsoDiv.classList.contains("container")){
            return [tesztNev, "Sikeres"];
        }
        else {
            return [tesztNev, "Sikertelen"];
        }
    }
    catch {
        return [tesztNev, "Hiba"];
    }
}

trKeszito(teszt4());
//==========================================================================
function teszt5(){
    var tesztNev = "Harmadik th tartalma";

    try{
        var harmadikTh = document.querySelectorAll("th")[2];
        if (harmadikTh.innerHTML == "Tipus"){
            return [tesztNev, "Sikeres"];
        }
        else {
            return [tesztNev, "Sikertelen"];
        }
    }
    catch {
        return [tesztNev, "Hiba"];
    }
}

trKeszito(teszt5());
