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

    // Clear the title and hero text, then start the typewriter effect
    document.getElementById("title").innerHTML = "";
    document.getElementsByClassName("hero-text")[0].innerHTML = "";
    typeWriter(); // Start the typewriter effect

    // Burger menu functionality
    const burgerMenu = document.getElementById("burger");
    const navLinks = document.getElementById("nav-links");

    burgerMenu.addEventListener("click", function(event) {
        navLinks.classList.toggle("active");
        event.stopPropagation();
    });

    // Hide menu if clicking outside of it
    function hideMenu(event) {
        if (!navLinks.contains(event.target) && !burgerMenu.contains(event.target)) {
            navLinks.classList.remove("active");
        }
    }

    // Loop through the array of events and evaluate hideMenu function
    ["click", "touchstart"].forEach(eventType => {
        document.addEventListener(eventType, hideMenu);
    });

    // Scroll-to-reveal functionality for project boxes
    const projectBoxes = document.querySelectorAll('.project-box');

    // Check if the device is a touchscreen
    const isTouchScreen = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

    if (isTouchScreen) {
        const observerOptions = {
            root: null, // The viewport
            rootMargin: '-35% 0% -12% 0%', // what area of the screen is going to activate the observer, under 35 top and over 12 bottom
            threshold: .5 //what portion of the element must be in this area to trigger the observer
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.querySelector('.overlay').classList.add('show-overlay');
                } else {
                    entry.target.querySelector('.overlay').classList.remove('show-overlay');
                }
            });
        }, observerOptions);

        projectBoxes.forEach(box => {
            observer.observe(box);
        });
    } else {
        // For non-touchscreen devices, just use the hover functionality
        projectBoxes.forEach(box => {
            const overlay = box.querySelector('.overlay');
            box.addEventListener('mouseenter', () => {
                overlay.classList.add('show-overlay');
            });
            box.addEventListener('mouseleave', () => {
                overlay.classList.remove('show-overlay');
            });
        });
    }
});
