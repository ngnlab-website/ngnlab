let href = document.querySelector(".header-right")
// import publications from "../data/publications.json" assert { type: "json" }
let publications = []
fetch("../data/publications.json")
    .then(response => response.json())
    .then(data => {
        publications=data
        renderPublication()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
href.addEventListener("click", () => {
    window.location.href = "../index.html"
})
const projects = [
    {
        title: "FlyCamXR - Autonomous Camera Drones for Interactive Experiences in Extended Reality Telepresence Applications with Enhanced Naturalness, 2022-2024",
        fundingAgency: "DAAD Indo-German Research Collaboration - University of Applied Sciences Jena, Germany"
    },
    {
        title: "Wearable Digital Health Care Device for Real-time Monitoring of Cardio-toxicity, 2023-2026",
        fundingAgency: "SERB – State University Research Excellence (SURE), Department of Science and Technology"
    },
    {
        title: "An Intelligent Blockchain-Hyperledger Framework for a Secure and Automated Supply Chain Management (SCM) for Small and Medium Size Enterprises, 2020-2023",
        fundingAgency: "Erasmus+ International Credit Mobility (KA107), Trinity College Dublin, Ireland"
    },
    {
        title: "Efficient Handoff and Authentication Schemes for QoS Enhancement in IEEE 802.16m for 4G Networks, 2012-2015",
        fundingAgency: "DST-SERB under FAST TRACK Research Grant"
    },
    {
        title: "Efficient Resource Utilization by solving Scheduling Problems in WiMAX networks, 2009-2010",
        fundingAgency: "Research Support Scheme for Innovative Project by Young Faculty Members"
    },
]
let projectsContainer = document.querySelector(".projects-container")
function displayProjects() {
    projects.forEach(project => {
        let singleProject = document.createElement("div")
        singleProject.classList.add("single-project")
        singleProject.innerHTML =   `
                                        <div class="project-title">${project.title}</div>
                                        <div class="funding-agency">
                                            <div class="funding-text">Funding Agency</div>
                                            <div class="funding">${project.fundingAgency}</div>
                                        </div>
                                    `
        projectsContainer.appendChild(singleProject)
    })
}
displayProjects()
const awards = [
    {
        title: "IEEE Publication Award, 2021",
        awardingAgency: "IEEE Madras Section"
    },
    {
        title: "Young Faculty Research Fellowship under Visvesvaraya Ph.D. Scheme, 2019 and 2020",
        awardingAgency: "MeitY, Government of India"
    },
    {
        title: "Professional Achievement Award, 2017",
        awardingAgency: "IEEE Madras Section"
    },
    {
        title: "Raman Post-Doctoral Fellowship at USA, 2014 - 2015",
        awardingAgency: "University Grants Commission, India"
    },
    {
        title: "The Young Engineer Award, 2019",
        awardingAgency: "Institution of Engineers (India)"
    },
]
let awardsContainer = document.querySelector(".awards-container")
function displayAwards() {
    awards.forEach(award => {
        let singleAward = document.createElement("div")
        singleAward.classList.add("single-award")
        singleAward.innerHTML =   `
                                        <div class="award-title">${award.title}</div>
                                        <div class="awarding-agency">
                                            <div class="awarding">${award.awardingAgency}</div>
                                        </div>
                                    `
        awardsContainer.appendChild(singleAward)
    })
}
displayAwards()
let paperPresentations = [
    {
        title: "Inter UAV Collision Avoidance using Deep-Q-Learning in Flocking Environment",
        conference: "IEEE UEMCOM 2019",
        country: "New York, USA"
    },
    {
        title: "Secured LTE-Wi-Fi Offloading Using RTT Based Evading Malicious Access Point (EMAP) Algorithm",
        conference: "ICCCS 2019",
        country: "Singapore"
    },
    {
        title: "SDN Assisted Middlebox Synchronization Mechanism for Next Generation Mobile Data Management System",
        conference: "ATC 2017",
        country: "San Francisco, USA"
    },
    {
        title: "Sensor-to-Vehicle Communication by using VANETs for Urban Parking",
        conference: "ICET 2016",
        country: "Singapore"
    },
    {
        title: "Cross-layer Optimization using Game Theory to Alleviate Unfairness in Wireless Networks",
        conference: "IEEE KICSS 2012",
        country: "Melbourne, Australia"
    },
    {
        title: "Throughput Enhancement in Ad hoc networks using Virtual Carrier Sensing Mechanisms",
        conference: "ICEIE, 2010",
        country: "Kyoto, Japan"
    },
    {
        title: "Prevention of Denial of Service Attacks and Performance Enhancement in Mobile Ad hoc Networks",
        conference: "ITNG 2009",
        country: "Las Vegas, USA"
    },
    {
        title: "Priority Scheduling in Mobile Ad Hoc Networks with Improved Bandwidth Utilization",
        conference: "IEEE CCECE 2008",
        country: "Ontario, Canada"
    },
    {
        title: "Detection and Prevention of Selfish and Misbehaving Nodes at MAC Layer in Mobile Ad Hoc Networks",
        conference: "IEEE CCECE 2008",
        country: "Ontario, Canada"
    },
    {
        title: "An Enhanced MAC Protocols for Differentiated Services in Mobile Ad Hoc Networks (MANET)- A Profile Based Approach",
        conference: "CITA 2007",
        country: "Sarawak, Malaysia & Singapore"
    },
]
let paperPresentationContainer = document.querySelector(".paper-presentation-container ul")
function displayPapers() {
    paperPresentations.forEach(paperPresentation => {
        let returnHtml = document.createElement("li")
        returnHtml.innerHTML =  `"${paperPresentation.title}", ${paperPresentation.conference}, <span>${paperPresentation.country}</span>`
        paperPresentationContainer.appendChild(returnHtml)
    })
}
displayPapers()
let invitedTalks = [
    {
        title: "6G-Assisted UAV-Truck Networks: Towards Efficient Essential Services Delivery Applications",
        location: "Dept. of Electronic and Electrical Engineering, Trinity College Dublin, Ireland",
        date: "February 24, 2023"
    },
    {
        title: "Convergence of AI and IoT for building Intelligent Society, Rochester Institute of Technology",
        location: "Rochester, USA",
        date: "October 8, 2019"
    },
    {
        title: "Seamless Handoff in 5G Networks: Opportunities and Security Challenges",
        location: "National University of Singapore, Singapore",
        date: "February 26, 2019"
    },
    {
        title: "An Optimised LTE - WiFi Data Offloading Technique for SDN-Assisted 5G Networks",
        location: "Department of Computer Science, University of California, Davis, USA",
        date: "June 3, 2016"
    },
    {
        title: "Visiting Researcher:",
        location: "Network Labs, Department of Computer Science, University of California, Davis, USA",
        date: "June 2-8, 2016"
    },
    {
        title: "Scheduling in LTE-Advanced: Key Design Issues and Recent Trends- A Survey",
        location: "Department of Electrical Engineering, University of South Florida, USA",
        date: "April 17, 2015"
    },
    {
        title: "Visiting Researcher: ",
        location: "iCONS Lab, Department of Electrical Engineering, University of South Florida, USA",
        date: "April 10-17, 2015"
    },
    {
        title: "Challenges in IEEE 802.16 Broadband Wireless Access",
        location: "Department of Electronics and Computer Engineering, Brunel University, London, UK",
        date: "April 23, 2009"
    },
    {
        title: "WiMAX – Wireless Broadband Technologies – Research Trends",
        location: "The Institution of Engineers (India), Karnataka State Centre, Bangalore",
        date: "March 12, 2010"
    },
]
let invitedTalksContainer = document.querySelector(".invited-talks-container ul")
function displayTalks() {
    invitedTalks.forEach(invitedTalks => {
        let talkHtml = document.createElement("li")
        talkHtml.innerHTML =  `"${invitedTalks.title}", <span>${invitedTalks.location}</span>, ${invitedTalks.date}`
        invitedTalksContainer.appendChild(talkHtml)
    })
}
displayTalks()
console.log(publications.publications[0].year);
// let publications = []
let activeYear = "2023"
// import publications from "../data/publications.json" assert { type: "json" }
function renderPublication() {
    let currentYear = null
    let count = 0
    const publicationsContainer = document.querySelector(".publications-container")
    let var2023 = document.createElement("h1")
    var2023.innerHTML =    `<div class="year-change">
                            <h5>2023</h5>
                        </div>`
    publicationsContainer.appendChild(var2023)
    publications.forEach(publication => {
        if(publication.selective === true) {
            count++;
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