// counter de clap //
let clapt = document.querySelector("input");
let countclap = 0;
let truebff = "";

function clap() {
    countclap += 1;
    if (countclap == 100) {
        truebff = "TU EST UN VRAI BESTO FRIENDO!!";
    }
    document.getElementById("nbclap").innerText = countclap.toString();
    document.getElementById("bffph").innerText = truebff;
}

// MODE DARK //
var bodycolor = "pink";
var textp = "black";

function darkmode() {
    if (bodycolor === "pink") {
        bodycolor = "black";
        textp = "white";
    } else if (bodycolor === "black") {
        bodycolor = "pink";
        textp = "black";
    }
    document.body.style.backgroundColor = bodycolor;
    // pour changer toute les valeur y a deux façon //
    const elements = Array.prototype.map.call(document.getElementsByClassName("textdarkp"), (e) => e);
    for (const htmltext of elements) {
      htmltext.style.color = textp;
    }
    //     let collection = document.getElementsByClassName("textdarkp");
    // for (let i = 0; i < collection.length; i++) {
    //   collection.item().style.color = textp;
    // }
}

