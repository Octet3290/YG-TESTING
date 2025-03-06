AOS.init({
  offset: 120,
  delay: 0,
  duration: 900,
  easing: 'ease',
  once: false,
  mirror: false,
  anchorPlacement: 'top-bottom',
});

window.addEventListener("load", () => {
  AOS.refresh();
});



const nav = document.querySelector(".navigation");
const root = document.documentElement;

const endTransition = () => {
  const loader = document.querySelector(".loader");
  if (loader) {
  loader.addEventListener("transitionend", () => {
    loader.style.transform = "translateX(100%)";
    root.classList.remove("disable-hover");
  });
  loader.style.transform = "";
} else {
  console.error("Loader not found!");
}
};

function startTransition() {
  const preloader = document.getElementById("preloader");
  if (!preloader) {
    console.error("Preloader not found! Ensure it exists in the DOM.");
  } 
}
;

window.addEventListener("load", () => {
  startTransition();
});





