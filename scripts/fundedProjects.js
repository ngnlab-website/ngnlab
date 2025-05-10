const fundedProjectsSectionContainer = document.querySelector(".funded-projects-section-container")
const patentsSectionContainer = document.querySelector(".funded-projects-section-container2")
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
let patents = []
fetch("../data/patents.json")
    .then(response => response.json())
    .then(data => {
        patents=data
        renderPatents()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
function renderPatents() {
    patents.forEach(patent => {
        let pat =   `
                        <div class="funded-project"> 
                            <div class="description">${patent.title}</div>
                            <div class="other-details">
                                <!--<span class="funding-agency">Status: ${patent.status}</span> <br>-->
                                <span class="funding-agency" style="color: maroon;">Inventors:</span>
                                <span class="funding-agency">${patent.inventors}</span><br>
                                <span class="funding-agency" style="color: maroon;">${patent.status}: </span>
                                <span class="funding-agency">${patent.year}</span><br>
                            </div>
                        </div>
                    `
        patentsSectionContainer.innerHTML += pat
    })
}
