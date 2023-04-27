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
            title: "Smart Navigation and Energy Management Framework for Autonomous Electric Vehicles in Complex Environments",
            author: "Gunasekaran Raja, Gayathri Saravanan, Sahaya Beni Prathiba, Zahid Akhtar,  Sunder Ali Khowaja,  Kapal Dev",
            conference: "IEEE Internet of Things Journal, doi: 10.1109/JIOT.2023.3244854.",
            doi: "https://ieeexplore.ieee.org/abstract/document/10044202",
            year: "2023",
            domain: ["AV"]
     },
    {
            title: "MLB-IoD: Multi Layered Blockchain assisted 6G Internet of Drones Ecosystem",
            author: "Gunasekaran Raja, Sai Ganesh S, Sivaganesh B, Balaji Rajaguru Rajakumar, Vishal Ravichandran, Mohsen Guizani",
            conference: "IEEE Transactions on Vehicular Technology, doi: 10.1109/TVT.2022.3213567.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9916071",
            year: "2022",
            domain: ["UAV"]
        },
    {
            title: "AI-empowered Trajectory Anomaly Detection and Classification in 6G-V2X",
            author: "Gunasekaran Raja, Nisha Deborah Philips, Ramesh Krishnan Ramasamy, Kapal Dev,  Neeraj Kumar",
            conference: "IEEE Transactions on Intelligent Transportation Systems, vol. 24, no. 4, pp. 4599-4607.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9863890",
            year: "2022",
            domain: ["Networks"]
        },
    {
            title: "A Hybrid Deep Sensor Anomaly Detection for Autonomous Vehicles in 6G-V2X Environment",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Arikumar K S, Sugeerthi Gurumoorthy, Kapal Dev",
            conference: "IEEE Transactions on Network Science and Engineering, doi: 10.1109/TNSE.2022.3188304.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9815151",
            year: "2022",
            domain: ["AV"]
        },
    {
            title: "Eco-Friendly Disaster Evacuation Framework for 6G Connected and Autonomous Vehicular Networks",
            author: "Gunasekaran Raja, Gayathri Saravanan",
            conference: "IEEE Transactions on Green Communications and Networking, vol. 6, no. 3, pp. 1368-1376.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9745588",
            year: "2022",
            domain: ["AV"]
        },
    {
            title: "Blockchain-Integrated Multi-Agent Deep Reinforcement Learning for Securing Cooperative Adaptive Cruise Control",
            author: "Gunasekaran Raja, Kottilingam Kottursamy, Kapal Dev, Renuka Narayanan, Ashmitha Raja, K. Bhavani Venkata Karthik",
            conference: "IEEE Transactions on Intelligent Transportation Systems, vol. 23, no. 7, pp. 9630-9639.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9765784",
            year: "2022",
            domain: ["Blockchain"]
        },
    {
            title: "SPAS: Smart Pothole-Avoidance Strategy for Autonomous Vehicles",
            author: "Gunasekaran Raja, Senbagapriya Senthilkumar, Sudha Anbalagan, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
            conference: "IEEE Transactions on Intelligent Transportation Systems, doi: 10.1109/TITS.2022.3161589.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9756838",
            year: "2022",
            domain: ["AV"]
        },
    {
            title: "Intelligent Cooperative Collision Avoidance at Overtaking and Lane Changing Maneuver in 6G-V2X Communications",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja,  Neeraj Kumar",
            conference: "IEEE Transactions on Vehicular Technology, vol. 71, no. 1, pp. 112-122.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9612041",
            year: "2022",
            domain: ["Networks"]
        },
    {
            title: "SDN-assisted Safety Message Dissemination Framework for Vehicular Critical Energy Infrastructure",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Ali Kashif Bashir, Ahmed Ali Alzubi, Brij Gupta",
            conference: "IEEE Transactions on Industrial Informatics, vol. 18, no. 5, pp. 3510-3518.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9540253",
            year: "2022",
            domain: ["AV"]
        },
    {
            title: "Nexus of 6G and Blockchain for Authentication of Aerial and IoT Devices",
            author: "Gunasekaran Raja, Sai Ganesh, Balaji Rajaguru Rajakumar, Sugeerthi Gurumoorthy, Kapal Dev, Maurizio Magarini",
            conference: "IEEE ICC International Conference on Communications, Seoul, South Korea, doi: 10.1109/ICC45855.2022.9838856.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9838856",
            year: "2022",
            domain: ["Networks"]
        },
    {
            title: "Cybertwin-driven Federated Learning based Personalized Service Provision for 6G-V2X",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Sugeerthi Gurumoorthy, Neeraj Kumar",
            conference: "IEEE Transactions on Vehicular Technology, vol. 71, no. 5, pp. 4632-4641.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9645064",
            year: "2021",
            domain: ["Networks"]
        },
    {
            title: "A Hybrid Deep Reinforcement learning for Autonomous Vehicles Smart-Platooning",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Kapal Dev, Neeraj Kumar, Mohsen  Guizani",
            conference: "IEEE Transactions on Vehicular Technology, vol. 70, no. 12, pp. 13340-13350.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9585638",
            year: "2021",
            domain: ["AV"]
        },
    {
            title: "Federated Learning Empowered Computation Offloading and Resource Management in 6G-V2X",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Kapal Dev, Sugeerthi Gurumoorthy, Atshaya P. Sankaran",
            conference: "IEEE Transactions on Network Science and Engineering, vol. 9, no. 5, pp. 3234–3243.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9511234",
            year: "2021",
            domain: ["Networks"]
        },
    {
            title: "Efficient and Secured Swarm Pattern Multi-UAV Communication",
            author: "Gunasekaran Raja, Nisha Deborah Philips, Ramesh Krishnan Ramasamy, Kapal Dev,  Neeraj Kumar",
            conference: "IEEE Transactions on Vehicular Technology, vol. 70, no. 7, pp. 7050–7058.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9437802",
            year: "2021",
            domain: ["UAV"]
        },
    {
            title: "PFIN: Particle Filter-based Indoor Navigation Framework for Efficient UAV Communication",
            author: "Gunasekaran Raja, Sailakshmi Suresh, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Neeraj Kumar",
            conference: "IEEE Transactions on Vehicular Technology, vol. 70, no. 5, pp. 4984–4992.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9403984",
            year: "2021",
            domain: ["UAV"]
        },
    {
            title: "Machine Learning-based Efficient and Secured RSU Placement Mechanism for Software Defined-IoV",
            author: "Sudha Anbalagan, Ali Kashif Bashir, Gunasekaran Raja, Priyanka Dhanasekaran, Geetha Vijayaraghavan, Usman Tariq, Mohsen Guizani",
            conference: "IEEE Internet of Things Journal, vol. 8, no. 18, pp. 13950-13957.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9390178",
            year: "2021",
            domain: ["Networks"]
        },
    {
            title: "SOSChain: Self Optimizing StreamChain for Last-Mile 6G UAV-Truck Networks",
            author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Renuka Narayanan, K.Bhavani Venkata Karthik",
            conference: "ACM MobiCom 2021 International Conference on Mobile Computing and Networking– Workshop, New Orleans, USA, doi: 10.1145/3477084.3484952.",
            doi:"https://dl.acm.org/doi/abs/10.1145/3477084.3484952",
            year: "2021",
            domain: ["UAV"]
        },
    {
            title: "AV-CPS: Audio Visual Cognitive Processing System for Critical Intervention in Autonomous Vehicles",
            author: "Gunasekaran Raja, Senbagapriya Senthilkumar, Sivaseelan Ganesan, Rithika Edhayachandran, Geetha Vijayaraghavan, Ali Kashif Bashir",
            conference: "IEEE ICC 2021 International Conference on Communications – Workshop, Montreal, pp. 1-6, doi: 10.1109/ICCWorkshops50388.2021.9473647.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9473647",
            year: "2021",
            domain: ["AV"]
        },
    {
            title: "Collision-free Path Planning for UAVs using Efficient Artificial Potential Field Algorithm",
            author: "Praveen Kumar Selvam, Gunasekaran Raja, Sebastian Knorr, Vasantharaj Rajagopal, Kapal Dev",
            conference: "IEEE VTC 2021 93rd  Vehicular Technology Conference - Workshop, Helsinki, Finland, pp. 1-5, doi: 10.1109/VTC2021-Spring51267.2021.9448937.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9448937",
            year: "2021",
            domain: ["UAV"]
        },
    {
            title: "DA-WDGN: Drone-Assisted Weed Detection using GLCM-M features and NDIRT indices",
            author: "Gunasekaran Raja, Kapal Dev, Nisha Deborah Philips, Mohamed Suhaib, Deepakraj M, Ramesh Krishnan Ramasamy",
            conference: "IEEE INFOCOM 2021 International Conference on Computer Communications - Workshop, pp. 1-6, doi: 10.1109/INFOCOMWKSHPS51825.2021.9484598.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9484598",
            year: "2021",
            domain: ["Networks"]
        },
    {
            title: "Optimized D-RAN Aware Data Retrieval for 5G Information Centric Networks",
            author: "Kottilingam Kottursamy, Atta ur Rehman Khan, Banupriya Sadayappillai, Gunasekaran Raja",
            conference: "Springer Wireless Personal Communications, doi: doi.org/10.1007/s11277-021-09392-1.",
            doi: "https://link.springer.com/article/10.1007/s11277-021-09392-1",
            year: "2021",
            domain: ["Networks"]
        },
    {
            title: "SP-CIDS: Secure and Private Collaborative IDS for VANETs",
            author: "Gunasekaran Raja, Sudha Anbalagan, Geetha Vijayaraghavan, Sudhakar Theerthagiri, Saran Vaitangarukav Suryanarayan, Xin-Wen Wu",
            conference: "IEEE Transactions on Intelligent Transportation Systems, vol. 22, no. 7, pp. 4385-4393.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9269477",
            year: "2020",
            domain: ["AV"]
        },
      {
            title: "Intelligent Reward based Data Offloading in Next Generation Vehicular Networks",
            author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Sudha Anbalagan, Sheeba Backia Marry Baskaran, Kathiroli Raja, and Ali Kashif Bashir",
            conference: "IEEE Internet of Things Journal, vol. 7, no. 5, pp. 3747–3758.",
            doi: "https://ieeexplore.ieee.org/document/9001008",
            year: "2020",
            domain: ["Networks"]
        },
    {
            title: "A Novel Spectrum Sharing Scheme using Dynamic Long Short-Term Memory with CP-OFDMA in 5G Networks",
            author: "Sunil Jacob, Varun G Menon, Saira Joseph, Vinoj P G, Alireza Jolfaei, Jibin Lukose, Gunasekaran Raja",
            conference: "IEEE Transactions on Cognitive Communications and Networking, doi: 10.1109/TCCN.2020.2970697.",
            doi: "https://ieeexplore.ieee.org/document/8977557",
            year: "2020",
            domain: ["Networks"]
        },
    {
            title: "Quality of Service Provisioning for Heterogeneous Services in Cognitive Radio-enabled Internet of Things",
            author: "Amjad Ali, Li Feng, Ali Kashif Bashir, Shaker El-Sappagh, Syed Hassan Ahmed, Muddesar Iqbal and Gunasekaran Raja",
            conference:  "IEEE Transactions on Network Science and Engineering, vol. 7, issue 1, pp. 328-342.",
            doi: "https://ieeexplore.ieee.org/document/8502867",
            year: "2020",
            domain: ["Networks"]
        },
    {
            title: "A Quantum Safe Key Hierarchy and Dynamic Security Association for LTE/SAE in 5G Scenario",
            author: "Rajakumar Arul, Gunasekaran Raja, Alaa Omran Almagrabi, Mohammed Saeed Alkatheiri, Sajjad Hussain Chauhdary, Ali Kashif Bashir",
            conference: "IEEE Transactions on Industrial Informatics, vol. 16, no. 1, pp. 681-690.",
            doi: "https://ieeexplore.ieee.org/document/8882310",
            year: "2020",
            domain: ["Networks"]
        },
    {
            title: "Collisionless Fast Pattern Formation Mechanism for Dynamic Number of UAVs",
            author: "G. Raja, V. S. Saran, S. Anbalagan, A. K. Bashir, M. Imran and N. Nasser",
            conference: "IEEE GLOBECOM 2020 - Global Communications Conference, Taipei, Taiwan, pp. 1-6, doi: 10.1109/GLOBECOM42002.2020.9322085.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9322085",
            year: "2020",
            domain: ["UAV"]
        },
    {
            title: "Authorized Arming and Safeguarded Landing Mechanisms for Drones",
            author: "S. Anbalagan, G. Raja, K. Kottursamy, G. S. Aparna, J. Kumaresan and M. Ihsan",
            conference: "IEEE GLOBECOM Global Communications Conference-Workshops, Taipei, Taiwan, 2020, pp. 1-6, doi: 10.1109/GCWkshps50303.2020.9367472.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9367472",
            year: "2020",
            domain: ["UAV"]
        },
    {
            title: "Dynamic Polygon Generation for Flexible Pattern Formation in Large-Scale UAV Swarm Networks",
            author: "G. Raja, K. Kottursamy, A. Theetharappan, K. Cengiz, A. Ganapathisubramaniynan",
            conference: "IEEE GLOBECOM Global Communications Conference- Workshops, Taipei, Taiwan,  pp. 1-6, doi: 10.1109/GCWkshps50303.2020.9367501.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9367501",
            year: "2020",
            domain: ["UAV"]
        },
    {
            title: "AI-Powered Blockchain - A Decentralized Secure Multiparty Computation Protocol for IoV",
            author: "Gunasekaran Raja, Yelisetty Manaswini, Gaayathri Devi Vivekanandan, Harish Sampath, Kapal Dev, Ali Kashif Bashir",
            conference: "EEE INFOCOM 2020, International Conference on Computer Communications -Workshop Toronto, Canada, Jul. 6-9, pp. 865-870.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9162866",
            year: "2020",
            domain: ["Blockchain"]
        },
    {
            title: "SDN-enabled Traffic Alert System for IoV in Smart Cities",
            author: "Gunasekaran Raja, Priyanka Dhanasekaran, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Ali Kashif Bashir",
            conference: "IEEE INFOCOM 2020, International Conference on Computer Communications -Workshop Toronto, Canada, Jul. 6-9, pp. 1093-1098.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9162888",
            year: "2020",
            domain: ["Networks"]
        },
    {
            title: "An optimal multitier resource allocation of cloud RAN in 5G using machine learning",
            author: "Ali Kashif Bashir, Rajakumar Arul, Shakila Basheer, Gunasekaran Raja, Ramkumar Jayaraman and Nawab Muhammad Faseeh Qureshi",
            conference: "WILEY - Transactions on Emerging Telecommunications Technologies, doi:  doi.org/10.1002/ett.3627.",
            doi: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ett.3627",
            year: "2019",
            domain: ["Networks"]
        },
    {
            title: "SAFER: Crowdsourcing based Disaster Monitoring System using Software-Defined Fog Computing",
            author: "Gunasekaran Raja, Anil Thomas",
            conference: "Springer Mobile Networks and Application, doi: 10.1007/s11036-019-01267-x.",
            doi: "https://link.springer.com/article/10.1007/s11036-019-01267-x",
            year: "2019",
            domain: ["Networks"]
        },
    {
            title: "FINDER: A D2D based Critical Communications Framework for Disaster Management in 5G",
            author: "Anil Thomas, Gunasekaran Raja",
            conference: "Springer Peer-to-Peer Networking and Applications, vol. 12, issue 4, pp. 912-923.",
            doi: "https://link.springer.com/article/10.1007/s12083-018-0689-2",
            year: "2019",
            domain: ["Networks"]
        },
    {
            title: "A Console GRID leveraged Authentication and Key Agreement Mechanism for LTE/SAE",
            author: "Rajakumar Arul, Gunasekaran Raja, Ali Kashif Bashir, Junaid Chaudhry and Amjad Ali",
            conference: "IEEE Transactions on Industrial Informatics, vol. 14, no. 6, pp. 2677–2689.",
            doi: "https://ieeexplore.ieee.org/document/8319431",
            year: "2018",
            domain: ["Networks"]
        },
    {
            title: "Interference Mitigation Based on Radio Aware Channel Assignment for Wireless Mesh Networks",
            author: "Ramkumar Jayaraman, Gunasekaran Raja, Ali Kashif Bashir, Chauhdary Sajjad Hussain, Ali Hassan and Mohammad A. Alqarni",
            conference: "Springer Wireless Personal Communications, vol. 101, issue 3, pp. 1539–1557.",
            doi: "https://link.springer.com/article/10.1007/s11277-018-5776-4",
            year: "2018",
            domain: ["Networks"]
        },
    {
            title: "QoS-aware frequency-based 4G+ relative authentication model for next generation LTE and its dependent public safety networks",
            author: "Sheeba Backia Mary Bhaskaran, Gunasekaran Raja, Ali Kashif Bashir and Masayuki Murata",
            conference: "IEEE Access, vol. 5, pp. 21977–21991.",
            doi: "https://ieeexplore.ieee.org/document/8055545",
            year: "2017",
            domain: ["Networks"]
        },
    {
            title: "The Future Usage of Smart Phones",
            author: "Rajakumar Arul, Gunasekaran Raja, Sudha Anbalagan, Dhananjay Kumar and Ali Kashif Bashir",
            conference: "IEEE Internet Policy Newsletter",      
     doi: "https://internetinitiative.ieee.org/newsletter/march-2017/the-future-usage-of-smart-phones",
            year: "2017",
            domain: ["Networks"]
        },
    {
            title: "Channel assignment based coding mechanism for reliable transmission for smart cities",
            author: "Ramkumar Jayaraman and Gunasekaran Raja",
            conference: "Springer Cluster Computing, doi: 10.1007/s10586-017-1193-9.",
            doi: "https://link.springer.com/article/10.1007/s10586-017-1193-9",
            year: "2017",
            domain: ["Networks"]
        },
    {
            title: "SDN-Assisted Learning Approach for Data Offloading in 5G HetNets",
            author: "Sudha Anbalagan, Dhananjay Kumar, Dipak Ghosal, Gunasekaran Raja and Muthuvalliammai V",
            conference: "Springer Mobile Networks and Applications, vol. 22, no. 4, pp. 771–782.",
            doi: "https://link.springer.com/article/10.1007/s11036-017-0838-5",
            year: "2017",
            domain: ["Networks"]
        },
    {
            title: "A compatibility vector technique for cooperative scheduling and channel assignment algorithm in broadband wireless networks",
            author: "Ramkumar Jayaraman, Gunasekaran Raja, Dipak Ghosal, Rajakumar Arul and Sabareesh Kumar A",
            conference: "Springer Mobile Networks and Applications, vol. 22, no. 4, pp. 730–742.",
            doi: "https://link.springer.com/article/10.1007/s11036-017-0841-x",
            year: "2017",
            domain: ["Networks"]
        },
    {
            title: "Blind Key Distribution Mechanism to Secure Wireless Metropolitan Area Network",
            author: "Sheeba Backia Mary Baskaran and Gunasekaran Raja",
            conference: "Springer CSI Transactions on ICT, vol. 4, issue. 2, pp. 157–163.",
            doi: "https://link.springer.com/article/10.1007/s40012-016-0110-3",
            year: "2016",
            domain: ["Networks"]
        },
    {
            title: "Novel Key Management Scheme to Minimize Handoff Latency in IEEE 802.16m Networks",
            author: "Kathiroli R, Arivudainambi D, Gunasekaran R, Jayashree P, Aarthi R and Syama B",
            conference: "Springer National Academy Science Letters, vol. 39, no. 1, pp. 29-33.",
            doi: "https://link.springer.com/article/10.1007/s40009-015-0393-1",
            year: "2016",
            domain: ["Networks"]
        },
    {
            title: "Reduced overhead Frequent User Authentication in EAP-Dependent Broadband Wireless Networks",
            author: "Gunasekaran Raja, Sheeba Backia Mary Bhaskaran, Dipak Ghosal and Jayashree padmanabhan",
            conference: "Springer Mobile Networks and Applications, vol. 21, issue 3, pp. 523–538.",
            doi: "https://link.springer.com/article/10.1007/s11036-015-0642-z",
            year: "2015",
            domain: ["Networks"]
        },
    {
            title: "Mitigating Channel Usage in Cooperative Caching for Mobile Ad hoc Networks",
            author: "R. Gunasekaran, V. Rhymend Uthariaraj and V.P. Divya",
            conference: "INDERSCIENCE - Ad Hoc and Ubiquitous Computing, vol. 7, no. 2, pp. 87–99.",
            doi: "https://dl.acm.org/doi/10.1504/IJAHUC.2011.038995",
            year: "2011",
            domain: ["Networks"]
        },
    {
            title: "Efficient algorithms to solve Broadcast Scheduling problem in WiMAX mesh networks",
            author: "R. Gunasekaran, S. Siddharth, P. Krishnaraj, M. Kalaiarasan and V. Rhymend Uthariaraj",
            conference: "Elsevier Computer Communications, vol. 33, issue 11, pp. 1325–1333.",
            doi: "https://www.sciencedirect.com/science/article/abs/pii/S0140366410001258",
            year: "2010",
            domain: ["Networks"]
        },
    {
            title: "A Distributed Mechanism for Handling of Adaptive/Intelligent Selfish Misbehavior at MAC Layer in Mobile Ad hoc networks",
            author: "R. Gunasekaran, V. Rhymend Uthariaraj, U. Yamini, R. Sudharsan and S. Sujitha Priyadarshini",
            conference: "Springer Journal of Computer Science and Technology, vol. 24, no. 3, pp. 472–481.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2009",
            domain: ["Networks"]
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
    })
}
renderPublication()
