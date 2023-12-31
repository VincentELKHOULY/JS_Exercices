const btn = document.querySelector('.btn');

const ctn = document.querySelector('.container-notifications');

btn.addEventListener('click', ()=> {
    const notifications = document.createElement('div')
    notifications.classList.add('toast')
    notifications.innerText = "Votre fichier est enregistré !"
    console.log(notifications);
   ctn.appendChild(notifications)

   setTimeout(function(){
    notifications.remove()
   },2000)
})
