let menu__btn = document.querySelector(".menu__btn");
let nav = document.querySelector(".nav");

menu__btn.addEventListener("click",()=>{
    nav.classList.toggle("open");
});
