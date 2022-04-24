//This file is meant to help the side menu function while on mobile devices
document.addEventListener("DOMContentLoaded", function (event) {
    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("active");
    })

    document.querySelectorAll(".nav-links").forEach(n => n.addEventListener("click", () =>{
        hamburger.classList.remove("active");
        navLinks.classList.remove("active");
    }))
});
