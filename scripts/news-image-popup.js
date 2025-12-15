let currentImages = [];
let currentIndex = 0;

function attachModalEvents() {
    const modal = document.getElementById("imgModal");
    const modalImg = document.getElementById("modalImg");
    const closeBtn = document.querySelector(".img-modal .close");
    const nextBtn = document.getElementById("nextBtn");
    const prevBtn = document.getElementById("prevBtn");
    const dotsContainer = document.getElementById("dotsContainer");

    if (!modal || !modalImg) return;

    const images = document.querySelectorAll(".news-enlarge-img");

    images.forEach(img => {
        img.style.cursor = "pointer";

        img.addEventListener("click", () => {
            const slides = [...img.closest(".slideshow")
                .querySelectorAll(".news-enlarge-img")];

            currentImages = slides.map(s => s.src);
            currentIndex = slides.indexOf(img);

            showImage();
            createDots();

            modal.style.display = "flex";
            document.body.classList.add("modal-open");

            const showNav = currentImages.length > 1;
            prevBtn.style.display = showNav ? "block" : "none";
            nextBtn.style.display = showNav ? "block" : "none";
            dotsContainer.style.display = showNav ? "flex" : "none";
        });
    });

    function showImage() {
        modalImg.src = currentImages[currentIndex];
        updateDots();
    }

    function closeModal() {
        modal.style.display = "none";
        document.body.classList.remove("modal-open");
    }

    // Close actions
    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", (e) => {
        if (e.target === modal) closeModal();
    });

    modalImg.addEventListener("click", closeModal);

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") closeModal();
    });

    // Navigation
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

    // Dots logic
    function createDots() {
        dotsContainer.innerHTML = "";

        currentImages.forEach((_, index) => {
            const dot = document.createElement("span");
            dot.className = "dot";
            dot.addEventListener("click", (e) => {
                e.stopPropagation();
                currentIndex = index;
                showImage();
            });
            dotsContainer.appendChild(dot);
        });

        updateDots();
    }

    function updateDots() {
        const dots = dotsContainer.querySelectorAll(".dot");
        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i === currentIndex);
        });
    }
}

document.addEventListener("imagesLoaded", attachModalEvents);
