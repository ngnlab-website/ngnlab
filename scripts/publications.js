// ===============================
// READ DOMAIN FROM URL (6G LAB)
// ===============================
const urlParams = new URLSearchParams(window.location.search);
const urlDomain = urlParams.get("domain"); // e.g. Networks

var yearArray = ["2024","2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
var overAllDomains = ["Healthcare", "UAV", "AV", "Blockchain", "Networks"];

const yearContainer = document.querySelector(".year-container");
let publications = [];
let activeYear = "2024";

fetch("../data/publications.json")
    .then(response => response.json())
    .then(data => {
        publications = data;

        const years = publications.map(pub => parseInt(pub.year));
        const minYear = Math.min(...years);
        const maxYear = Math.max(...years);

        const inputMin = document.querySelector(".input-min");
        const inputMax = document.querySelector(".input-max");

        inputMin.min = minYear;
        inputMin.value = minYear;
        inputMax.max = maxYear;
        inputMax.value = maxYear;

        rangeInput[0].min = minYear;
        rangeInput[0].value = minYear;
        rangeInput[1].max = maxYear;
        rangeInput[1].value = maxYear;

        // Auto-set domain dropdown if coming from 6G Lab
        if (urlDomain) {
            document.querySelector(".mySelect").value = urlDomain;
        }

        renderPublication();
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

let currentYear = null;
const publicationsContainer = document.querySelector(".publications-container");

function renderPublication() {
    publicationsContainer.innerHTML = "";
    currentYear = null;

    publications.forEach(publication => {
        let minValue = document.querySelector(".input-min").value;
        let maxValue = document.querySelector(".input-max").value;

        // 🔴 IMPORTANT CHANGE HERE
        let selectedDomain = urlDomain || document.querySelector(".mySelect").value;

        let domainMatch =
            selectedDomain === "all" ||
            publication.domain.indexOf(selectedDomain) !== -1;

        if (
            publication.year >= minValue &&
            publication.year <= maxValue &&
            domainMatch
        ) {
            if (publication.year !== currentYear) {
                currentYear = publication.year;

                let year = document.createElement("h1");
                year.innerHTML = `
                    <div class="year-change">
                        <h5>${publication.year}</h5>
                    </div>`;
                publicationsContainer.appendChild(year);
            }

            let parentDiv = document.createElement("div");
            parentDiv.classList.add("publication");

            let titleDiv = document.createElement("a");
            titleDiv.classList.add("title");
            titleDiv.href = publication.doi;
            titleDiv.target = "_blank";
            titleDiv.innerText = publication.title;

            let authorDiv = document.createElement("div");
            authorDiv.classList.add("author");
            authorDiv.innerText = publication.author;

            let detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");

            let confDiv = document.createElement("div");
            confDiv.classList.add("doi");
            confDiv.innerText = publication.conference;

            detailsDiv.appendChild(confDiv);

            parentDiv.appendChild(titleDiv);
            parentDiv.appendChild(authorDiv);
            parentDiv.appendChild(detailsDiv);

            publicationsContainer.appendChild(parentDiv);
        }
    });
}

// ===============================
// RANGE SLIDER
// ===============================
const rangeInput = document.querySelectorAll(".range-input input"),
priceInput = document.querySelectorAll(".price-input input"),
range = document.querySelector(".slider .progress");

let priceGap = 1;

priceInput.forEach(input => {
    input.addEventListener("input", e => {
        let minPrice = parseInt(priceInput[0].value);
        let maxPrice = parseInt(priceInput[1].value);

        if (maxPrice - minPrice >= priceGap) {
            if (e.target.classList.contains("input-min")) {
                rangeInput[0].value = minPrice;
                range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
            } else {
                rangeInput[1].value = maxPrice;
                range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
            }
            renderPublication();
        }
    });
});

rangeInput.forEach(input => {
    input.addEventListener("input", e => {
        let minVal = parseInt(rangeInput[0].value);
        let maxVal = parseInt(rangeInput[1].value);

        if (maxVal - minVal < priceGap) {
            if (e.target.className === "range-min") {
                rangeInput[0].value = maxVal - priceGap;
            } else {
                rangeInput[1].value = minVal + priceGap;
            }
        } else {
            priceInput[0].value = minVal;
            priceInput[1].value = maxVal;
            range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
            range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        renderPublication();
    });
});

// ===============================
// DOMAIN DROPDOWN
// ===============================
let domains = document.querySelector(".mySelect");
domains.addEventListener("change", () => {
    renderPublication();
});

// OPTIONAL: Hide dropdown when coming from 6G Lab
if (urlDomain) {
    domains.style.display = "none";
}
