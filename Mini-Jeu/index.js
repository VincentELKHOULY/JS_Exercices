//je selectionne et je stocke
const btnRed = document.getElementById("btn-red");
const btnBlue = document.getElementById("btn-blue");
let compteur = 0;

//Je soumet le cercle rouge  une action.

btnRed.addEventListener("click", () => {
  //ici l'action :
  //incrémenter le compteur de 1
  compteur = compteur + 1;
  console.log(compteur, "compteur aprés incrémentation");
});

btnBlue.addEventListener("click", () => {
  compteur = compteur + 1;
  console.log(compteur, "point cercle bleu");
});
