const postsContainer = document.querySelector('.posts');



const posts = [{
    titre : "SEO, Les bonnes pratiques",
    hashtag : "#SEO",
    extrait : "efzjfzopfjzoefjzefjzf"
},
{
    titre : "Bien débuter en réferencement payant",
    hashtag : "#réferencement",
    extrait : "zhfzoifgzophgpozhgpzohgpzohgpozhgopz",
},
{
    titre : "Content marketing, les bons arguments",
    hashtag : "#contentmarketing",
    extrait : "fzezzgzjhryjrtjtrjktktk"
}]

posts.forEach(item =>{
    //création d'une DIV avec Template String

const article = `
                <div class="post">
                    <div class="post-titre">${item.titre}</div>
                    <div class="post-extrait">${item.extrait}</div>
                    <div class="post-hashtag">${item.hashtag}</div>
                </div>
 `
 
 postsContainer.innerHTML += article;


    
})

//Ajout de l'article dans la DIV dédié postsContainer




