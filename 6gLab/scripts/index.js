document.addEventListener("DOMContentLoaded", () => {
    const readMoreBtn = document.getElementById("readMoreBtn");
    const moreContent = document.getElementById("more-content");

    if (readMoreBtn && moreContent) {
        readMoreBtn.addEventListener("click", () => {
            if (moreContent.style.display === "none" || moreContent.style.display === "") {
                moreContent.style.display = "block";
                readMoreBtn.innerText = "Read Less";
            } else {
                moreContent.style.display = "none";
                readMoreBtn.innerText = "Read More";
            }
        });
    }
});
