const peopleSectionContainer = document.querySelector(".people-section-container");

fetch("../data/newsRoom.json")
    .then(response => response.json())
    .then(data => {
        renderSlides(data);
        startSlideshows();
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

function renderSlides(slidesData) {
    slidesData.forEach(slide => {
        const slideContent = `
            <div class="people-section-cont">
                <div class="director">
                    <div class="slideshow">
                        ${renderImages(slide.images)}
                    </div>
                    <div class="details">
                        <div class="name">${slide.title}</div>
                        <div class="about">${slide.about}</div>
                    </div>
                </div>
            </div>
        `;
        peopleSectionContainer.innerHTML += slideContent;
    });

    // 🔥 Tell popup script images are now ready
    document.dispatchEvent(new Event("imagesLoaded"));
}

function renderImages(images) {
    return images.map(image => `
        <div class="slideshow-slide">
            <img src="${image}" class="news-enlarge-img" alt="">
        </div>`).join('');
}

function startSlideshows() {
    const slideshows = document.querySelectorAll('.slideshow');
    slideshows.forEach(slideshow => {
        let currentIndex = 0;
        const slides = slideshow.querySelectorAll('.slideshow-slide');

        // Show first image initially
        slides.forEach(slide => slide.style.display = 'none');
        if (slides.length > 0) slides[0].style.display = 'block';

        setInterval(() => {
            currentIndex = (currentIndex + 1) % slides.length;
            slides.forEach(slide => slide.style.display = 'none');
            slides[currentIndex].style.display = 'block';
        }, 2500);
    });
}
