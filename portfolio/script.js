const hamburger= document.getElementById('hamburger');
const navul= document.getElementById('navul');

hamburger.addEventListener('click',()=>{
    navul.classList.toggle('show');
})