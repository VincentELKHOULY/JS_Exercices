const questions = document.querySelectorAll(".questions");

questions.forEach((item)=>{
    
    //chaque élément du tableau est représenté par item
    //maintenant chaque éléments du tableau (item) est soumis a un évènement au clic

    item.addEventListener('click', ()=>{
        
        //Je selectionne et stock la DIVsuivante de l'item cliqué

        const nextDiv = item.nextElementSibling
        //on rend visible ou invisible la réponse grace a toggle
        nextDiv.classList.toggle('visible');
        icone = item.lastElementChild;
        
        icone.classList.toggle('fa-chevron-up')
    })
})

