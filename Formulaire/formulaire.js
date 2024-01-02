const form = document.getElementById('formulaire');
const prenom = document.getElementById('prenom');
const nom = document.getElementById('nom');
const email = document.getElementById('email');
const message = document.getElementById('message');

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const prenomValue = prenom.value.trim();
    const nomValue = nom.value;
    const emailValue = email.value;
    const messageValue = message.value;
    const msgError = document.querySelectorAll('.error');
    const titre = document.getElementById('titre');

    msgError.forEach(error => {
        error.classList.add('invisible')
    })

    //verification des input

    if(prenomValue === ""){
        console.log('erreur')
    }else {
        console.log('succés');
    }
    if(prenomValue.length < 2 || prenomValue.length > 10){
        console.log('erreur prenom');
        prenom.nextElementSibling.classList.remove('invisible')
    }else if (nomValue.length < 3 || nomValue.length > 15){
        console.log('erreur nom');
        nom.nextElementSibling.classList.remove('invisible')
    }else if (messageValue.length < 10 || messageValue.length > 100){
        console.log('erreur message');
        message.nextElementSibling.classList.remove('invisible')
    }else {
        console.log('succés !');
        titre.innerText = "Message envoyé !"
        form.remove();
    }
   
    
})