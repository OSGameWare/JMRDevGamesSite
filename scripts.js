// Function to reveal sections on scroll
function reveal() {
    const sections = document.querySelectorAll(".section");
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (sectionTop < windowHeight - 100) {
            section.classList.add("visible");
        } else {
            section.classList.remove("visible");
        }
    });
}

// Listen for scroll events
window.addEventListener("scroll", reveal);

// Initialize particles.js
particlesJS("particles-js", {
    particles: {
        number: {
            value: 100, // Increase particle count
            density: {
                enable: true,
                value_area: 800
            }
        },
        color: {
            value: "#ffffff" // Particle color
        },
        shape: {
            type: "circle", // Shape type
            stroke: {
                width: 0,
                color: "#000000"
            },
            polygon: {
                nb_sides: 5
            },
            image: {
                src: "img/github.svg",
                width: 100,
                height: 100
            }
        },
        opacity: {
            value: 0.5,
            random: true, // Random opacity for a more dynamic look
            anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
            }
        },
        size: {
            value: 5, // Size of the particles
            random: true, // Randomize particle sizes
            anim: {
                enable: false,
                speed: 40,
                size_min: 0.1,
                sync: false
            }
        },
        move: {
            enable: true,
            speed: 1, // Slower movement for a gentle effect
            direction: "none",
            random: true,
            straight: false,
            out_mode: "out",
            bounce: false,
            attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
            }
        }
    },
    interactivity: {
        detect_on: "canvas",
        events: {
            onhover: {
                enable: false, // Disable interactions on hover
            },
            onclick: {
                enable: false, // Disable interactions on click
            },
            resize: true
        }
    },
    retina_detect: true
});

// Initialize particles on load
document.addEventListener("DOMContentLoaded", function() {
    reveal(); // Call reveal on load to set initial visibility
});
