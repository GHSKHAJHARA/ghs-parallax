document.addEventListener('DOMContentLoaded', () => {

    // Hamburger Menu Functionality
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");
    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        navMenu.classList.toggle("active");
    });
    document.querySelectorAll(".nav-menu a").forEach(link => 
        link.addEventListener("click", () => {
            hamburger.classList.remove("active");
            navMenu.classList.remove("active");
        })
    );

    // Premium Hero Slider (FIXED)
    const slides = document.querySelectorAll(".hero-slider .slide");
    if (slides.length > 0) {
        let currentSlide = 0;
        const slideInterval = 5000; // 5 seconds

        const nextSlide = () => {
            slides[currentSlide].classList.remove('active');
            currentSlide = (currentSlide + 1) % slides.length;
            slides[currentSlide].classList.add('active');
        };

        slides[0].classList.add('active'); // Show first slide immediately
        setInterval(nextSlide, slideInterval);
    }

    // Premium JS Parallax on Scroll (FIXED)
    const parallaxBg = document.querySelector('.parallax-bg');
    if (parallaxBg) {
        window.addEventListener('scroll', () => {
            const offset = window.pageYOffset;
            // This calculation keeps the image centered and moves it slower than scroll
            parallaxBg.style.transform = `translateY(${offset * 0.3 - (parallaxBg.offsetHeight / 5)}px)`;
        });
    }

    // Image Popup (Modal) Functionality
    const popup = document.getElementById("image-popup");
    const popupImg = document.getElementById("popup-img-src");
    const popupText = document.getElementById("popup-text");
    const closeBtn = document.querySelector(".close-btn");
    const images = document.querySelectorAll(".popup-img");

    images.forEach(img => {
        img.addEventListener("click", () => {
            if (popup) {
                popup.classList.add("active");
                popupImg.src = img.src;
                popupText.textContent = img.dataset.details || "No details available.";
            }
        });
    });

    const closePopup = () => {
        if (popup) {
            popup.classList.remove("active");
        }
    };

    if (popup) {
        closeBtn.addEventListener("click", closePopup);
        popup.addEventListener("click", (e) => {
            if (e.target === popup) {
                closePopup();
            }
        });
    }
});
