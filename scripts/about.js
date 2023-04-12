let countries = document.querySelector(".mySelect")
countries.addEventListener("change", () => {
    renderCollaborators()
})
let collaboratorsContainer = document.querySelector(".collaborators-list-container")
let countryList = [
    {
        country: "USA",
        flag: "../assets/img/flags/USA.png",
        collaborators: [
            "University of California Davis, USA",
            "Columbia University, New York, USA",
            "University of Mary Washington, Virginia, USA",
            "Rutgers University, New Jersey, USA",
            "University of South Florida, USA"
        ]
    },
    {
        country: "UK",
        flag: "../assets/img/flags/UK.png",
        collaborators: [
            "Manchester Metropolitan University, UK",
            "Brunel University, London, UK"
        ]
    },
    {
        country: "Singapore",
        flag: "../assets/img/flags/Singapore.png",
        collaborators: [
            "NUS, Singapore",
            "NTU, Singapore"
        ]
    },
    {
        country: "Others",
        flag: "../assets/img/flags/others.png",
        collaborators: [
            "Munster Technological University, Ireland",
            "Emst-Abbe University Jena, Germany",
            "Universitrio de Santiago, Portugal",
            "Qatar University, Qatar",
            "Universiti Teknoloni PETRONAS Malaysia"
        ]
    },
]
renderCollaborators = () => {
    var child = collaboratorsContainer.lastElementChild
    while (child) {
        collaboratorsContainer.removeChild(child);
        child = collaboratorsContainer.lastElementChild;
    }
    countryList.forEach(country => {
        let selectedCountry = countries.value
        console.log(selectedCountry)
        if(selectedCountry === null)
            selectedCountry = "USA"
        if(selectedCountry === country.country) {
            let imageDiv = document.createElement("div")
            imageDiv.className = "flag-image"
            let flagImage = document.createElement("img")
            flagImage.src = country.flag
            imageDiv.appendChild(flagImage)
        
            let listContainer = document.createElement("div")
            listContainer.className = "list-container"
            let list = document.createElement("ul")
            listContainer.appendChild(list)
            country.collaborators.forEach(collaborator => {
                let collab = document.createElement("li")
                let textNode = document.createTextNode(collaborator)
                collab.appendChild(textNode)
                list.appendChild(collab)
            })
            collaboratorsContainer.appendChild(imageDiv)
            collaboratorsContainer.appendChild(listContainer)
        }
    })
}
renderCollaborators()