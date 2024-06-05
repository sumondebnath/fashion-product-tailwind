
const toggler = document.getElementById("togle");
const menus = document.getElementById("menu");

toggler.addEventListener("click", ()=>{
    menus.classList.toggle("block");
});