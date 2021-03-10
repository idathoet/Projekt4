console.log("JS is running...")

//Ved hvert klik (uanset placering) kører forskellige funktioner
document.body.addEventListener("click", nameBtn);
document.body.addEventListener("click", delBackBtn);
document.body.addEventListener("click", breadNav);
document.body.addEventListener("click", giveTitle);

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
        let page = document.createElement("BUTTON");
        page.setAttribute("id", "knap" + (i + 1));
        page.setAttribute("class", "option");
        page.setAttribute("onclick", "knap(" + (i + 1) + ")");
        document.getElementById("lowerSection").appendChild(page);
    }

    //Skaber luk-knap
    let luk = document.createElement("BUTTON");
    luk.setAttribute("id", "closeBtn");
    luk.setAttribute("onclick", "closeBtn()");
    luk.innerHTML = "X";
    document.getElementById("closeBox").appendChild(luk);

    lastVisit.push(document.getElementById("lowerSection").innerHTML);
}

//Hovedfunktion til knapper
function knap(x) {
    //Tjekker om der er en backBtn-knap - hvis ikke skaber den en
    if (!document.getElementById("backBtn")) {
        let backBtn = document.createElement("BUTTON");
        backBtn.setAttribute("id", "backBtn");
        backBtn.setAttribute("onclick", "backBtn()");
        backBtn.innerHTML = "Tilbage";
        document.getElementById("backBox").appendChild(backBtn);
    }

    //If-udsagn, som skaber en ny side alt efter hvilken knap, der trykkes på
    if (x == 1) {
        //Giver hver knap et unikt ID
        let y = 3;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";
        document.getElementById("breadcrumb").innerHTML = "";

        //Skaber valgmuligheder
        for (i = 0; i < 5; i++) {
            let page = document.createElement("BUTTON");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "option");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    } else if (x == 2) {
        //Giver hver knap et unikt ID
        let y = 8;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";

        //Skaber valgmuligheder
        for (i = 0; i < 4; i++) {
            let page = document.createElement("BUTTON");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "option");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    } else if (x == 3) {
        //Giver hver knap et unikt ID
        let y = 14;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";
        document.getElementById("breadcrumb").innerHTML = "";

        //Skaber valgmuligheder
        for (i = 0; i < 4; i++) {
            let page = document.createElement("BUTTON");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "option");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    } else if (x == 11) {
        //Giver hver knap et unikt ID
        let y = 12;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";
        document.getElementById("breadcrumb").innerHTML = "";

        //Skaber valgmuligheder
        for (i = 0; i < 2; i++) {
            let page = document.createElement("BUTTON");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "option");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    }
}

//Funktion, der tjekker om en specifik knap, baseret på id, findes, og hvis den gør, sætter den tekst ind i knappens tekstfelt
function nameBtn() {
    if (document.getElementById("knap1")) {
        document.getElementById("knap1").innerHTML = "Erhverv";
    }
    if (document.getElementById("knap2")) {
        document.getElementById("knap2").innerHTML = "Privat";
    }
    if (document.getElementById("knap3")) {
        document.getElementById("knap3").innerHTML = "Info om os og vores robotter";
    }
    if (document.getElementById("knap4")) {
        document.getElementById("knap4").innerHTML = "At se robotter i aktion";
    }
    if (document.getElementById("knap5")) {
        document.getElementById("knap5").innerHTML = "At designe en robot";
    }
    if (document.getElementById("knap6")) {
        document.getElementById("knap6").innerHTML = "Info om job og uddannelse";
    }
    if (document.getElementById("knap7")) {
        document.getElementById("knap7").innerHTML = "At få hjælp til problemer";
    }
    if (document.getElementById("knap8")) {
        document.getElementById("knap8").innerHTML = "Info om os og vores robotter";
    }
    if (document.getElementById("knap9")) {
        document.getElementById("knap9").innerHTML = "At se robotterne i aktion";
    }
    if (document.getElementById("knap10")) {
        document.getElementById("knap10").innerHTML = "At designe en robot";
    }
    if (document.getElementById("knap11")) {
        document.getElementById("knap11").innerHTML = "Info om job & uddannelse";
    }
    if (document.getElementById("knap12")) {
        document.getElementById("knap12").innerHTML = "Kurser & uddannelse";
    }
    if (document.getElementById("knap13")) {
        document.getElementById("knap13").innerHTML = "Karrieremuligheder";
    }
    if (document.getElementById("knap14")) {
        document.getElementById("knap14").innerHTML = "Socialt ansvar";
    }
    if (document.getElementById("knap15")) {
        document.getElementById("knap15").innerHTML = "Sikkerhed";
    }
    if (document.getElementById("knap16")) {
        document.getElementById("knap16").innerHTML = "Os generelt";
    }
    if (document.getElementById("knap17")) {
        document.getElementById("knap17").innerHTML = "Indkøb af robotter";
    }
}

