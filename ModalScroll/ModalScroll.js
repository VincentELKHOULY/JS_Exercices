const modal = document.querySelector('.modal-container');
const btn = document.querySelector('.btn-success')
const code = document.querySelector('.code');
const cross = document.querySelector('.cross-del');

window.addEventListener('scroll', displayModal)

 function displayModal(){
    let hauteur = document.documentElement.scrollTop;

    if(hauteur > 400) {
        modal.style.display = "flex";
    }
}

btn.addEventListener('click', function(){
    code.style.display = "block"
    btn.style.display = "none";
})

cross.addEventListener('click', function() {
    modal.style.display = "none"
    window.removeEventListener('scroll', displayModal)
})