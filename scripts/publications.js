// ===============================
// READ DOMAIN FROM URL (6G LAB)
// ===============================
const urlParams = new URLSearchParams(window.location.search);
const urlDomain = urlParams.get("domain"); // e.g. Networks

let publications = [];
let currentYear = null;

const publicationsContainer = document.querySelector(".publications-container");
const domainSelect = document.querySelector(".mySelect");

// ===============================
// FETCH PUBLICATIONS
// ===============================
fetch("../data/publications.json")
    .then(response => response.json())
    .then(data => {
        publications = data;
       
        // -------------------------------
        // SET YEAR RANGE DYNAMICALLY
        // -------------------------------
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

        // -------------------------------
        // DOMAIN HANDLING FOR 6G LAB
        // -------------------------------
        if (urlDomain === "Networks") {
            // Clear dropdown
            domainSelect.innerHTML = "";

            // Add only Networks option
            const option = document.createElement("option");
            option.value = "Networks";
            option.textContent = "Next Generation Networks (5G/6G)";
            domainSelect.appendChild(option);

            domainSelect.value = "Networks";
            domainSelect.disabled = true; // better than hiding
        }

        renderPublication();
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

// ===============================
// RENDER PUBLICATIONS
// ===============================
function renderPublication() {
    publicationsContainer.innerHTML = "";
    currentYear = null;

    const minValue = parseInt(document.querySelector(".input-min").value);
    const maxValue = parseInt(document.querySelector(".input-max").value);

    const selectedDomain =
        urlDomain === "Networks"
            ? "Networks"
            : domainSelect.value;

    publications.forEach(publication => {
        const domainMatch =
            selectedDomain === "all" ||
            publication.domain.includes(selectedDomain);

        if (
            publication.year >= minValue &&
            publication.year <= maxValue &&
            domainMatch
        ) {
            // Year heading
            if (publication.year !== currentYear) {
                currentYear = publication.year;

                const yearDiv = document.createElement("h1");
                yearDiv.innerHTML = `
                    <div class="year-change">
                        <h5>${publication.year}</h5>
                    </div>`;
                publicationsContainer.appendChild(yearDiv);
            }

            // Publication card
            const parentDiv = document.createElement("div");
            parentDiv.classList.add("publication");

            const titleDiv = document.createElement("a");
            titleDiv.classList.add("title");
            titleDiv.href = publication.doi;
            titleDiv.target = "_blank";
            titleDiv.innerText = publication.title;

            const authorDiv = document.createElement("div");
            authorDiv.classList.add("author");
            authorDiv.innerText = publication.author;

            const detailsDiv = document.createElement("div");
            detailsDiv.classList.add("details");

            const confDiv = document.createElement("div");
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
const rangeInput = document.querySelectorAll(".range-input input");
const priceInput = document.querySelectorAll(".price-input input");
const range = document.querySelector(".slider .progress");

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
                range.style.right =
                    100 - (maxPrice / rangeInput[1].max) * 100 + "%";
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
            range.style.right =
                100 - (maxVal / rangeInput[1].max) * 100 + "%";
        }
        renderPublication();
    });
});

// ===============================
// DOMAIN DROPDOWN CHANGE
// ===============================
domainSelect.addEventListener("change", () => {
    renderPublication();
});