//Funktion, der tjekker om en specifik knap, baseret på id, findes, og hvis den gør, ændrer den titlen på siden
function giveTitle() {

    if (document.getElementById("knap1")) {
        document.getElementById("titel").innerHTML = "";
        document.getElementById("titel").innerHTML = "Er du...";
    } 

    if (document.getElementById("knap3")) {
        document.getElementById("titel").innerHTML = "";
        document.getElementById("titel").innerHTML = "Ønsker du...";
    }

    if (document.getElementById("knap14")) {
        document.getElementById("titel").innerHTML = "";
        document.getElementById("titel").innerHTML = "Ønsker du info om...";
    }

    if (document.getElementById("knap8")) {
        document.getElementById("titel").innerHTML = "";
        document.getElementById("titel").innerHTML = "Ønsker du...";
    }
    
    if (document.getElementById("knap12")) {
        document.getElementById("titel").innerHTML = "";
        document.getElementById("titel").innerHTML = "Ønsker du info om...";
    }
}

//Funktion, der håndterer tilbage-knappen
function backBtn() {
    //Resetter indhold
    document.getElementById("lowerSection").innerHTML = "";

    //Fjerner sidste item i history-array
    history.pop();

    //Fjerner seneste item i lastVisit
    lastVisit.pop();

    //Skaber ny række af knapper, baseret på lastVisit og history
    document.getElementById("lowerSection").innerHTML = lastVisit[history.length];
}

//Funktion, der skaber brødkrummer, baseret på hvilken knap der står øverst
function breadNav() {
    if (document.getElementById("knap1")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start";
        document.getElementById("breadcrumb").appendChild(btn1);
    } 
    if (document.getElementById("knap3")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start  -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "erhverv");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Erhverv";
        document.getElementById("breadcrumb").appendChild(btn2);
    }
    if (document.getElementById("knap14")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start  -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "erhverv");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Erhverv  -";
        document.getElementById("breadcrumb").appendChild(btn2);
        let btn3 = document.createElement("DIV");
        btn3.setAttribute("id", "indkøb");
        btn3.setAttribute("class", "breadcrumb");
        btn3.innerHTML = "Os & vores robotter";
        document.getElementById("breadcrumb").appendChild(btn3);
    }
    if (document.getElementById("knap8")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start  -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "privat");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Privat";
        document.getElementById("breadcrumb").appendChild(btn2);
    }
    if (document.getElementById("knap12")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start  -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "privat");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Privat  -";
        document.getElementById("breadcrumb").appendChild(btn2);
        let btn3 = document.createElement("DIV");
        btn3.setAttribute("id", "indkøb");
        btn3.setAttribute("class", "breadcrumb");
        btn3.innerHTML = "Kurser & karriere";
        document.getElementById("breadcrumb").appendChild(btn3);
    }
}

//Funktion, der tjekker om knappen med id "knap1" findes, og hvis den gør, sletter den tilbage-knappen
function delBackBtn() {
    if (document.getElementById("knap1")) {
        document.getElementById("backBox").innerHTML = "";
    }
}

//Funktion, der ændrer pop-uppens display til none, samt resetter lastVisit og history-arrays
function closeBtn() {
    document.getElementById("wrapper").style.display = "none";
    lastVisit = [];
    history = [];
}