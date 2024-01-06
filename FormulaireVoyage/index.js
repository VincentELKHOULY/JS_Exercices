// Le formulaire
const form = document.getElementById("form");

// Les champs - imput text et input date

const pays = document.getElementById("pays");
const start = document.getElementById("start");
const end = document.getElementById("end");
const listResultats = document.querySelector(".liste-resultats");

const voyages = [
  {
    pays: "bora-bora",
    prix: 1780,
    voyageurs: 4,
  },
  {
    pays: "maldives",
    prix: 1300,
    voyageurs: 3,
  },
  {
    pays: "tahiti",
    prix: 2300,
    voyageurs: 4,
  },
];

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const choix = {
    pays: pays.value,
    start: start.value,
    end: end.value,
  };

  // Je transforme l'objet en chaine de caractère

  const choixString = JSON.stringify(choix);

  localStorage.setItem("details", choixString);
  // On rafrachie la page pour faire apparaitre les infos
  window.location.href = window.location.href;
});

function displayDetails() {
  const choixObjet = JSON.parse(localStorage.getItem("details"));

  //pré-remplir les champs

  pays.value = choixObjet.pays;
  start.value = choixObjet.start;
  end.value = choixObjet.end;

  const resultats = voyages.filter((voyage) => voyage.pays === pays.value);
  resultats.forEach((resultat) => {
    console.log(resultat, "resultat");
    // Je créer une div avec les valeurs a l'interieur
    const itemResultat = `<div class="item">
  <p class="item-pays">${resultat.pays}</p>
  <p>Offre pour ${resultat.voyageurs} personnes</p>
  <p>prix vol inclus ${resultat.prix}</p>
  <button>Go !</button>
 </div>
 `;
    listResultats.innerHTML += itemResultat;
  });
}

displayDetails();
