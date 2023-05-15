const peopleSectionContainer = document.querySelector(".people-section-container")
import newsRoom from "../data/newsRoom.json" assert { type: "json" }
newsRoom.forEach((news, index) => {
    if(index%2 !== 0) {
        let newsContent =   `
                            <div class="people-section-cont">
                                <div class="director even">
                                    <div class="photo">
                                        <img src="${news.img}" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="name">${news.title}</div>
                                        <div class="about">${news.about}</div>
                                    </div>
                                </div>
                            </div>
                        `
        peopleSectionContainer.innerHTML += newsContent
    }
    else {
        let newsContent =   `
                            <div class="people-section-cont">
                                <div class="director">
                                    <div class="photo">
                                        <img src="${news.img}" alt="">
                                    </div>
                                    <div class="details">
                                        <div class="name">${news.title}</div>
                                        <div class="about">${news.about}</div>
                                    </div>
                                </div>
                            </div>
                        `
        peopleSectionContainer.innerHTML += newsContent
    }
})