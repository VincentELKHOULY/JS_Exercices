const btnSucess = document.querySelector(".btn-success");
const coockies = document.querySelector(".coockies");

//Je stock la valeur localStorage

let valeurCle = localStorage.getItem("banniere");
console.log(valeurCle, "valeur de la clé");

function check() {
  if (valeurCle) {
    console.log("stockage existe");
    coockies.remove();
  } else {
    console.log("stockage existe pas");
  }
}

check();

btnSucess.addEventListener("click", () => {
  // Je cré le localStorage avec la valeur "oui"
  localStorage.setItem("banniere", "oui");
  coockies.style.opacity = 0;
});
