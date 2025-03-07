document
  .getElementById("contactForm")
  .addEventListener("submit", async function (e) {
    e.preventDefault();

    const formData = {
      firstName: document.getElementById("firstname").value,
      lastName: document.getElementById("lastname").value,
      email: document.getElementById("email").value,
      phone: document.getElementById("number").value,
      message: document.getElementById("message").value,
    };

    try {
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbzuzKwhPdDez78BYPJzFOmVsPvBQg8-GuE6ZkS8wxzRutOSsJM2S52Q-SCLWB7fckcgvA/exec",
        {
          //    const response= await fetch("https://script.google.com/macros/s/AKfycbwZ_bO3wXcIqYZLGLiLdJnF_LGRd5I9Fq4t7UHMNPOKfpd4yV4STP1ApSVP8GhBHEtuyw/exec",{
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
          mode: "no-cors",
        }
      );

      // if (response.status === 200) {
      //   alert("form submitted successfully");
      // } else {
      //   alert("Error submitting the form");
      // }

      const successMessage=document.getElementById("successMessage")
      successMessage.style.display = "block";
      setTimeout(() => {
        successMessage.style.display = "none";
    }, 2000)


      document.getElementById("contactForm").reset();



    } catch (error) {
      console.log("Fetch error:", error);
      alert("Network error. Please try again later.");
    }
  });



