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

    const observerOptions = {
        threshold: 0.1 // Trigger when 10% of the element is in view
    };

    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed'); // Add the reveal class
                observer.unobserve(entry.target); // Stop observing once revealed
            }
        });
    };

    let observer;

    function initializeObserver() {
        // Only initialize for screens within the medium and small breakpoints
        if (window.innerWidth <= 1024) {
            observer = new IntersectionObserver(observerCallback, observerOptions);
            projectBoxes.forEach(box => observer.observe(box));
        } else {
            // If the observer is already active on a larger screen, disconnect it
            if (observer) {
                observer.disconnect();
            }
            projectBoxes.forEach(box => box.classList.remove('revealed'));
        }
    }

    // Initialize the observer based on the current screen size
    initializeObserver();

    // Recheck on window resize
    window.addEventListener('resize', initializeObserver);
});
