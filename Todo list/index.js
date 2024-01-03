const form = document.getElementById('form');
const listItems = document.querySelector('.list-items')
const todo = document.getElementById('todo')

form.addEventListener('submit', (e)=>{
    e.preventDefault();
   const todoValue = todo.value;
   let item =`
   <div class="item">
   <p>${todoValue}</p>
   <button class="btn-delete">
     <i class="fas fa-trash-alt"></i>
   </button>
   <button class="btn-archive">
     <i class="fas fa-check-circle"></i>
   </button>
   </div>
   `
   listItems.innerHTML += item
   const btnDelete = document.querySelectorAll('.btn-delete');
   const btnArchive = document.querySelectorAll('.btn-archive');
   console.log(btnArchive);
   btnDelete.forEach(i => {
    i.addEventListener('click', ()=>{
        i.parentElement.remove()
    })
   })

   btnArchive.forEach(i => {
    i.addEventListener('click', () => {
        const parent = i.parentElement
        parent.classList.toggle('done')
    })
   })
   
   form.reset()
})


