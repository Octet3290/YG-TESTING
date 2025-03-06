document.addEventListener("DOMContentLoaded", function () {
    const preloader = document.getElementById("preloader");
    const logo = document.getElementById("logo");

    if (!preloader) {
        console.error("Preloader not found! Check if it's in the HTML.");
    } else {
        preloader.innerHTML = "<div class='spinner'></div>";
        console.log("Preloader initialized with spinner.");
    }

    console.log("Preloader loaded. Starting animation...");

    // Start logo animation
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add("zoom-animation");
            console.log("Zoom-out animation applied.");
        } else {
            console.error("Preloader not found!");
        }
    }, 1000); // Adjust delay if needed
    

    // Hide preloader after animation
    setTimeout(() => {
        if (preloader) {
            preloader.classList.add("fade-out");
            setTimeout(() => {
                preloader.style.display = "none";
                console.log("Preloader removed.");
                document.body.style.overflow = "auto"; // Ensure scrolling works
            }, 800);
        }
    }, 2000);
});
