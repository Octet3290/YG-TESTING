

AOS.init({

  offset: 120, //in px
  delay: 0, 
  duration: 900, 
  easing: 'ease', 
  once: false, 
  mirror: false, 
  anchorPlacement: 'top-bottom', 

});


const nav = document.querySelector(".navigation");
const root=document.documentElement;

const endTransition = () => {
const loader = document.querySelector(".loader");
loader.addEventListener("transitionend", () => {
  loader.style.transform = "translateX(100%)";
  root.classList.remove("disable-hover");
});
loader.style.transform = "";
};

const startTransition = () => {
const loader = document.querySelector(".loader");
const navv = document.querySelector(".navbar");
loader.style.transform = "translateX(100%)";

};

window.addEventListener("load", () => {
startTransition();
});





