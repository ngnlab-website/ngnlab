const fundedProjectsSectionContainer = document.querySelector(".funded-projects-section-container")
// import fundedProjects from "../data/fundedProjects.json" assert { type: "json" }
let downloads = []
fetch("../data/downloads.json")
    .then(response => response.json())
    .then(data => {
        downloads=data
        renderDownloads()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
function renderDownloads() {
    downloads.forEach(download => {
        let proj =  `
                        <div class="funded-project"> 
                            <div class="description"><a href="${download.link}">${download.title}</a></div>
                        </div>
                    `
        fundedProjectsSectionContainer.innerHTML += proj
    })
}

