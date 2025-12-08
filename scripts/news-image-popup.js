let currentImages = [];
let currentIndex = 0;

function attachModalEvents() {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".img-modal .close");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");

    if (!modal || !modalImg) return;

    const images = document.querySelectorAll(".news-enlarge-img");

    images.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            const slides = [...img.closest(".slideshow").querySelectorAll(".news-enlarge-img")];

            currentImages = slides.map(s => s.src);
            currentIndex = slides.indexOf(img);

            showImage();
            modal.style.display = "flex";
            document.body.classList.add("modal-open");

            // 👉 Show navigation buttons only if there are multiple images
            const showNav = currentImages.length > 1;
            prevBtn.style.display = showNav ? "block" : "none";
            nextBtn.style.display = showNav ? "block" : "none";
        });
    });

    function showImage() {
        modalImg.src = currentImages[currentIndex];
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    // Close options
    closeBtn.addEventListener("click", closeModal);
    modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
    modalImg.addEventListener("click", closeModal);
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Navigation buttons
    nextBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex + 1) % currentImages.length;
        showImage();
    });

    prevBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
        showImage();
    });
}

document.addEventListener("imagesLoaded", attachModalEvents);
