let mahad = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        console.log(e.target)
        mahad = mahad + e.target.innerHTML;
document.querySelector('input').value = mahad;
    })
})
