//je selectionne et je stocke
//icone contient le premier element I trouvé dans le code

const icone = document.querySelector('i');
const btnButton = document.querySelector('.btn');
console.log(btnButton);

//Je soumet l'icône à une action au clic


btnButton.addEventListener('click', function(){
    console.log('boutton cliqué');
    btnButton.classList.toggle('abonne')
    icone.classList.toggle('fa-smile-wink')
    icone.classList.toggle('happy')

    if(btnButton.innerText === "Abonné"){
        btnButton.innerText = "Abonnez-vous"
    }else{
        btnButton.innerText = "Abonné"
    }

})