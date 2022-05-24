/***********************/
/* DOOR DE JAREN LOPEN */
/***********************/
var deButtonLinks = document.querySelector("button.left");
var deButtonRechts = document.querySelector("button.right");
var accessoiresPanel = document.querySelector("aside.accessoires");

var hetJaar = document.querySelector("h1");
var gezicht = document.querySelector("section.middle img");
var verhaal = document.querySelector("p");
var hoofd = document.querySelector("article");

var jaartallen = [
  {
    jaartal:"1978",
    description:"The minifigure we know and love today arrives."
  },
  {
    jaartal:"1979",
    description:"The first time male hairpieces were introduced. Before this time all the male minifigures wore hats."
  },
  {
    jaartal:"1989",
    description:"Pirates swashbuckled along and bought with them different facial expressions and body parts for the first time."
  },
  {
    jaartal:"1990",
    description:"The first minifigure wearing a dress was created, also the first glow in the dark accessoire was created."
  },
  {
    jaartal:"1993",
    description:"The first minifigure with a separate beard element was introduced."
  },
  {
    jaartal:"1999",
    description:"The first licensed minifigures launch with LEGO Star Wars."
  },
  {
    jaartal:"2004",
    description:"The first time all licensed minifigures no longer have yellow faces."
  }
];

var i = 0;

deButtonLinks.addEventListener("click", vorigJaar);
deButtonRechts.addEventListener("click", volgendJaar);

/* Hiermee kan je met de arrow keys ook de buttons bedienen, code van bron 2. */
document.addEventListener('keydown', (e) => {
  e = e || window.event;
  if (e.key === 'ArrowLeft') {
    vorigJaar();
  } else if (e.key === 'ArrowRight') {
    volgendJaar();
  }
})

function vorigJaar() {
  if (i == 0) {
    // doe niks
  } else {
    accessoiresPanel.classList.remove("j"+jaartallen[i].jaartal);
    i--;
    hetJaar.textContent = jaartallen[i].jaartal;        /* Verander h1 jaartal */
    verhaal.textContent = jaartallen[i].description;
    gezicht.dataset.jaartal = jaartallen[i].jaartal;    /* Verander gezicht */
    hoofd.dataset.jaartal = jaartallen[i].jaartal; 
  }
}

function volgendJaar() {
  if (jaartallen.length - 1 == i) {
    // doe niks
  } else {
    i++;
    accessoiresPanel.classList.add("j"+jaartallen[i].jaartal);
    hetJaar.textContent = jaartallen[i].jaartal;            /* Verander h1 jaartal */
    verhaal.textContent = jaartallen[i].description;
    gezicht.dataset.jaartal = jaartallen[i].jaartal;        /* Verander gezicht */
    hoofd.dataset.jaartal = jaartallen[i].jaartal;
  }
}


/*************************/
/* HOOFDDEKSELS OPZETTEN */
/*************************/
var deHoofddekselButtons = document.querySelectorAll("aside.accessoires button");

var hetHoofddeksel = document.querySelector(".hat");

deHoofddekselButtons.forEach(deButtonWaarJeInHetLijstjeBent => {
  deButtonWaarJeInHetLijstjeBent.addEventListener("click", function(e) {

    hetHoofddeksel.dataset.hoofddeksel = "";
    setTimeout(() => {
      hetHoofddeksel.dataset.hoofddeksel = this.value;
    }, 1);
  });
});

/* Hierdoor speelt er een geluidje af als een accessoire op het hoofdje klikt, code van bron 1. */
function playAudio(url) {
  setTimeout(() => {
    new Audio(url).play();
  }, 500);
}
