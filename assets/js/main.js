

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


// let lastScrollY = window.scrollY;
// const navbar = document.getElementById("navbar");

// window.addEventListener("scroll", () => {
//     let currentScrollY = window.scrollY;

//     if (currentScrollY > lastScrollY && currentScrollY > 50) {
//         // Scrolling Down → Hide Navbar
//         navbar.style.transform = "translateY(-100%)";
//     } else if (currentScrollY < lastScrollY) {
//         // Scrolling Up → Show Navbar
//         navbar.style.transform = "translateY(0)";

//         // If the user is far from the top, bring them back to the top
//         if (currentScrollY > window.innerHeight) {
//             window.scrollTo({ top: 0, behavior: "smooth" });
//         }
//     }

//     lastScrollY = currentScrollY;
// });


