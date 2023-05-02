var yearArray = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016","2015"];
var overAllDomains = ["Healthcare", "UAV", "AV", "Blockchain", "Networks"]
const yearContainer = document.querySelector(".year-container")
let activeYear = "2023"
const publications = [
    {
        title: "IIDS: Intelligent Intrusion Detection System for Sustainable Development in Autonomous Vehicles",
        author: "Sudha Anbalagan, Gunasekaran Raja, Sugeerthi Gurumoorthy, Deepak Suresh R, Kapal Dev",
        conference: "IEEE Transactions on Intelligent Transportation Systems, doi: 10.1109/TITS.2023.3271768.",
        doi: "#",
        year: "2023",
        domain: ["AV"]
    },
    {
        title: "AI-empowered Trajectory Anomaly Detection and Classification in 6G-V2X",
        author: "Gunasekaran Raja, Mubeena Begum, Sugeerthi Gurumoorthy, Deepak Suresh R, Ponnada Srividya, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        conference: "IEEE Transactions on Intelligent Transportation Systems, doi: 10.1109/TITS.2022.3197446.",
        doi: "https://ieeexplore.ieee.org/document/9863890",
        year: "2023",
        domain: ["AV"]
    },
    {
            title: "Smart Navigation and Energy Management Framework for Autonomous Electric Vehicles in Complex Environments",
            author: "Gunasekaran Raja, Gayathri Saravanan, Sahaya Beni Prathiba, Zahid Akhtar,  Sunder Ali Khowaja,  Kapal Dev",
            conference: "IEEE Internet of Things Journal, doi: 10.1109/JIOT.2023.3244854.",
            doi: "https://ieeexplore.ieee.org/abstract/document/10044202",
            year: "2023",
            domain: ["AV"]
     },
    {
            title: "DTBV: A Deep Transfer-Based Bone Cancer Diagnosis System Using VGG16 Feature Extraction",
            author: "G. Suganeshwari, R. Balakumar, Kalimuthu Karuppanan, Sahaya Beni Prathiba, Sudha Anbalagan and Gunasekaran Raja",
            conference: "MDPI - Diagnostics, doi: doi.org/10.3390/diagnostics13040757.",
            doi: "https://www.mdpi.com/2075-4418/13/4/757#",
            year: "2023",
            domain: ["Networks"]
      },
    {
            title: "Vision-Based Ingenious Lane Departure Warning System for Autonomous Vehicles",
            author: "Sudha Anbalagan, Ponnada Srividya, B. Thilaksurya, Sai Ganesh Senthivel, G. Suganeshwari and Gunasekaran Raja",
            conference: "MDPI-Sustainability, doi: doi.org/10.3390/su15043535.",
           doi: "https://www.mdpi.com/2071-1050/15/4/3535",
            year: "2023",
            domain: ["AV"]
      },
    {
            title: "Nexus of Deep Reinforcement Learning and Leader-Follower Approach for AIoT Enabled Aerial Networks",
            author: "Gunasekaran Raja, Selvam Essaky,  Aishwarya Ganapathisubramaniyan, Yashvandh Baskar",
            conference: "IEEE Transactions on Industrial Informatics, doi: 10.1109/TII.2022.3226529.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9969936",
            year: "2022",
            domain: ["Networks"]
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
            domain: ["AV"]
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
            title: "PERFECT: Positional-forgEry Resistant traFfic gap Estimation for Connected inTersection management",
            author: "Shajina Anand, Gunasekaran Raja, Neeraj Kumar, Renuka Narayanan, Ashmitha Raja, K. Bhavani Venkata Karthik",
            conference: "IEEE Transactions on Vehicular Technology, vol. 71, no. 8, pp. 8853-8863.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9773976",
            year: "2022",
            domain: ["Networks"]
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
            title: "Optimization of 5G/6G Telecommunication Infrastructure through an NFV-Based Element Management System",
            author: "Arunkumar Arulappan, Gunasekaran Raja, Kalpdrum Passi, Aniket Mahanti",
            conference: "MDPI - Symmetry, doi: doi.org/10.3390/sym14050978.",
            doi: "https://www.mdpi.com/2073-8994/14/5/978", 
          doi: "https://ieeexplore.ieee.org/abstract/document/9838856",
            year: "2022",
            domain: ["Networks"]
        },
    {
            title: "QoE-aware Mobile Computation Offloading in Mobile Edge Computing",
            author: "Dharmalingam Adhimuga Sivasakthi, Gunasekaran Raja",
            conference: "WILEY - Concurrency and Computation: Practice and Experience, doi: 10.1002/cpe.6853.",
            doi: "https://onlinelibrary.wiley.com/doi/abs/10.1002/cpe.6853",
            year: "2022",
            domain: ["Networks"]
        },
    {
            title: "Energy-Efficient End-to-End Security for Software Defined Vehicular Networks",
            author: "Gunasekaran Raja, Sudha Anbalagan, Geetha Vijayaraghavan, Priyanka Dhanasekaran, Yasser Al-Otaibi, Ali Kashif Bashir",
            conference: "IEEE Transactions on Industrial Informatics, vol. 17, no. 8, pp. 5730–5737.",
            doi: "https://ieeexplore.ieee.org/abstract/document/9151385",
            year: "2021",
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
            title: "Dynamic Ambient HetNet for Hybrid Data Communication and Transmission in IoT Networks",
            author: "D. Adhimuga Sivasakthi, Gunasekaran Raja",
            conference: "Springer Journal of Ambient Intelligence and Humanized Computing, vol. 12, pp. 8899-8911.",
            doi: "https://link.springer.com/article/10.1007/s12652-020-02689-2",
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
            author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Sudha Anbalagan, Sheeba Backia Mary Baskaran, Kathiroli Raja, and Ali Kashif Bashir",
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
            domain: ["AV"]
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
            title: "SDN-Assisted Efficient LTE-WiFi Aggregation in Next Generation IoT Networks",
            author: "Sudha Anbalagan, Dhananjay Kumar, Mercy Faustina J, Gunasekaran Raja, Waleed Ejaz and Ali Kashif Bashir",
            conference: "Elsevier Future Generation Computer Systems, doi: 10.1016/j.future.2017.12.013.",
            doi: "https://www.sciencedirect.com/science/article/abs/pii/S0167739X17310907",
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
           title: "TLS Cipher Suite: Secure Communication of 6LoWPAN Devices",
             author: "Renuka Narayanan, Jayashree S, Nisha Deborah Philips, A.M. Saranya, Sahaya Beni Prathiba and Gunasekaran Raja",
            conference: "roc. 11th IEEE International Conference on Advanced Computing (ICoAC)",
            doi: "https://doi.org/10.1109/ICoAC48765.2019.246840",
            year: "2019",
            domain: ["Networks"]
    },
    {
           title: "Mirage: A Protocol for Decentralized and Secured Communication of IoT Devices",
             author: "S. Anand, G. Raja, G. Anand, S. H. Chauhdary and A. K. Bashir",
            conference: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), pp. 1074-1080.",
            doi: "https://doi.org/10.1109/UEMCON47517.2019.8993110",
            year: "2019",
            domain: ["Networks"]
    },
    {
           title: "IoTexpert: Interconnection, Interoperability and Integration of IoT Platforms",
           author: "Geetanjali V, Indraja Subramanian, Gunashree Kannan, Sahaya Beni Prathiba and Gunasekaran Raja",
            conference: "Proc. 11th IEEE International Conference on Advanced Computing (ICoAC)",
            doi: "https://doi.org/10.1109/UEMCON47517.2019.8993110",
            year: "2019",
            domain: ["Networks"]
    },
    {
           title: "Controlling Data Congestion by Efficient Backpressure Routing Algorithm in V2V Communication for Autonomous Vehicles",
           author: "Kriti Gupta, Sahaya Beni Prathiba and Gunasekaran Raja",
            conference: "Proc. 11th IEEE International Conference on Advanced Computing (ICoAC)",
            doi:  "https://doi.org/10.1109/ICoAC48765.2019.246841",
            year: "2019",
            domain: [ "AV"]
    },
    {
           title: "Securing Data Transmission against Multi Cell MIMO Eavesdropper in 5G Wireless Networks using MOSPR",
             author:  "Nirupama S, Harini R, Akshaya K, Devipriya B, Sahaya Beni Prathiba and Gunasekaran Raja",
            conference: "Proc. 11th IEEE International Conference on Advanced Computing (ICoAC)",
            doi: "https://doi.org/10.1109/ICoAC48765.2019.246845",
            year: "2019",
            domain: [ "Networks"]
    },
    {
           title: "Inter-UAV Collision Avoidance using Deep-Q-Learning in Flocking Environment",
             author: "G. Raja, S. Anbalagan, V. S. Narayanan, S. Jayaram and A. Ganapathisubramaniyan",
            conference: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), pp. 1089-1095.",
            doi: "https://doi.org/10.1109/UEMCON47517.2019.8992966",
            year: "2019",
            domain: ["UAV"]
    },
    {
           title: "AECC: An Enhanced Public Key Cryptosystem for User Defined Messages",
             author: "S. Anand, G. Raja and A. Ganapathisubramaniyan",
            conference: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON), New York, USA, pp. 0673-0678.",
            doi: "https://doi.org/10.1109/UEMCON47517.2019.8992992",
            year: "2019",
            domain: ["Networks"]
    },
    {
           title: "Secured LTE-Wi-Fi Offloading Using RTT Based Evading Malicious Access Point (EMAP) Algorithm",
             author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Gayatri Iyer Sethuraman, Sajjad Hussain Chauhdary and Ali Hassan",
            conference: "Proc. IEEE 4th International Conference on Computer and Communication Systems (ICCCS), Singapore, pp. 527-532.",
            doi: "https://doi.org/10.1109/CCOMS.2019.8821712",
            year: "2019",
            domain: ["Networks"]
    },
    {
            title: "SDN assisted Stackelberg Game model for LTE-WiFi offloading in 5G networks",
            author: "Sudha Anbalagan, Dhananjay Kumar, Gunasekaran Raja, Alkondan Balaji ",
            conference: "Elsevier Digital Communication and Networks, vol. 5, Issue 4, pp. 268-275.",
            doi: "https://www.sciencedirect.com/science/article/pii/S2352864819300422",
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
           title: "Intrusion Detector for Blockchain based IoT Networks",
             author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Gokul Anand and Gowshika",
            conference: "Proc. 10th IEEE International Conference on Advanced Computing (ICoAC), Chennai, pp. 328–332.",
            doi: "https://doi.org/10.1109/ICoAC44903.2018.8939074",
            year: "2018",
            domain: ["Networks"]
    },
    {
           title: "Leaky Bucket based congestion control in Wireless Sensor Networks",
             author: "Srinivas J, Gowtham Y, Shagul Amith S, Chaitanya K, Archana R, Gunasekaran Raja",
            conference: "Proc. 10th IEEE International Conference on Advanced Computing (ICoAC), Chennai, pp. 172-174.",
            doi: "https://doi.org/10.1109/ICoAC44903.2018.8939078",
            year: "2018",
            domain: ["Networks"]
    },
    {
           title: "Cognitive Intelligent Transportation System for Smart Cities",
             author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Madhumitha Sri Selvakumar, Thiruveni Ayyarappan and Karthikeyan Mahadevan",
            conference: "Proc. 10th IEEE International Conference on Advanced Computing (ICoAC), Chennai, pp. 146–152.",
            doi: "https://doi.org/10.1109/ICoAC44903.2018.8939091",
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
           title: "A Lightweight Incognito Key Exchange Mechanism for LTE-A Assisted D2D Communication",
             author: "Sheeba Backia Mary Baskaran and Gunasekaran Raja",
            conference: "Proc. 9th IEEE International Conference on Advanced Computing (ICoAC), Chennai, pp. 301–307.",
            doi: "https://doi.org/10.1109/ICoAC.2017.8441370",
            year: "2017",
            domain: ["Networks"]
    },
    {
           title: "Simple & Secure Mechanism for establishing connection between D2D Communication in 5G Scenario",
             author: "Rajakumar Arul, Gunasekaran Raja and Ramkumar Jayaraman",
            conference: "Proc. SAIRAP International Conference on Internet of Things IoT (ICIOT), pp. 45–50.",
            doi: "https://doi.org/10.1109/ICoAC.2017.8441370",
            year: "2017",
            domain: ["Networks"]
    },
    {
           title: "SDN Assisted Middlebox Synchronization Mechanism for Next Generation Mobile Data Management System",
             author: "Gunasekaran Raja and Kottilingam Kottursamy",
            conference: "Proc. 14th IEEE International Conference on Advanced and Trusted Computing (ATC), San Francisco, USA, pp. 1502–1508.",
            doi: "https://ieeexplore.ieee.org/abstract/document/8397620",
            year: "2017",
            domain: ["Networks"]
    },
    {
           title: "Energy Efficient Data Offloading Mechanism",
             author: "Bharathi U, Mercy Faustina J, Elavarasi B and Gunasekaran R",
            conference: "Proc. IEEE International Conference on Telecommunication, Power Analysis and Computing Techniques (ICTPACT)",
            doi: "http://dx.doi.org/10.1109/UIC-ATC.2017.8397620",
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
            title: "Network Coding with Buffer Scheme in Multicast for Broadband Wireless Network",
            author: "Gunasekaran Raja and Ramkumar Jayaraman and Rajakumar Arul and Kottilingam Kottursamy",
            conference: "International Journal of Electronics and Communication Engineering, vol. 10, no. 6, pp. 898–903.",
            doi: "https://www.researchgate.net/profile/Rajakumar-Arul/publication/303883066_Network_Coding_with_Buffer_Scheme_in_Multicast_for_Broadband_Wireless_Network/links/575e4cb808aed8846216737f/Network-Coding-with-Buffer-Scheme-in-Multicast-for-Broadband-Wireless-Network.pdf",
            year: "2016",
            domain: ["Networks"]
    },
    {
           title: "Sensor-to-Vehicle Communication by using VANETs for Urban Parking",
             author: "Arunkumar Arulappan, Gunasekaran Raja, Sheeba Backia Mary Baskaran, RajaKumar Arul, Kottilingam Kottursamy, Ramkumar Jayaraman and Adhimuga Sivasakthi",
            conference: "Proc. International Conference on Innovations in Engineering and Technology (ICET), Singapore, pp. 19–27.",
            doi: "http://dx.doi.org/10.1109/UIC-ATC.2017.8397620",
            year: "2016",
            domain: ["Networks"]
    },
    {
           title: "Fast Authentication Using User Path Prediction in Wireless Broadband Access",
           author: "Rajakumar Arul, Gunasekaran Raja, Kottilingam Kottursamy, Ramkumar Jayaraman, Sheeba Backia Mary Baskaran, Sathya Pavithra and Swaminathan Venkatraman",
            conference: "Proc. International Conference on Innovations in Engineering and Technology (ICET), Singapore, pp. 57–65.",
            doi: "http://dx.doi.org/10.1109/UIC-ATC.2017.8397620",
            year: "2016",
            domain: ["Networks"]
    },
    {       
     title: "BAY-RACE:  Bayesian-Resource Allocation Conditional Entities algorithm under uncertainty in distributed WMN",
            author: "Ramkumar Jayaraman, Gunasekaran Raja, Rajakumar Arul, Sheeba Backia Mary Baskaran, Arunkumar Arulppan, Kottilingam Kottursamy",
            conference: "Proc. International Conference on Innovations in Engineering and Technology (ICET), Singapore, pp. 66–74.",
            doi: "https://www.researchgate.net/publication/306399437_BAY-_RACE_Bayesian-Resource_Allocation_Conditional_Entities_algorithm_under_uncertainty_in_distributed_WMN",
            year: "2016",
            domain: ["Networks"]
        },
    {
            title: "Fault-tolerant Interworking Authentication Model for Non 3GPP - 3GPP Access",
            author: "Sheeba Backia Mary Baskaran, Gunasekaran Raja, Ramkumar Jayaraman, ArunkumarArulappan, Rajakumar Arul, Kottilingam Kottursamy",
            conference: "Proc. International Conference on Innovations in Engineering and Technology (ICET), Singapore, pp. 75–82.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2016",
            domain: ["Networks"]
        },
    {
            title: " A Data Activity-Based Server-Side Cache Replacement for Mobile Devices",
            author: "Kottilingam Kottursamy, Gunasekaran Raja and K. Saranya",
            conference: "Springer Proc. Artificial Intelligence and Evolutionary Computations in Engineering Systems, pp. 579–589.",
            doi: "https://link.springer.com/chapter/10.1007/978-81-322-2656-7_53",
            year: "2016",
            domain: ["Networks"]
        },
    {
            title: "An Improved Database Synchronization Mechanism for Mobile Data using Software Defined Networking Control",
            author: "Kottilingam Kottursamy, Gunasekaran Raja, Jayashree Padmanaban and Vaishnavi Srinivasan",
            conference: "Elsevier Computers and Electrical Engineering, vol. 57, pp. 93–103.",
            doi: "https://www.sciencedirect.com/science/article/abs/pii/S0045790616300064",
            year: "2016",
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
            title: "User Path Prediction Based Key Caching and Authentication Mechanism for Broadband Wireless Networks",
            author: "Rajakumar Arul, Gunasekaran Raja, Kottilingam Kottursamy, Sathya Pavithra and Swaminathan Venkatraman",
            conference: "Springer Wireless Personal Communications, vol. 94, issue 4, pp. 2645–2664.",
            doi: "https://link.springer.com/article/10.1007/s11277-016-3877-5",
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
     title: "A Survey on Scheduling Mechanisms in Broadband Wireless Networks",
            author: "Gunasekaran Raja, Ramkumar Jayaraman, Rajakumar Arul and Raja Kothandaraman",
            conference: "International Journal of Advanced Computational Engineering and Networking, vol. 2, no. 3, pp. 214–219.",
            doi: "http://dx.doi.org/10.12720/lnit.2.3.214-219",
            year: "2014",
            domain: ["Networks"]
    },
    {
           title: "BISYNC-BINARY XML BASED DATA SYNCHRONIZATION FOR MOBILE DEVICES",
             author: "Gunasekaran Raja and Kottilingam Kottursamy",
            conference: "International Journal of Advanced Computational Engineering and Networking, vol. 2, issue 7, pp. 104–109.",
            doi: "http://dx.doi.org/10.12720/lnit.2.3.214-219",
            year: "2014",
            domain: ["Networks"]
    },
    {
           title: "An Efficient Handover Prediction & Initiation Algorithm for Vehicular Communication In 4G Wireless Networks",
             author: "Gunasekaran R, Rajakumar A, Raja K, Ramkumar J, Sudhir S.K. Kumar, and Umapathy S",
            conference: "Lecture Notes on Information Theory (LNIT), vol. 2, no. 2, pp. 121–128.",
            doi:"http://dx.doi.org/10.12720/lnit.2.2.121-128",
            year: "2014",
            domain: ["Networks"]
    },
    {
             title: "A New Path Loss Model for LTE Network to Address Propagation Delay",
             author: "J. Ramkumar and R. Gunasekaran",
            conference: "International Journal of Computer and Communication Engineering (IJCCE), vol. 2, no. 4, pp. 413–416.",
            doi: "https://www.researchgate.net/profile/Ramkumar-Jayaraman/publication/269817464_A_New_Path_Loss_Model_for_LTE_Network_to_Address_Propagation_Delay/links/584da81208ae4bc899330c49/A-New-Path-Loss-Model-for-LTE-Network-to-Address-Propagation-Delay.pdf",
            year: "2013",
            domain: ["Networks"]
    },
    {
            title: "Cross-layer Optimization using Game Theory to Alleviate Unfairness in Wireless Networks",
            author: "R. Gunasekaran, E. Niranjani, S. Suganya, D. Vivekananthan and K. Raja",
            conference: "Proc. IEEE International Conference on Knowledge Information and Creativity Support Systems (KICSS), Melbourne, Australia, pp. 7–13.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2012",
            domain: ["Networks"]
        },
    {
           title: "A Mobility Estimation Approach to Handoff Minimization in Future Generation Hierarchical Networks",
             author: "R. Aarthi, M.R. Sruthi, S. Vaishnavi and R. Gunasekaran",
            conference: "International Journal of Communication, Computation and Innovation, vol. 3, issue 2, pp. 202–206.",
            doi: "10.7763/IJCCE.2013.V2.216",
            year: "2012",
            domain: ["Networks"]
    },
    {
            title: "Efficient Relay Station Placement Strategy for Broadband Wireless Networks - 4G",
            author: "Nivedita M and Gunasekaran R",
            conference: "Proc. IEEE International Conference on Recent Trends in Information Technology, Chennai,  pp. 274–278.",
            doi: "https://ieeexplore.ieee.org/document/6206817",
            year: "2012",
            domain: ["Networks"]
        },
    {
            title: "QoS Enhancement in Future Generation Network by Handoff Delay Minimization",
            author: "Priya K and Gunasekaran R",
            conference: "Proc. IEEE International Conference on Recent Trends in Information Technology, Chennai, pp. 279–283.",
            doi: " https://ieeexplore.ieee.org/document/6206825",
            year: "2012",
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
           title: "Prevention Approach for Scrambling in Wireless Broadband Networks",
             author: "R. Gunasekaran, P. Jayashree, S. Shyam, V. Prashanth and N.V. Anantharam",
            conference: "International Journal of Communication, Computation and Innovation, vol. 2, issue 2, pp. 147–152.",
            doi: "https://ieeexplore.ieee.org/abstract/document/5282482",
            year: "2011",
            domain: ["Networks"]
    },
    {
            title: "Guaranteeing Secure Transmission in Time Critical Networks through Dual Sense Multiple Control Channel Protocol",
            author: "R. Gunasekaran, Syed Talat Iqbal and T.V. Vaidyanath",
            conference: "Proc. International Conference on Wireless Technologies for Humanitarian Relief (ACWR), Coimbatore, India, pp. 433–440.",
            doi: " https://dl.acm.org/doi/10.1145/2185216.2185322",
            year: "2011",
            domain: ["Networks"]
        },
    {
            title: "A Novel Approach for Enciphering Data of Smaller Bytes",
             author: "R. Gunasekaran, R. Satheesh Kumar, E. Pradeep and K. Naveen",
            conference: "International Journal of Computer Theory and Engineering (IJCTE), vol. 2, no. 4, pp. 654–659.",
            doi: "http://www.ijcte.org/papers/218-H296.pdf",
            year: "2010",
            domain: ["Networks"]
    },
    {
            title: "Throughput Enhancement in Ad hoc networks using Virtual Carrier Sensing Mechanisms",
            author: " R. Gunasekaran, P. Sumitha and V. Rhymend Uthariaraj",
            conference: "Proc. International Conference on Innovations in Engineering and Technology (ICET), Singapore, pp. VI105–VI109.",
            doi: " https://ieeexplore.ieee.org/document/5559848",
            year: "2010",
            domain: ["Networks"]
        },
    {
            title: " QoS Based Path Selection in IEEE 802.16j MMR Networks",
            author: " R. Gunasekaran, I. Jamin Mohamed, S. Manikandan, P. Ramkumar, P. Jayashree",
            conference: "Proc. International Conference on Informatics, Cybernetics, and Computer Applications",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2010",
            domain: ["Networks"]
        },
    {
            title: " Enhanced Cost Effective Symmetric Key Algorithm for Small Amount of Data",
            author: "R. Gunasekaran, R. Satheesh Kumar, E. Pradeep and K. Naveen",
            conference: "Proc. International Conference on Signal Acquisition and Processing (IACSIT), Bangalore, pp.354–357.",
            doi: " https://ieeexplore.ieee.org/document/5432771",
            year: "2010",
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
      },
    {
            title: "An Improved Parallel Genetic Algorithm for Path Bandwidth calculation in TDMA-based Mobile Ad hoc Networks",
            author: "R. Gunasekaran, S. Siddharth, M. Rahghavan, R. Srivathsan, V. Rhymend Uthariaraj",
            conference: " Proc. International Conference on Advances in Computing, Control and Telecommunication Technologies, Trivandrum, pp. 220–226.",
            doi: "https://ieeexplore.ieee.org/document/5376739",
            year: "2009",
            domain: ["Networks"]
        },
    {
            title: " Construction and Maintenance of Virtual Backbone using Minimum CDS in MANET",
            author: " R. Gunasekaran, V. Rhymend Uthariaraj, S. Vinodhini",
            conference: "Proc. First National Conference on Computing Technology",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2009",
            domain: ["Networks"]
        },
    {
            title: "Prevention of Denial of Service Attacks and Performance Enhancement in Mobile Ad hoc Networks",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. 6th International Conference on Information Technology- New Generations (ITNG), Las Vegas, USA, pp. 640–645.",
            doi: "https://ieeexplore.ieee.org/document/4808835",
            year: "2009",
            domain: ["Networks"]
        },
    {
           title: "Selective suspension of transmission for avoiding priority reversal in Mobile Ad hoc Networks",
             author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Ubiquitous Computing and Communication Journal, vol. 3, no. 5",
            doi: "https://citeseerx.ist.psu.edu/document?repid=rep1&type=pdf&doi=d493ca50e81222f0973c97a3006698ca1693e023",
            year: "2008",
            domain: ["Networks"]
    },
    {
           title: "Penalization of Selfish and Misbehaving Nodes at MAC layer in Mobile Adhoc Networks",
             author: "R. Gunasekaran, V. Rhymend Uthariaraj, U. Yamini, R. Sudharsan and S. Sujitha Priyadarshini",
            conference: "i-manager's Journal on Software Engineering, vol. 2, no. 3, pp. 22–30.",
            doi: "https://www.proquest.com/openview/c94aae8d7be329d06e42648c48f0b0b1",
            year: "2008",
            domain: ["Networks"]
    },
    {
            title: "Packet Dropping Alleviation in Mobile Ad hoc Networks by Power Saving AODV",
             author: "R. Gunasekaran, V.P. Divya, S. Sharanya and V. Rhymend Uthariaraj",
            conference: "Journal of Computer Science, vol. 2, issue 6, pp. 833–838.",
            doi: "10.7763/IJCTE.2010.V2.218",
            year: "2008",
            domain: ["Networks"]
    },
    {
            title: "Priority Scheduling in Mobile Ad Hoc Networks with Improved Bandwidth Utilization",
            author: " R. Gunasekaran, V. Rhymend Uthariaraj, R. Rajesh, S. Karthikeyan and S. Aravind",
            conference: "Proc. IEEE Canadian Conference on Electrical and Computer Engineering (CCECE), Ontario, Canada, pp. 1955–1958.",
            doi: "https://ieeexplore.ieee.org/document/4564885",
            year: "2008",
            domain: ["Networks"]
        },
    {
            title: "Detection and Prevention of Selfish and Misbehaving Nodes at MAC Layer in Mobile Ad Hoc Networks",
            author: "R. Gunasekaran, V. Rhymend Uthariaraj, U. Yamini, R. Sudharsan and S. Sujitha Priyadarshini",
            conference: "Proc. IEEE Canadian Conference on Electrical and Computer Engineering (CCECE), Ontario, Canada, pp. 1945–1948.",
            doi: "https://ieeexplore.ieee.org/document/4564883",
            year: "2008",
            domain: ["Networks"]
        },
    {
            title: "Mitigating Self-Contention and Improving Performance in MAC Layer of Mobile Ad Hoc Networks",
            author: "R. Gunasekaran, V.Rhymend Uthariaraj and A. Shamugasundaram",
            conference: "Proc. International Conference on Advanced Computing (ICAC), Maharashtra, pp. 1–4.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2008",
            domain: ["Networks"]
        },
    {
            title: "Detection and Prevention of MAC Layer Selfish Misbehavior through Encryption Technique in Mobile Ad Hoc Networks (MANET)",
            author: " R. Gunasekaran, V. Rhymend Uthariaraj, U. Yamini, R. Sudharsan and S. Sujitha Priyadarshini",
            conference: "Proc. International Conference on Signal Processing, Communications and Networking (ICSCN), Chennai, pp. 685–689.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2008",
            domain: ["Networks"]
        },
    {
            title: " An Enhanced MAC Protocols for Differentiated Services in Mobile Ad Hoc Networks (MANET)- A Profile Based Approach",
            author: " R.Gunasekaran and V.Rhymend Uthariaraj",
            conference: "Proc. 5th International Conference on IT in Asia (CITA), Sarawak, Malaysia, pp. 306–308.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2007",
            domain: ["Networks"]
        },
    {
            title: " Differentiated Bandwidth Allocation in Mobile Ad hoc Networks (MANET)- A Profile Based Approach",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. International Conference on Signal Processing, Communications and Networking (ICSCN), Chennai,  pp. 40-44.",
            doi: "https://ieeexplore.ieee.org/document/4156580",
            year: "2007",
            domain: ["Networks"]
        },
    {
            title: "Exploiting On-Demand Differentiated Quality of Service (QoS) for Entities in Infrastructured Wireless Networks with Hybrid Routing",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. National conference on Advanced Computing (NCAC), Chennai, pp. 108–113.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2006",
            domain: ["Networks"]
        },
    {
            title: "Self Organized security system in Mobile Ad Hoc Networks MANET",
            author: "R. Gunasekaran and T. Ruso",
            conference: "Proc. IEEE National Conference on Information Communications and Convergence, Chennai, pp. 37–41.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2006",
            domain: ["Networks"]
        },
    {
            title: "Agent-Based Cluster Routing in Mobile Ad Hoc Networks (MANET)",
            author: "R. Gunasekaran, K. Prabakaran and S. Kayalvizhi",
            conference: "Proc. IEEE National Conference on Information Communications and Convergence, Chennai, pp. 12–18.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2006",
            domain: ["Networks"]
        },
    {
            title: "An Infrastructured-Architectural Model (IAM) for Pervasive & Ubiquitous Computing",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. International Conference on Wireless Networking and Mobile Computing (ICWNMC), Chennai,  pp. 111–115.i.",
            doi: "https://www.scitepress.org/PublishedPapers/2005/25633/25633.pdf",
            year: "2005",
            domain: ["Networks"]
        },
    {
            title: "Deploying Profiled and Non-Profiled (PNP) Architecture supporting differentiated services in Infrastuctured Networks with Self-organized Public-key Management",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. International Conference on Information Security (ICIS), Pondicherry, pp. 30–34.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2005",
            domain: ["Networks"]
        },
    {
            title: "Multicast Routing Overheads and Bandwidth Constraints in Mobile Ad Hoc Networks (MANET)",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. National Conference on Advances in Electronics & Telecommunication Engineering (NCAETE), Osmanabad, pp.139–144.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2005",
            domain: ["Networks"]
        },
    {
            title: "Secure Routing Vulnerabilities and Threats in Peer-Peer and Ad Hoc Networks",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. National Conference on Mobile Computing, (NCMC), Chennai, pp. 94–99.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2005",
            domain: ["Networks"]
        },
    {
            title: "Proactive and Reactive measures in Secure Link State Routing Algorithm for Mobile Ad hoc Networks (MANET)",
            author: "R. Gunasekaran and V. Rhymend Uthariaraj",
            conference: "Proc. National conference on Issues and Trends in Wireless Networks (IT-WiNS), Punjab, pp. 282–286.",
            doi: "https://link.springer.com/article/10.1007/s11390-009-9238-z",
            year: "2004",
            domain: ["Networks"]
        }
    ]
    


let currentYear = null
const publicationsContainer = document.querySelector(".publications-container")
console.log(publications.length)
renderPublication = () => {
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
renderPublication()