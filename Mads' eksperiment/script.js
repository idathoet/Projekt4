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

        // //Skaber titel
        document.getElementById("titel").innerHTML = "Søger du...";

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

        //Skaber titel
        document.getElementById("titel").innerHTML = "Søger du...";

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
    } else if (x == 4) {
        //Giver hver knap et unikt ID
        let y = 14;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";
        document.getElementById("breadcrumb").innerHTML = "";

        // //Skaber titel
        document.getElementById("titel").innerHTML = "Søger du...";

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

        // //Skaber titel
        document.getElementById("titel").innerHTML = "Søger du...";

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
        document.getElementById("knap14").innerHTML = "Bæredygtighed & socialt ansvar (14)";
    }
    if (document.getElementById("knap15")) {
        document.getElementById("knap15").innerHTML = "Sikkerhed (15)";
    }
    if (document.getElementById("knap16")) {
        document.getElementById("knap16").innerHTML = "Os generelt (16)";
    }
    if (document.getElementById("knap17")) {
        document.getElementById("knap17").innerHTML = "Indkøb af robotter (17)";
    }
}

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
        btn1.innerHTML = "Start" + " -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "erhverv");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Erhverv";
        document.getElementById("breadcrumb").appendChild(btn2);
    }
    if (document.getElementById("knap12")) {
        document.getElementById("breadcrumb").innerHTML = "";
        let btn1 = document.createElement("DIV");
        btn1.setAttribute("id", "start");
        btn1.setAttribute("class", "breadcrumb");
        btn1.innerHTML = "Start -";
        document.getElementById("breadcrumb").appendChild(btn1);
        let btn2 = document.createElement("DIV");
        btn2.setAttribute("id", "erhverv");
        btn2.setAttribute("class", "breadcrumb");
        btn2.innerHTML = "Erhverv -";
        document.getElementById("breadcrumb").appendChild(btn2);
        let btn3 = document.createElement("DIV");
        btn3.setAttribute("id", "job");
        btn3.setAttribute("class", "breadcrumb");
        btn3.innerHTML = "Job";
        document.getElementById("breadcrumb").appendChild(btn3);
    }
}

function delBackBtn() {
    if (document.getElementById("knap1")) {
        document.getElementById("backBox").innerHTML = "";
    }
}

function closeBtn() {
    document.getElementById("wrapper").style.display = "none";
}

//Ved hvert klik (uanset placering) kører funktionen nameBtn() (PÅ INGEN MÅDE OPTIMALT)
document.body.addEventListener("click", nameBtn);
document.body.addEventListener("click", delBackBtn);
document.body.addEventListener("click", breadNav);