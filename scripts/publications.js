var yearArray = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
var overAllDomains = ["Healthcare", "UAV", "AV", "Blockchain", "Networks"]
const yearContainer = document.querySelector(".year-container")
let publications = []
let activeYear = "2023"
// import publications from "../data/publications.json" assert { type: "json" }
fetch("../data/publications.json")
    .then(response => response.json())
    .then(data => {
        publications=data
        renderPublication()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
let currentYear = null
const publicationsContainer = document.querySelector(".publications-container")
function renderPublication() {
    var child = publicationsContainer.lastElementChild
    while (child) {
        publicationsContainer.removeChild(child);
        child = publicationsContainer.lastElementChild;
    }
    publications.forEach(publication => {
        let minValue = document.querySelector(".input-min").value
        let maxValue = document.querySelector(".input-max").value
        let selectedDomain = document.querySelector(".mySelect").value
        let boolean = 0
        if(selectedDomain=== "all" || publication.domain.indexOf(selectedDomain) !== -1)
            boolean = 1
        if(publication.year >= minValue && publication.year <= maxValue && (boolean === 1)) {
            if(publication.year !== currentYear) {
                currentYear = publication.year
                let year = document.createElement("h1")
                year.innerHTML =    `<div class="year-change">
                                        <h5>${publication.year}</h5>
                                    </div>`
                publicationsContainer.appendChild(year)
            }
            let parentDiv = document.createElement("div")
            parentDiv.classList.add("publication")
            let titleDiv = document.createElement("a")
            titleDiv.classList.add("title")
            titleDiv.href = publication.doi
            titleDiv.innerText = publication.title
            let authorDiv = document.createElement("div")
            authorDiv.classList.add("author")
            let authorText = document.createTextNode(publication.author)
            authorDiv.appendChild(authorText)
            let detailsDiv = document.createElement("div")
            detailsDiv.classList.add("details")
            let confDiv = document.createElement("div")
            confDiv.classList.add("doi")
            let confText = document.createTextNode(publication.conference)
            confDiv.appendChild(confText)
            let doiDiv = document.createElement("a")
            // confDiv.appendChild(doiDiv)
            doiDiv.classList.add("doi-a")
            doiDiv.href = publication.doi
            doiDiv.target = "_blank"
            doiDiv.innerHTML = publication.doi
            // doiDiv.appendChild(doiText)
            let impactScoreDiv = document.createElement("div")
            impactScoreDiv.classList.add("impact-score")
            let impactScoreText = document.createTextNode(publication.year)
            impactScoreDiv.appendChild(impactScoreText)
            parentDiv.appendChild(titleDiv)
            parentDiv.appendChild(authorDiv)
            detailsDiv.appendChild(confDiv)
            // detailsDiv.appendChild(doiDiv)
            parentDiv.appendChild(detailsDiv)
            publicationsContainer.appendChild(parentDiv)
        }
    })
}
// let dispYear = document.querySelector(".year")
// dispYear.innerHTML = activeYear

const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");
let priceGap = 1;

priceInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);
        
        if((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max){
            if(e.target.className === "input-min"){
                rangeInput[0].value = minPrice;
                range.style.left = ((minPrice / rangeInput[0].max) * 100) + "%";
            }else{
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
        }
    });
});

rangeInput.forEach(input =>{
    input.addEventListener("input", e =>{
        let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);

        if((maxVal - minVal) < priceGap){
            if(e.target.className === "range-min"){
                rangeInput[0].value = maxVal - priceGap
            }else{
                rangeInput[1].value = minVal + priceGap;
            }
        }else{
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = ((minVal / rangeInput[0].max) * 100) + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        renderPublication()
    });
});

let domains = document.querySelector(".mySelect")
domains.addEventListener("change", () => {
    renderPublication()
})