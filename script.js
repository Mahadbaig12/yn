let mahad = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (e)=>{
        if(e.target.innerHTML == '='){
            mahad = eval(mahad);
            document.querySelector('input').value = mahad;
        }
        else if(e.target.innerHTML == 'c'){
            mahad = "";
            document.querySelector('input').value = mahad;
        }
       else {
        console.log(e.target)
        mahad = mahad + e.target.innerHTML;
document.querySelector('input').value = mahad;
}
    })
})
