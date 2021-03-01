console.log("JS is running...");
let step = "a0"

function start () {
  step = "a1";
  console.log(step);
//opretter baggrund
  let background = document.createElement("DIV");
  background.setAttribute("id", "pop-up");
  background.innerHTML = "backgroundDIV";
  document.body.appendChild(background);
//opretter knap1
  let knap1 = document.createElement("DIV");
  knap1.innerHTML = "former";
  knap1.setAttribute("class", "knap");
  knap1.setAttribute("onclick", "former()");
  document.getElementById("pop-up").appendChild(knap1);
//opretter knap1
  let knap2 = document.createElement("DIV");
  knap2.innerHTML = "tal";
  knap2.setAttribute("class", "knap");
  document.getElementById("pop-up").appendChild(knap2);
//opretter knap3
  let knap3 = document.createElement("DIV");
  knap3.innerHTML = "lande";
  knap3.setAttribute("class", "knap");
  document.getElementById("pop-up").appendChild(knap3);
}

function former () {
  step = "a2";
  console.log(step);
  document.getElementById("pop-up").innerHTML = "";
//opretter knap1
  let knap1 = document.createElement("DIV");
  knap1.innerHTML = "firkant";
  knap1.setAttribute("class", "knap");
  knap1.setAttribute("onclick", "former()");
  document.getElementById("pop-up").appendChild(knap1);
//opretter knap1
  let knap2 = document.createElement("DIV");
  knap2.innerHTML = "trekant";
  knap2.setAttribute("class", "knap");
  document.getElementById("pop-up").appendChild(knap2);
//opretter knap3
  let knap3 = document.createElement("DIV");
  knap3.innerHTML = "rund";
  knap3.setAttribute("class", "knap");
  document.getElementById("pop-up").appendChild(knap3);
}

function knap1 () {
    //Resetter
    document.getElementById("pop-up").innerHTML = "";
    //Creator
    let stilling = document.createElement("BUTTON");
    stilling.innerHTML = "klik her";
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
