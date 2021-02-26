console.log("JS is running...")

//Skaber array til at gemme på innerHTML
let lastVisit = [];

//Initierer en array, som holder på info om antal besøgte sider (pushes i knap() og poppes i backBtn())
let history = [];

function start() {
    //Resetter
    document.getElementById("backBox").innerHTML = "";
    document.getElementById("closeBox").innerHTML = "";
    document.getElementById("lowerSection").innerHTML = "";

    //Viser pop-up
    document.getElementById("wrapper").style.display = "block";

    //Skaber trin 1-knapper
    for (i = 0; i < 2; i++) {
        let page = document.createElement("DIV");
        page.setAttribute("id", "knap" + (i + 1));
        page.setAttribute("class", "knap");
        page.setAttribute("onclick", "knap(" + (i + 1) + ")");
        document.getElementById("lowerSection").appendChild(page);
    }

    //Skaber luk-knap
    let luk = document.createElement("DIV");
    luk.setAttribute("id", "closeBtn");
    luk.innerHTML = "<p>X</p>";
    console.log(luk);
    document.getElementById("closeBox").appendChild(luk);

    lastVisit.push(document.getElementById("lowerSection").innerHTML)
}

function knap(x) {
    //Tjekker om der er en backBtn-knap - hvis ikke skaber den en
    if (!document.getElementById("backBtn")) {
        let backBtn = document.createElement("DIV");
        backBtn.setAttribute("id", "backBtn");
        backBtn.setAttribute("onclick", "backBtn()");
        backBtn.innerHTML = "Tilbage";
        document.getElementById("backBox").appendChild(backBtn);
    }

    if (x == 1) {
        //Giver hver knap et unikt ID
        let y = 3;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";

        //Creator
        for (i = 0; i < 5; i++) {
            let page = document.createElement("DIV");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "knap");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    } else if (x == 2) {
//Anton

    } else if (x == 3) {
//Ida

    } else if (x == 8) {
//

    }
}

function nameBtn() {
    if (document.getElementById("knap1")) {
        document.getElementById("knap1").innerHTML = "Erhverv (1)";
    }
    if (document.getElementById("knap2")) {
        document.getElementById("knap2").innerHTML = "Privat (2)";
    }
    if (document.getElementById("knap3")) {
        document.getElementById("knap3").innerHTML = "Info om job & uddannelse (3)";
    }
    if (document.getElementById("knap4")) {
        document.getElementById("knap4").innerHTML = "Info om os, robotter & indkøb (4)";
    }
    if (document.getElementById("knap5")) {
        document.getElementById("knap5").innerHTML = "At se brancherelevante cases (5)";
    }
    if (document.getElementById("knap6")) {
        document.getElementById("knap6").innerHTML = "At se en robot i aktion (6)";
    }
    if (document.getElementById("knap7")) {
        document.getElementById("knap7").innerHTML = "At få hjælp til problemer (7)";
    }
    if (document.getElementById("knap8")) {
        document.getElementById("knap8").innerHTML = "Info om os og vores robotter (8)";
    }
    if (document.getElementById("knap9")) {
        document.getElementById("knap9").innerHTML = "At se robotterne i aktion (9)";
    }
    if (document.getElementById("knap10")) {
        document.getElementById("knap10").innerHTML = "At prøve at designe en robot (10)";
    }
    if (document.getElementById("knap11")) {
        document.getElementById("knap11").innerHTML = "Info om job & uddannelse (11)";
    }
    if (document.getElementById("knap12")) {
        document.getElementById("knap12").innerHTML = "Kurser & uddannelse (12)";
    }
    if (document.getElementById("knap13")) {
        document.getElementById("knap13").innerHTML = "Karrieremuligheder hos os (13)";
    }
    if (document.getElementById("knap14")) {
        document.getElementById("knap14").innerHTML = "";
    }
}

function backBtn() {
    //Resetter indhold
    document.getElementById("lowerSection").innerHTML = "";

    //Fjerner sidste item i history-array
    history.pop();

    //Skaber ny række af knapper, baseret på lastVisit og history
    document.getElementById("lowerSection").innerHTML = lastVisit[history.length];
}

function delBackBtn () {
    if (document.getElementById("knap1")) {
        document.getElementById("backBox").innerHTML = "";
    }
}

//Ved hvert klik (uanset placering) kører funktionen nameBtn() (PÅ INGEN MÅDE OPTIMALT)
document.body.addEventListener("click", nameBtn);
document.body.addEventListener("click", delBackBtn);