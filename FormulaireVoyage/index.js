// Le formulaire
const form = document.getElementById("form");

// Les champs - imput text et input date

const pays = document.getElementById("pays");
const start = document.getElementById("start");
const end = document.getElementById("end");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const choix = {
    pays: pays.value,
    start: start.value,
    end: end.value,
  };
  console.log(choix, "choix");

  // Je transforme l'objet en chaine de caractère

  const choixString = JSON.stringify(choix);
  console.log(choixString);

  localStorage.setItem("details", choixString);
  // On rafrachie la page pour faire apparaitre les infos
  window.location.href = window.location.href;
});

function displayDetails() {
  console.log("fonction déclenchée");

  const choixObjet = JSON.parse(localStorage.getItem("details"));
  console.log(choixObjet, "choixObjet");

  //pré-remplir les champs

  pays.value = choixObjet.pays;
  start.value = choixObjet.start;
  end.value = choixObjet.end;
}

displayDetails();
