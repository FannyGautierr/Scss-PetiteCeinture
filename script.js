'use strict'

let menuBurgerIcone=document.querySelector(".burger-menu");
let menuBurger=document.querySelector(".menu")
let nav=document.querySelector("nav");


menuBurgerIcone.addEventListener("click",() => {
    nav.classList.toggle("transition-menu")
    menuBurger.classList.toggle("menu-responsive")
    document.querySelector(".une").classList.toggle("barre-une")
    document.querySelector(".deux").classList.toggle("barre-deux")
    document.querySelector(".trois").classList.toggle("barre-trois")
   
})


