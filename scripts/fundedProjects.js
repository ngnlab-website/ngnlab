const fundedProjectsSectionContainer = document.querySelector(".funded-projects-section-container")
// import fundedProjects from "../data/fundedProjects.json" assert { type: "json" }
let fundedProjects = []
fetch("../data/fundedProjects.json")
    .then(response => response.json())
    .then(data => {
        fundedProjects=data
        renderProjects()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
function renderProjects() {
    fundedProjects.forEach(fundedProject => {
        let proj =  `
                        <div class="funded-project"> 
                            <div class="description">${fundedProject.title}</div>
                            <div class="other-details">
                                <span class="funding-agency">${fundedProject.agency}</span>
                            </div>
                        </div>
                    `
        fundedProjectsSectionContainer.innerHTML += proj
    })
}