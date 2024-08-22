document.addEventListener("DOMContentLoaded", function() {
    const message = "Welcome to my Portfolio";
    const heroText = "My name is Carlos Rodriguez and I'm a junior developer.";
    const speed = 65;
    let count = 0;

    // Function for the typewriter effect
    function typeWriter() {
        const titleElement = document.getElementById("title");
        const heroTextElement = document.getElementsByClassName("hero-text")[0];

        if (count < message.length || count < heroText.length) {
            if (count < message.length) {
                titleElement.innerHTML += message.charAt(count);
            }
            if (count < heroText.length) {
                heroTextElement.innerHTML += heroText.charAt(count);
            }
            count++;
            setTimeout(typeWriter, speed);
        }
    }

    // Initialize the typewriter effect on window load
    window.onload = function() {
        document.getElementById("title").innerHTML = "";
        document.getElementsByClassName("hero-text")[0].innerHTML = "";
        typeWriter(); // Start the typewriter effect
    };

    // Burger menu functionality
    const burgerMenu = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", function() {
        navLinks.classList.toggle("active");
    });
});
