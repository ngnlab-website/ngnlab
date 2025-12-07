document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        const modal = document.getElementById("imgModal");
        const modalImg = document.getElementById("newsModalImg");
        const closeBtn = document.querySelector(".img-modal .close");
        const enlargeImages = document.querySelectorAll(".slideshow-slide img");

        enlargeImages.forEach(img => {
            img.style.cursor = "pointer";
            img.addEventListener("click", () => {
                if (modal.style.display === "block") {
                    modal.style.display = "none";
                } else {
                    modal.style.display = "block";
                    modalImg.src = img.src;
                }
            });
        });

        closeBtn.addEventListener("click", () => {
            modal.style.display = "none";
        });

        modalImg.addEventListener("click", () => {
            modal.style.display = "none";
        });
    }, 800); 
});
