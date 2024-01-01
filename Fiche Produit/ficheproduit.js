const vignettes = document.querySelectorAll('.small');
const fullImg = document.getElementById('full');
const btn = document.querySelector('.btn-add');
const panierContainer = document.querySelector('.panier-container')

let panier = 0;

vignettes.forEach((item)=>{
    item.addEventListener('click', function(){
        let imgSource = item.getAttribute('src')
        fullImg.setAttribute('src', imgSource);
    })
})

btn.addEventListener('click', ()=>{
   panier = panier+1;
   if(panier < 2) {
    panierContainer.innerText = "vous avez" + " " + panier + " " + "Produit dans votre panier"
   }else {
    panierContainer.innerText = "vous avez" + " " + panier + " " + "Produits dans votre panier"
   }
   
   
})

