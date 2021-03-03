console.log("JS is running...")

//Skaber array til at gemme på innerHTML
let lastVisit = [];

//Initierer en array, som holder på info om antal besøgte sider (pushes i knap() og poppes i backBtn())
let history = [];

//Breadcrumbs array
let breadcrumbs = [];

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

    //Tilføjer til breadcrumb
    if (!document.getElementById("start")) {
        let bread = document.createElement("BUTTON");
        bread.setAttribute("id", "start");
        bread.setAttribute("onclick", "breadNav(1)");
        bread.innerHTML = "Start";
        document.getElementById("breadcrumb").appendChild(bread);
    }

    breadcrumbs.push(document.getElementById("breadcrumb").innerHTML);
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

        // document.getElementById("breadcrumb").innerHTML = breadcrumbs;

        //Tilføjer spor til breadcrumbs, hvis der ikke allerede er en
        if (!document.getElementById("erhverv")) {
            let bread = document.createElement("BUTTON");
            bread.setAttribute("id", "erhverv");
            bread.setAttribute("onclick", "breadNav(2)");
            bread.innerHTML = "Erhverv";
            document.getElementById("breadcrumb").appendChild(bread);
            breadcrumbs.push(document.getElementById("erhverv"));
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        // breadcrumbs.push(document.getElementById("breadcrumb").innerHTML);
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
    } else if (x == 3) {
        //Giver hver knap et unikt ID
        let y = 12;

        //Resetter
        document.getElementById("lowerSection").innerHTML = "";

        //Skaber titel
        document.getElementById("titel").innerHTML = "Søger du...";

        //Skaber valgmuligheder
        for (i = 0; i < 2; i++) {
            let page = document.createElement("BUTTON");
            page.setAttribute("id", "knap" + (i + y));
            page.setAttribute("class", "option");
            page.setAttribute("onclick", "knap(" + (i + y) + ")");
            document.getElementById("lowerSection").appendChild(page);
        }

        //Tilføjer spor til breadcrumbs, hvis der ikke allerede er en
        if (!document.getElementById("job")) {
            let bread = document.createElement("BUTTON");
            bread.setAttribute("id", "job");
            bread.setAttribute("onclick", "knap(1)");
            bread.innerHTML = "Job";
            document.getElementById("breadcrumb").appendChild(bread);
        }

        //Gemmer historik
        lastVisit.push(document.getElementById("lowerSection").innerHTML);
        history.push(1);
    } else if (x == 8) {

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

function breadNav(x) {
    document.getElementById("breadcrumb").innerHTML = "";
    if (x == 1) {
        start();
    } else if (x == 2) {
        knap(1);
    }
}

function backBtn() {
    //Resetter indhold
    document.getElementById("lowerSection").innerHTML = "";
    document.getElementById("breadcrumb").innerHTML = "";

    //Fjerner sidste item i history-array
    history.pop();

    //Fjerner seneste item i lastVisit
    lastVisit.pop();

    //Fjerner seneste item i breadcrumbs
    if (breadcrumbs.length > 1) {
        breadcrumbs.pop();
    }

    //Skaber ny række af knapper, baseret på lastVisit og history
    document.getElementById("lowerSection").innerHTML = lastVisit[history.length];

    //Skaber breadcrumbs
    document.getElementById("breadcrumb").innerHTML = breadcrumbs[history.length];
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
document.body.addEventListener("dblclick", console.log(breadcrumbs));