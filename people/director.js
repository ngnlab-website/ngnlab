let href = document.querySelector(".header-right")
href.addEventListener("click", () => {
    window.location.href = "../index.html"
})
const projects = [
    {
        title: "title",
        fundingAgency: "funding"
    },
    {
        title: "title",
        fundingAgency: "funding"
    },
    {
        title: "title",
        fundingAgency: "funding"
    },
    {
        title: "title",
        fundingAgency: "funding"
    },
    {
        title: "title",
        fundingAgency: "funding"
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
        title: "title",
        awardingAgency: "awarding"
    },
    {
        title: "title",
        awardingAgency: "awarding"
    },
    {
        title: "title",
        awardingAgency: "awarding"
    },
    {
        title: "title",
        awardingAgency: "awarding"
    },
    {
        title: "title",
        awardingAgency: "awarding"
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
        title: "Paper",
        conference: "conference",
        country: "Country"
    },
    {
        title: "Paper",
        conference: "conference",
        country: "Country"
    },
    {
        title: "Paper",
        conference: "conference",
        country: "Country"
    },
    {
        title: "Paper",
        conference: "conference",
        country: "Country"
    },
    {
        title: "Paper",
        conference: "conference",
        country: "Country"
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
        title: "Paper",
        location: "location",
        date: "date"
    },
    {
        title: "Paper",
        location: "location",
        date: "date"
    },
    {
        title: "Paper",
        location: "location",
        date: "date"
    },
    {
        title: "Paper",
        location: "location",
        date: "date"
    },
    {
        title: "Paper",
        location: "location",
        date: "date"
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
const publications = [
    {
        title: "DTBV: A Deep Transfer-Based Bone Cancer Diagnosis System Using VGG16 Feature Extraction",
        author: "G Suganeshwari, R Balakumar, Kalimuthu Karuppanan, Sahaya Beni Prathiba, Sudha Anbalagan, Gunasekaran Raja",
        doi: "MDPI Diagnostics 2023. https://doi.org/10.3390/diagnostics13040757",
        year: "2023",
        domain: ["Healthcare"]
    },
    {
        title: "Smart Navigation and Energy Management Framework for Autonomous Electric Vehicles in Complex Environments",
        author: "Gunasekaran Raja, Gayathri Saravanan, Sahaya Beni Prathiba, Zahid Akhtar, Sunder Ali Khowaja, Kapal Dev",
        doi: "IEEE Internet of Things Journal. https://ieeexplore.ieee.org/abstract/document/10044202/",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "Vision-Based Ingenious Lane Departure Warning System for Autonomous Vehicles",
        author: "Sudha Anbalagan, Ponnada Srividya, B Thilaksurya, Sai Ganesh Senthivel, G Suganeshwari, Gunasekaran Raja",
        doi: "MDPI Sustainability 2023. https://www.mdpi.com/2071-1050/15/4/3535",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "Intelligent Drones Trajectory Generation for Mapping Weed Infested Regions Over 6G Networks",
        author: "Gunasekaran Raja, Nisha Deborah Philips, Ramesh Krishnan Ramasamy, Kapal Dev, Neeraj Kumar",
        doi: "IEEE Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/abstract/document/9997234",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "Nexus of Deep Reinforcement Learning and Leader-Follower Approach for AIoT Enabled Aerial Networks",
        author: "Gunasekaran Raja, Selvam Essaky, Aishwarya Ganapathisubramaniyan, Yashvandh Baskar",
        doi: "IEEE Transactions on Industrial Informatics. https://ieeexplore.ieee.org/abstract/document/9969936",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "MLB-IoD: Multi Layered Blockchain Assisted 6G Internet of Drones Ecosystem",
        author: "Gunasekaran Raja, Sai Ganesh Senthivel, Sivaganesh Balaganesh, Balaji Rajaguru Rajakumar, Vishal Ravichandran, Mohsen Guizani",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/abstract/document/9916071",
        year: "2023",
        domain: ["Blockchain"]
    },
    {
        title: "AI-Empowered Trajectory Anomaly Detection and Classification in 6G-V2X",
        author: "Gunasekaran Raja, Mubeena Begum, Sugeerthi Gurumoorthy, Deepak Suresh Rajendran, Ponnada Srividya, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        doi: "IEEE Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/abstract/document/9863890",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "A Hybrid Deep Sensor Anomaly Detection for Autonomous Vehicles in 6G-V2X Environment",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, KS Arikumar, Sugeerthi Gurumoorthy, Kapal Dev",
        doi: "IEEE Transactions on Network Science and Engineering. https://ieeexplore.ieee.org/abstract/document/9815151",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Nexus of 6G and Blockchain for Authentication of Aerial and IoT Devices",
        author: "Gunasekaran Raja, Balaji Rajaguru Rajakumar, Sugeerthi Gurumoorthy, Kapal Dev, Maurizio Magarini",
        doi: "IEEE International Conference on Communications. https://ieeexplore.ieee.org/abstract/document/9838856",
        year: "2022",
        domain: ["IoT", "Blockchain"]
    },
    {
        title: "QoE‐aware mobile computation offloading in mobile edge computing",
        author: "Dharmalingam Adhimuga Sivasakthi, Raja Gunasekaran",
        doi: "Concurrency and Computation: Practice and Experience. https://onlinelibrary.wiley.com/doi/abs/10.1002/cpe.6853",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "PERFECT: Positional-Forgery Resistant Traffic Gap Estimation for Connected Intersection Management",
        author: "Shajina Anand, Gunasekaran Raja, Neeraj Kumar, Renuka Narayanan, Ashmitha Raja, K Bhavani Venkata Karthik",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/document/9773976",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Optimization of 5G/6G Telecommunication Infrastructure through an NFV-Based Element Management System",
        author: "Arunkumar Arulappan, Gunasekaran Raja, Kalpdrum Passi, Aniket Mahanti",
        doi: "Symmetry. https://www.mdpi.com/2073-8994/14/5/978",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "Optimized D-RAN Aware Data Retrieval for 5G Information Centric Networks",
        author: "Kottilingam Kottursamy, Atta ur Rehman Khan, Banupriya Sadayappillai, Gunasekaran Raja",
        doi: "Wireless Personal Communications. https://link.springer.com/article/10.1007/s11277-021-09392-1",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "Blockchain-Integrated Multiagent Deep Reinforcement Learning for Securing Cooperative Adaptive Cruise Control",
        author: "Gunasekaran Raja, Kottilingam Kottursamy, Kapal Dev, Renuka Narayanan, Ashmitha Raja, K Bhavani Venkata Karthik",
        doi: "IEEE Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/document/9765784",
        year: "2022",
        domain: ["Blockchain"]
    },
    {
        title: "SPAS: Smart Pothole-Avoidance Strategy for Autonomous Vehicles",
        author: "Gunasekaran Raja, Sudha Anbalagan, Senbagapriya Senthilkumar, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        doi: "IEEE Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/document/9756838",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        doi: "IEEE Transactions on Green Communications and Networking. https://ieeexplore.ieee.org/document/9745588",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Cybertwin-Driven Federated Learning Based Personalized Service Provision for 6G-V2X",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Sugeerthi Gurumoorthy, Neeraj Kumar, Mohsen Guizani",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/document/9645064",
        year: "2022",
        domain: ["AV","IoT"]
    },
    {
        title: "An Efficient Formation Control mechanism for Multi-UAV Navigation in Remote Surveillance",
        author: "Gunasekaran Raja, Yashvandh Baskar, Priyanka Dhanasekaran, Raheel Nawaz, Keping Yu",
        doi: "2021 IEEE Globecom Workshops (GC Wkshps). https://ieeexplore.ieee.org/document/9682094",
        year: "2021",
        voleume: "",
        domain: ["UAV"]
    },
    {
        title: "Intelligent Cooperative Collision Avoidance at Overtaking and Lane Changing Maneuver in 6G-V2X Communications",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Neeraj Kumar",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/document/9612041",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Deep Learning Based Attack Detection in IIoT using Two-Level Intrusion Detection System",
        author: "Kathiroli Raja, Krithika Karthikeyan, B Abilash, Kapal Dev, Gunasekaran Raja",
        doi: "Research Square. https://assets.researchsquare.com/files/rs-997888/v1_covered.pdf?c=1635949841",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "A Hybrid Deep Reinforcement Learning For Autonomous Vehicles Smart-Platooning",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Kapal Dev, Neeraj Kumar, Mohsen Guizani",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/document/9585638",
        year: "2021",
        domain: ["AV"]
    },
    {
        title: "SOSChain: self optimizing streamchain for last-mile 6G UAV-truck networks",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Renuka Narayanan, K Bhavani Venkata Karthik",
        doi: "Proceedings of the 1st Workshop on Artificial Intelligence and Blockchain Technologies for Smart Cities with 6G.https://dl.acm.org/doi/abs/10.1145/3477084.3484952",
        year: "2021",
        domain: ["Blockchain", "UAV"]
    },
    {
        title: "SDN-assisted safety message dissemination framework for vehicular critical energy infrastructure",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Ali Kashif Bashir, Ahmad Ali AlZubi, Brij Gupta",
        doi: "IEEE Transactions on Industrial Informatics.https://ieeexplore.ieee.org/abstract/document/9540253/",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Dynamic ambient HetNet for hybrid data communication and transmission in IoT networks",
        author: "D Adhimuga Sivasakthi, Raja Gunasekaran",
        doi: "Journal of Ambient Intelligence and Humanized Computing.https://link.springer.com/article/10.1007/s12652-020-02689-2",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "Federated learning empowered computation offloading and resource management in 6G-V2X",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Kapal Dev, Sugeerthi Gurumoorthy, Atshaya P Sankaran",
        doi: "IEEE Transactions on Network Science and Engineering. https://ieeexplore.ieee.org/abstract/document/9511234/",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "AV-CPS: Audio Visual Cognitive Processing System for Critical Intervention in Autonomous Vehicles",
        author: "Gunasekaran Raja, Senbagapriya Senthilkumar, Sivaseelan Ganesan, Rithika Edhayachandran, Geetha Vijayaraghavan, Ali Kashif Bashir",
        doi: "IEEE ICC 2021 International Conference on Communications – Workshop, Montreal.https://ieeexplore.ieee.org/abstract/document/9473647",
        year: "2021",
        domain: ["AV"]
    },
    {
        title: "Efficient and secured swarm pattern multi-UAV communication",
        author: "Gunasekaran Raja, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Madhumitha Sri Selvakumar, Ali Kashif Bashir, Shahid Mumtaz",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/abstract/document/9437802/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "DA-WDGN: Drone-Assisted Weed Detection using GLCM-M features and NDIRT indices",
        author: "Gunasekaran Raja, Kapal Dev, Nisha Deborah Philips, Mohamed Suhaib, Deepakraj M, Ramesh Krishnan Ramasamy",
        doi: "IEEE INFOCOM 2021 International Conference on Computer Communications Workshop. https://ieeexplore.ieee.org/abstract/document/9484598/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "PFIN: Particle Filter-based Indoor Navigation Framework for Efficient UAV Communication",
        author: "Gunasekaran Raja, Sailakshmi Suresh, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Neeraj Kumar",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/abstract/document/9403984/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "Collision-free Path Planning for UAVs using Efficient Artificial Potential Field Algorithm",
        author: "Praveen Kumar Selvam, Gunasekaran Raja, Sebastian Knorr, Vasantharaj Rajagopal, Kapal Dev",
        doi: "IEEE VTC 2021 Vehicular Technology Conference – Workshop, Helsinki, Finland. https://ieeexplore.ieee.org/abstract/document/9448937/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "Machine-learning-based efficient and secure RSU placement mechanism for software-defined-IoV",
        author: "Sudha Anbalagan, Ali Kashif Bashir, Gunasekaran Raja, Priyanka Dhanasekaran, Geetha Vijayaraghavan, Usman Tariq, Mohsen Guizani",
        doi: " IEEE Internet of Things Journal. https://ieeexplore.ieee.org/abstract/document/9390178/",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "Multimedia Computational Offloading for 5G Mobile Edge Computing",
        author: "Raja Gunasekaran, Adhimuga Sivasakthi D",
        doi: " Telecommunication Systems. https://assets.researchsquare.com/files/rs-221801/v1_covered.pdf?c=1631854471",
        year: "2021",
        domain: ["IoT"]
    }   
]
let currentYear = publications[0].year
const publicationsContainer = document.querySelector(".publications-container")
renderPublication = () => {
    let var2023 = document.createElement("h1")
    var2023.innerHTML =    `<div class="year-change">
                            <h5>2023</h5>
                        </div>`
    publicationsContainer.appendChild(var2023)
    publications.forEach(publication => {
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
        let impactScoreText = document.createTextNode(publication.year)
        impactScoreDiv.appendChild(impactScoreText)
        parentDiv.appendChild(titleDiv)
        parentDiv.appendChild(authorDiv)
        parentDiv.appendChild(doiDiv)
        publicationsContainer.appendChild(parentDiv)
        console.log(parentDiv)
    })
}
renderPublication()