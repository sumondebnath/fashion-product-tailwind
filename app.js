


const toggler = document.getElementById("togle");
const menus = document.getElementById("menu");
const banner_text =document.getElementById("banner-text");

toggler.addEventListener("click", ()=>{
    menus.classList.toggle("hidden");
    banner_text.classList.toggle("hidden");

});


// const handleToggle = (event) =>{
//     event.preventDefault()
//     const menu = document.getElementById("menu");
//     console.log("hello");
//     menu.classList.toggle("block");
// };