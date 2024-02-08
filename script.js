// counter de clap //
let clapt = document.querySelector("input");
let countclap = 0;
let truebff = "";

function clap() {
    countclap += 1;
    if (countclap == 100){
        truebff = "TU EST UN VRAI BESTO FRIENDO!!";
    }
    document.getElementById("nbclap").innerText=countclap.toString();
    document.getElementById("bffph").innerText=truebff;
}
