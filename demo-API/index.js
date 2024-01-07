const item = document.querySelector(".banniere-titre");
console.log(item);
async function enAttente() {
  try {
    const reponseJSON = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    //code à éxecuter aprés réception de la réponse
    //conversion de la réponse au format JavaScript

    const reponseJS = await reponseJSON.json();
    item.innerHTML = `
<h1>${reponseJS.id} - ${reponseJS.title}</h1>
<p>Terminer : ${reponseJS.completed}</p>
`;
  } catch (error) {
    console.log(error, "erreur");
  }
}

enAttente();
