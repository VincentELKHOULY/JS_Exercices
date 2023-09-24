//je selectionne et je stocke
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
let compteur = 0;
let titre = document.getElementById("titre");

//Je soumet le cercle rouge  une action.

function add() {
  compteur = compteur + 1;
  console.log(compteur, "comtpeur aprés incrémentation");
  titre.innerText = compteur;
}

setTimeout(() => {
  console.log("fin du chrono");
  btnBlue.remove();
  btnRed.remove();
}, 10000);

btnRed.addEventListener("click", () => {
  add();
});

btnBlue.addEventListener("click", () => {
  add();
});
