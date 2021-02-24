console.log("JS is running...");

let array = [t1s, t2p, t2e, t3];

//Funktion, der logger "hej"
function logHej () {
    console.log("hej");
}

function showGuide () {

}

function knap (x) {
    if (x === 1) {
        
    } else if (x === 2) {

    }
}

function knap1 () {
    //Resetter
    document.getElementById("pop-up").innerHTML = "";
    //Creator
    let t1stilling = document.createElement("BUTTON");
    t1stilling.innerHTML = "klik her";
    document.getElementById("pop-up").appendChild(t1stilling);
}

function tilbage () {
    //Resetter
    document.getElementById("pop-up").innerHTML = "";
    //Skaber ny række af knapper
    let t1stilling = document.createElement("DIV");
    t1stilling.setAttribute("id", "knap1");
    t1stilling.innerHTML = "Knap 1";
    document.getElementById("pop-up").appendChild(t1stilling);
    //Tilføjer lytter til gældende knap
    document.getElementById("knap1").addEventListener("click", knap1);
}




document.getElementById("tilbage").addEventListener("click", tilbage);

//Eventlytter som tjekker om man klikker på knap1. Hvis ja, kører den funktionen logHej()
document.getElementById("knap1").addEventListener("click", knap1);