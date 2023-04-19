let href = document.querySelector(".header-right")
href.addEventListener("click", () => {
    window.location.href = "../index.html"
})
const projects = [
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
    {
        title: "FlyCamXR - Autonomous Camera Drones for Interactive Experiences in Extended Reality Telepresence Applications with Enhanced Naturalness, 2022-2024",
        fundingAgency: "DAAD Indo-German Research Collaboration - University of Applied Sciences Jena, Germany"
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
const publications = [
    {
        title: "DTBV: A Deep Transfer-Based Bone Cancer Diagnosis System Using VGG16 Feature Extraction",
        author: "G Suganeshwari, R Balakumar, Kalimuthu Karuppanan, Sahaya Beni Prathiba, Sudha Anbalagan, Gunasekaran Raja",
        conference: "MDPI Diagnostics 2023.", 
        doi: "https://doi.org/10.3390/diagnostics13040757",
        year: "2023",
        domain: ["Healthcare"]
    },
    {
        title: "Smart Navigation and Energy Management Framework for Autonomous Electric Vehicles in Complex Environments",
        author: "Gunasekaran Raja, Gayathri Saravanan, Sahaya Beni Prathiba, Zahid Akhtar, Sunder Ali Khowaja, Kapal Dev",
        conference: "IEEE Internet of Things Journal.", 
        doi: "https://ieeexplore.ieee.org/abstract/document/10044202/",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "Vision-Based Ingenious Lane Departure Warning System for Autonomous Vehicles",
        author: "Sudha Anbalagan, Ponnada Srividya, B Thilaksurya, Sai Ganesh Senthivel, G Suganeshwari, Gunasekaran Raja",
        conference: "MDPI Sustainability 2023. ",
        doi: "https://www.mdpi.com/2071-1050/15/4/3535",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "MLB-IoD: Multi Layered Blockchain Assisted 6G Internet of Drones Ecosystem",
        author: "Gunasekaran Raja, Sai Ganesh Senthivel, Sivaganesh Balaganesh, Balaji Rajaguru Rajakumar, Vishal Ravichandran, Mohsen Guizani",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9916071",
        year: "2023",
        domain: ["Blockchain"]
    },
    {
        title: "AI-Empowered Trajectory Anomaly Detection and Classification in 6G-V2X",
        author: "Gunasekaran Raja, Mubeena Begum, Sugeerthi Gurumoorthy, Deepak Suresh Rajendran, Ponnada Srividya, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        conference: "IEEE Transactions on Intelligent Transportation Systems. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9863890",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "Intelligent Drones Trajectory Generation for Mapping Weed Infested Regions Over 6G Networks",
        author: "Gunasekaran Raja, Nisha Deborah Philips, Ramesh Krishnan Ramasamy, Kapal Dev, Neeraj Kumar",
        conference: "IEEE Transactions on Intelligent Transportation Systems. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9997234",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "Nexus of Deep Reinforcement Learning and Leader-Follower Approach for AIoT Enabled Aerial Networks",
        author: "Gunasekaran Raja, Selvam Essaky, Aishwarya Ganapathisubramaniyan, Yashvandh Baskar",
        conference: "IEEE Transactions on Industrial Informatics. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9969936",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "A Hybrid Deep Sensor Anomaly Detection for Autonomous Vehicles in 6G-V2X Environment",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, KS Arikumar, Sugeerthi Gurumoorthy, Kapal Dev",
        conference: "IEEE Transactions on Network Science and Engineering. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9815151",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Nexus of 6G and Blockchain for Authentication of Aerial and IoT Devices",
        author: "Gunasekaran Raja, Balaji Rajaguru Rajakumar, Sugeerthi Gurumoorthy, Kapal Dev, Maurizio Magarini",
        conference: "IEEE International Conference on Communications. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9838856",
        year: "2022",
        domain: ["IoT", "Blockchain"]
    },
    {
        title: "QoE‐aware mobile computation offloading in mobile edge computing",
        author: "Dharmalingam Adhimuga Sivasakthi, Raja Gunasekaran",
        conference: "Concurrency and Computation: Practice and Experience. ",
        doi: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cpe.6853",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "PERFECT: Positional-Forgery Resistant Traffic Gap Estimation for Connected Intersection Management",
        author: "Shajina Anand, Gunasekaran Raja, Neeraj Kumar, Renuka Narayanan, Ashmitha Raja, K Bhavani Venkata Karthik",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/document/9773976",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Optimization of 5G/6G Telecommunication Infrastructure through an NFV-Based Element Management System",
        author: "Arunkumar Arulappan, Gunasekaran Raja, Kalpdrum Passi, Aniket Mahanti",
        conference: "Symmetry. ",
        doi: "https://www.mdpi.com/2073-8994/14/5/978",
        year: "2022",
        domain: ["IoT"]
    },
    {
        title: "Blockchain-Integrated Multiagent Deep Reinforcement Learning for Securing Cooperative Adaptive Cruise Control",
        author: "Gunasekaran Raja, Kottilingam Kottursamy, Kapal Dev, Renuka Narayanan, Ashmitha Raja, K Bhavani Venkata Karthik",
        conference: "IEEE Transactions on Intelligent Transportation Systems. ",
        doi: "https://ieeexplore.ieee.org/document/9765784",
        year: "2022",
        domain: ["Blockchain"]
    },
    {
        title: "SPAS: Smart Pothole-Avoidance Strategy for Autonomous Vehicles",
        author: "Gunasekaran Raja, Sudha Anbalagan, Senbagapriya Senthilkumar, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        conference: "IEEE Transactions on Intelligent Transportation Systems. ",
        doi: "https://ieeexplore.ieee.org/document/9756838",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
        author: "Gunasekaran Raja, Gayathri Saravanan",
        conference: "IEEE Transactions on Green Communications and Networking. ",
        doi: "https://ieeexplore.ieee.org/document/9745588",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Cybertwin-Driven Federated Learning Based Personalized Service Provision for 6G-V2X",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Sugeerthi Gurumoorthy, Neeraj Kumar, Mohsen Guizani",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/document/9645064",
        year: "2022",
        domain: ["AV","IoT"]
    },
    {
        title: "Intelligent Cooperative Collision Avoidance at Overtaking and Lane Changing Maneuver in 6G-V2X Communications",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Neeraj Kumar",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/document/9612041",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "SDN-assisted safety message dissemination framework for vehicular critical energy infrastructure",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Ali Kashif Bashir, Ahmad Ali AlZubi, Brij Gupta",
        conference: "IEEE Transactions on Industrial Informatics.",
        doi: "https://ieeexplore.ieee.org/abstract/document/9540253/",
        year: "2022",
        domain: ["AV"]
    },
    {
        title: "Optimized D-RAN Aware Data Retrieval for 5G Information Centric Networks",
        author: "Kottilingam Kottursamy, Atta ur Rehman Khan, Banupriya Sadayappillai, Gunasekaran Raja",
        conference: "Wireless Personal Communications. ",
        doi: "https://link.springer.com/article/10.1007/s11277-021-09392-1",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "An Efficient Formation Control mechanism for Multi-UAV Navigation in Remote Surveillance",
        author: "Gunasekaran Raja, Yashvandh Baskar, Priyanka Dhanasekaran, Raheel Nawaz, Keping Yu",
        conference: "2021 IEEE Globecom Workshops (GC Wkshps). ",
        doi: "https://ieeexplore.ieee.org/document/9682094",
        year: "2021",
        voleume: "",
        domain: ["UAV"]
    },
    {
        title: "Deep Learning Based Attack Detection in IIoT using Two-Level Intrusion Detection System",
        author: "Kathiroli Raja, Krithika Karthikeyan, B Abilash, Kapal Dev, Gunasekaran Raja",
        conference: "Research Square. ",
        doi: "https://assets.researchsquare.com/files/rs-997888/v1_covered.pdf?c=1635949841",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "A Hybrid Deep Reinforcement Learning For Autonomous Vehicles Smart-Platooning",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Kapal Dev, Neeraj Kumar, Mohsen Guizani",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/document/9585638",
        year: "2021",
        domain: ["AV"]
    },
    {
        title: "SOSChain: self optimizing streamchain for last-mile 6G UAV-truck networks",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Renuka Narayanan, K Bhavani Venkata Karthik",
        conference: "Proceedings of the 1st Workshop on Artificial Intelligence and Blockchain Technologies for Smart Cities with 6G.",
        doi: "https://dl.acm.org/doi/abs/10.1145/3477084.3484952",
        year: "2021",
        domain: ["Blockchain", "UAV"]
    },
    {
        title: "Dynamic ambient HetNet for hybrid data communication and transmission in IoT networks",
        author: "D Adhimuga Sivasakthi, Raja Gunasekaran",
        conference: "Journal of Ambient Intelligence and Humanized Computing.",
        doi: "https://link.springer.com/article/10.1007/s12652-020-02689-2",
        year: "2021",
        domain: ["IoT"]
    },

    {
        title: "AV-CPS: Audio Visual Cognitive Processing System for Critical Intervention in Autonomous Vehicles",
        author: "Gunasekaran Raja, Senbagapriya Senthilkumar, Sivaseelan Ganesan, Rithika Edhayachandran, Geetha Vijayaraghavan, Ali Kashif Bashir",
        conference: "IEEE ICC 2021 International Conference on Communications – Workshop, Montreal.",
        doi: "https://ieeexplore.ieee.org/abstract/document/9473647",
        year: "2021",
        domain: ["AV"]
    },
    {
        title: "Efficient and secured swarm pattern multi-UAV communication",
        author: "Gunasekaran Raja, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Madhumitha Sri Selvakumar, Ali Kashif Bashir, Shahid Mumtaz",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9437802/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "DA-WDGN: Drone-Assisted Weed Detection using GLCM-M features and NDIRT indices",
        author: "Gunasekaran Raja, Kapal Dev, Nisha Deborah Philips, Mohamed Suhaib, Deepakraj M, Ramesh Krishnan Ramasamy",
        conference: "IEEE INFOCOM 2021 International Conference on Computer Communications Workshop. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9484598/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "PFIN: Particle Filter-based Indoor Navigation Framework for Efficient UAV Communication",
        author: "Gunasekaran Raja, Sailakshmi Suresh, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Neeraj Kumar",
        conference: "IEEE Transactions on Vehicular Technology. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9403984/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "Collision-free Path Planning for UAVs using Efficient Artificial Potential Field Algorithm",
        author: "Praveen Kumar Selvam, Gunasekaran Raja, Sebastian Knorr, Vasantharaj Rajagopal, Kapal Dev",
        conference: "IEEE VTC 2021 Vehicular Technology Conference – Workshop, Helsinki, Finland. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9448937/",
        year: "2021",
        domain: ["UAV"]
    },
    {
        title: "Machine-learning-based efficient and secure RSU placement mechanism for software-defined-IoV",
        author: "Sudha Anbalagan, Ali Kashif Bashir, Gunasekaran Raja, Priyanka Dhanasekaran, Geetha Vijayaraghavan, Usman Tariq, Mohsen Guizani",
        conference: " IEEE Internet of Things Journal. ",
        doi: "https://ieeexplore.ieee.org/abstract/document/9390178/",
        year: "2021",
        domain: ["IoT"]
    },
    {
        title: "Multimedia Computational Offloading for 5G Mobile Edge Computing",
        author: "Raja Gunasekaran, Adhimuga Sivasakthi D",
        conference: " Telecommunication Systems. ",
        doi: "https://assets.researchsquare.com/files/rs-221801/v1_covered.pdf?c=1631854471",
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
        detailsDiv.appendChild(doiDiv)
        parentDiv.appendChild(detailsDiv)
        publicationsContainer.appendChild(parentDiv)
        console.log(parentDiv)
    })
}
renderPublication()
