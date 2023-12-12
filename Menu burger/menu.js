/*selectioner et stocker*/
const icone = document.querySelector('.navbar-mobile i');
console.log(icone);
const modal = document.querySelector('.modal');
console.log(modal);

/*Soumettre à une action*/

icone.addEventListener('click', function(){
    modal.classList.toggle('change-modal');
    icone.classList.toggle('fa-times')

})
