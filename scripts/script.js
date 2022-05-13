/***********************/
/* DOOR DE JAREN LOPEN */
/***********************/
var deButtonLinks = document.querySelector("button.left");
var deButtonRechts = document.querySelector("button.right");
var accessoiresPanel = document.querySelector("aside.accessoires");

var hetJaar = document.querySelector("h1");
var gezicht = document.querySelector("section.middle img");

var jaartallen = ["1978", "1979", "1989", "1990", "1993", "1997", "1999", "2001"];
var i = 0;

deButtonLinks.addEventListener("click", vorigJaar);
deButtonRechts.addEventListener("click", volgendJaar);

function vorigJaar() {
  if (i == 0) {
    // doe niks
  } else {
    accessoiresPanel.classList.remove("j"+jaartallen[i]);
    i--;
    hetJaar.textContent = jaartallen[i];
    gezicht.dataset.jaartal = jaartallen[i];
  }
}

function volgendJaar() {
  if (jaartallen.length - 1 == i) {
    // doe niks
  } else {
    i++;
    accessoiresPanel.classList.add("j"+jaartallen[i]);
    hetJaar.textContent = jaartallen[i];
    gezicht.dataset.jaartal = jaartallen[i];
  }
}


/*************************/
/* HOOFDDEKSELS OPZETTEN */
/*************************/
var deHoofddekselButtons = document.querySelectorAll("aside.accessoires button");

var hetHoofddeksel = document.querySelector(".hat");

deHoofddekselButtons.forEach(deButtonWaarJeInHetLijstjeBent => {
  deButtonWaarJeInHetLijstjeBent.addEventListener("click", function(e) {

    hetHoofddeksel.dataset.hoofddeksel = this.value;

  });
});

// deButtonAccessoires.addEventListener("click", zetPetOp);
// var muts = document.querySelector("section.hat img")

// function zetPetOp() {
//   deButtonAccessoires.classList.toggle("actieveAccessoiresButton")
//   muts.classList.toggle("mutsOpHoofd")
// }
