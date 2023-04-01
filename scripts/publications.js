var yearArray = ["2016", "2017", "2018", "2019", "2020", "2021", "2022"];
const yearContainer = document.querySelector(".year-container")
let activeYear = "2022"
const publications = [
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "4.88",
        year: "2022"
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "3.88",
        year: "2022"
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "2.88",
        year: "2020"
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "1.88",
        year: "2019"
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "5.88",
        year: "2018"
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking.DOI 10.1109/TGCN 2022.3163764",
        impactScore: "6.88",
        year: "2017"
    },
]
yearArray.forEach(year => {
    const btn = document.createElement("button")
    const yearTxt = document.createTextNode(year);
    btn.appendChild(yearTxt);
    btn.classList.add("year-btn")
    yearContainer.appendChild(btn)
})
const btnArray = document.querySelectorAll(".year-btn")
const publicationsContainer = document.querySelector(".publications-container")
btnArray.forEach(btn => {
    btn.addEventListener("click", (e) => {
        if(e.target.innerHTML) {
            activeYear = e.target.innerHTML
        }
        dispYear.innerHTML = activeYear
        var child = publicationsContainer.lastElementChild
        while (child) {
            publicationsContainer.removeChild(child);
            child = publicationsContainer.lastElementChild;
        }
        publications.forEach(publication => {
            if(publication.year === activeYear) {
                let parentDiv = document.createElement("div")
                parentDiv.classList.add("publication")
                let titleDiv = document.createElement("div")
                titleDiv.classList.add("title")
                let titleText = document.createTextNode(publication.title)
                titleDiv.appendChild(titleText)
                let authorDiv = document.createElement("div")
                authorDiv.classList.add("author")
                let authorText = document.createTextNode(publication.author)
                authorDiv.appendChild(authorText)
                let doiDiv = document.createElement("div")
                doiDiv.classList.add("doi")
                let doiText = document.createTextNode(publication.doi)
                doiDiv.appendChild(doiText)
                let impactScoreDiv = document.createElement("div")
                impactScoreDiv.classList.add("impact-score")
                let impactScoreText = document.createTextNode(publication.impactScore)
                impactScoreDiv.appendChild(impactScoreText)
                parentDiv.appendChild(titleDiv)
                parentDiv.appendChild(authorDiv)
                parentDiv.appendChild(doiDiv)
                parentDiv.appendChild(impactScoreDiv)
                publicationsContainer.appendChild(parentDiv)
            }
        })
    })
})
publications.forEach(publication => {
    if(publication.year === activeYear) {
        let parentDiv = document.createElement("div")
        parentDiv.classList.add("publication")
        let titleDiv = document.createElement("div")
        titleDiv.classList.add("title")
        let titleText = document.createTextNode(publication.title)
        titleDiv.appendChild(titleText)
        let authorDiv = document.createElement("div")
        authorDiv.classList.add("author")
        let authorText = document.createTextNode(publication.author)
        authorDiv.appendChild(authorText)
        let doiDiv = document.createElement("div")
        doiDiv.classList.add("doi")
        let doiText = document.createTextNode(publication.doi)
        doiDiv.appendChild(doiText)
        let impactScoreDiv = document.createElement("div")
        impactScoreDiv.classList.add("impact-score")
        let impactScoreText = document.createTextNode(publication.impactScore)
        impactScoreDiv.appendChild(impactScoreText)
        parentDiv.appendChild(titleDiv)
        parentDiv.appendChild(authorDiv)
        parentDiv.appendChild(doiDiv)
        parentDiv.appendChild(impactScoreDiv)
        publicationsContainer.appendChild(parentDiv)
    }
})
let dispYear = document.querySelector(".year")
dispYear.innerHTML = activeYear