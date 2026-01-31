const consultancyProjectsSectionContainer = document.querySelector(
  ".consultancy-projects-section-container"
);

let consultancyProjects = [];

fetch("../data/consultancyProjects.json")
  .then((response) => response.json())
  .then((data) => {
    consultancyProjects = data;
    renderConsultancyProjects();
  })
  .catch((error) => {
    console.error("Error fetching consultancy projects JSON:", error);
  });

function renderConsultancyProjects() {
  consultancyProjects.forEach((project) => {
    const proj = `
      <div class="consultancy-project">
        <div class="description">${project.title}</div>
        <div class="other-details">
          <span class="funding-agency">${project.agency}</span>
        </div>
        <div class="year">${project.year}</div>
      </div>
    `;
    consultancyProjectsSectionContainer.innerHTML += proj;
  });
}
