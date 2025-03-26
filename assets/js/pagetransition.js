window.addEventListener("load", function () {
    const preloader = document.getElementById("preloader");
    const content = document.querySelector(".content");

    if (!preloader) {
        console.error("Preloader not found! Check if it's in the HTML.");
        return;
    }

    console.log("Preloader loaded. Waiting for full content to load...");

    // Wait until the page fully loads before removing the preloader
    setTimeout(() => {
        preloader.classList.add("fade-out");
        setTimeout(() => {
            preloader.style.display = "none";
            if (content) content.style.display = "block"; // Show content
            document.body.style.overflow = "auto"; // Enable scrolling
            console.log("Preloader removed, content displayed.");
        }, 800); // Wait for fade-out animation
    }, 1800); // Minimal delay to ensure everything is fully loaded
});