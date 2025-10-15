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

// Image Popup (Modal) Functionality
const popup = document.getElementById("image-popup");
const popupImg = document.getElementById("popup-img-src");
const popupText = document.getElementById("popup-text");
const closeBtn = document.querySelector(".close-btn");
const images = document.querySelectorAll(".popup-img");

images.forEach(img => {
    img.addEventListener("click", () => {
        popup.classList.add("active");
        popupImg.src = img.src;
        popupText.textContent = img.dataset.details || "No details available.";
    });
});

// Function to close the popup
const closePopup = () => {
    popup.classList.remove("active");
};

closeBtn.addEventListener("click", closePopup);
popup.addEventListener("click", (e) => {
    // Close only if the dark overlay is clicked, not the content inside
    if (e.target === popup) {
        closePopup();
    }
});
