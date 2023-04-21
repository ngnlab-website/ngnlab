var yearArray = ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
var overAllDomains = ["Healthcare", "UAV", "AV", "Blockchain", "IoT"]
const yearContainer = document.querySelector(".year-container")
let activeYear = "2023"
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
        title: "MLB-IoD: Multi Layered Blockchain Assisted 6G Internet of Drones Ecosystem",
        author: "Gunasekaran Raja, Sai Ganesh Senthivel, Sivaganesh Balaganesh, Balaji Rajaguru Rajakumar, Vishal Ravichandran, Mohsen Guizani",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/abstract/document/9916071",
        year: "2023",
        domain: ["Blockchain"]
    },
    {
        title: "Smart Navigation and Energy Management Framework for Autonomous Electric Vehicles in Complex Environments",
        author: "Gunasekaran Raja, Gayathri Saravanan, Sahaya Beni Prathiba, Zahid Akhtar, Sunder Ali Khowaja, Kapal Dev",
        doi: "IEEE Internet of Things Journal. https://ieeexplore.ieee.org/abstract/document/10044202/",
        year: "2023",
        domain: ["AV"]
    },
     {
        title: "AI-Empowered Trajectory Anomaly Detection and Classification in 6G-V2X",
        author: "Gunasekaran Raja, Mubeena Begum, Sugeerthi Gurumoorthy, Deepak Suresh Rajendran, Ponnada Srividya, Kapal Dev, Nawab Muhammad Faseeh Qureshi",
        doi: "IEEE Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/abstract/document/9863890",
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
        title: "Intelligent Cooperative Collision Avoidance at Overtaking and Lane Changing Maneuver in 6G-V2X Communications",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Neeraj Kumar",
        doi: "IEEE Transactions on Vehicular Technology. https://ieeexplore.ieee.org/document/9612041",
        year: "2022",
        domain: ["AV"]
    },
      {
        title: "Federated learning empowered computation offloading and resource management in 6G-V2X",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Sudha Anbalagan, Kapal Dev, Sugeerthi Gurumoorthy, Atshaya P Sankaran",
        doi: "IEEE Transactions on Network Science and Engineering. https://ieeexplore.ieee.org/abstract/document/9511234/",
        year: "2022",
        domain: ["IoT"]
    },
   {
          title: "SDN-assisted safety message dissemination framework for vehicular critical energy infrastructure",
        author: "Sahaya Beni Prathiba, Gunasekaran Raja, Ali Kashif Bashir, Ahmad Ali AlZubi, Brij Gupta",
        doi: "IEEE Transactions on Industrial Informatics.https://ieeexplore.ieee.org/abstract/document/9540253/",
        year: "2022",
        domain: ["AV"]
    },
      {
        title: "An Efficient Formation Control mechanism for Multi-UAV Navigation in Remote Surveillance",
        author: "Gunasekaran Raja, Yashvandh Baskar, Priyanka Dhanasekaran, Raheel Nawaz, Keping Yu",
        doi: "2021 IEEE Globecom Workshops (GC Wkshps). https://ieeexplore.ieee.org/document/9682094",
        year: "2021",
        domain: ["UAV"]
    },
     {
        title: "Optimized D-RAN Aware Data Retrieval for 5G Information Centric Networks",
        author: "Kottilingam Kottursamy, Atta ur Rehman Khan, Banupriya Sadayappillai, Gunasekaran Raja",
        doi: "Wireless Personal Communications. https://link.springer.com/article/10.1007/s11277-021-09392-1",
        year: "2021",
        domain: ["IoT"]
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
        title: "Dynamic ambient HetNet for hybrid data communication and transmission in IoT networks",
        author: "D Adhimuga Sivasakthi, Raja Gunasekaran",
        doi: "Journal of Ambient Intelligence and Humanized Computing.https://link.springer.com/article/10.1007/s12652-020-02689-2",
        year: "2021",
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
    },
     {
        title: "Authorized arming and safeguarded landing mechanism for drones",
        author: "G Raja, S Anbalagan, K Kottursamy, GS Aparna, J Kumaresan, M Ihsan",
        doi: "IEEE GLOBECOM 2020 Workshop on V2X Technologies and Advanced Security/Privacy. https://usir.salford.ac.uk/id/eprint/59083/",
        year: "2020",
        domain: ["UAV"]
    },
     {
        title: "Authorized arming and safeguarded landing mechanisms for drones",
        author: "Sudha Anbalagan, Gunasekaran Raja, Kottilingam Kottursamy, Guggilam Swetha Aparna, Jeyalakshmi Kumaresan, Mansoor Ihsan",
        doi: "IEEE Globecom Workshops (GC Wkshps) https://ieeexplore.ieee.org/abstract/document/9367472",
        year: "2020",
        domain: ["UAV"]
    },  
     {
        title: "Dynamic polygon generation for flexible pattern formation in large-scale UAV swarm networks",
        author: "Gunasekaran Raja, Kottilingam Kottursamy, Ajay Theetharappan, Korhan Cengiz, Aishwarya Ganapathisubramaniyan, Rupak Kharel, Keping Yu",
        doi: "IEEE Globecom Workshops (GC Wkshps). https://ieeexplore.ieee.org/abstract/document/9367501",
        year: "2020",
        domain: ["UAV"]
    }, 
     {
        title: "Collisionless fast pattern formation mechanism for dynamic number of uavs",
        author: "Gunasekaran Raja, VS Saran, Sudha Anbalagan, Ali Kashif Bashir, Muhammad Imran, Nidal Nasser",
        doi: "GLOBECOM 2020-2020 IEEE Global Communications Conference. https://ieeexplore.ieee.org/abstract/document/9322085",
        year: "2020",
        domain: ["UAV"]
    },
     {
        title: "SP-CIDS: Secure and private collaborative IDS for VANETs",
        author: "Gunasekaran Raja, Sudha Anbalagan, Geetha Vijayaraghavan, Sudhakar Theerthagiri, Saran Vaitangarukav Suryanarayan, Xin-Wen Wu",
        doi: "Transactions on Intelligent Transportation Systems. https://ieeexplore.ieee.org/abstract/document/9269477",
        year: "2020",
        domain: ["AV"]
    },  
     {
        title: "Energy-efficient end-to-end security for software-defined vehicular networks",
        author: "Gunasekaran Raja, Sudha Anbalagan, Geetha Vijayaraghavan, Priyanka Dhanasekaran, Yasser D Al-Otaibi, Ali Kashif Bashir",
        doi: "IEEE transactions on industrial informatics. https://ieeexplore.ieee.org/abstract/document/9151385",
        year: "2020",
        domain: ["AV"]
    },  
     {
        title: "SDN-enabled traffic alert system for IoV in smart cities",
        author: "Gunasekaran Raja, Priyanka Dhanasekaran, Sudha Anbalagan, Aishwarya Ganapathisubramaniyan, Ali Kashif Bashir. ",
        doi: "IEEE INFOCOM 2020-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS). https://ieeexplore.ieee.org/abstract/document/9162888",
        year: "2020",
        domain: ["IoT"]
    },  
     {
        title: "AI-powered blockchain-a decentralized secure multiparty computation protocol for IoV",
        author: "Gunasekaran Raja, Yelisetty Manaswini, Gaayathri Devi Vivekanandan, Harish Sampath, Kapal Dev, Ali Kashif Bashir",
        doi: "IEEE INFOCOM 2020-IEEE Conference on Computer Communications Workshops (INFOCOM WKSHPS). https://ieeexplore.ieee.org/abstract/document/9162866",
        year: "2020",
        domain: ["Blockchain"]
    },  
     {
        title: "SDN-assisted efficient LTE-WiFi aggregation in next generation IoT networks.",
        author: "Sudha Anbalagan, Dhananjay Kumar, Gunasekaran Raja, Waleed Ejaz, Ali Kashif Bashir",
        doi: "Future Generation Computer Systems. https://www.sciencedirect.com/science/article/abs/pii/S0167739X17310907",
        year: "2020",
        domain: ["IoT"]
    },  
     {
        title: "Intelligent reward-based data offloading in next-generation vehicular networks",
        author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Sudha Anbalagan, Sheeba Backia Marry Baskaran, Kathiroli Raja, Ali Kashif Bashir.",
        doi: "IEEE Internet of Things Journal. https://ieeexplore.ieee.org/abstract/document/9001008",
        year: "2020",
        domain: ["IoT"]
    }, 
   {
        title: "A novel spectrum sharing scheme using dynamic long short-term memory with CP-OFDMA in 5G networks",
        author: "Sunil Jacob, Varun G Menon, Saira Joseph, PG Vinoj, Alireza Jolfaei, Jibin Lukose, Gunasekaran Raja",
        doi: "IEEE Transactions on Cognitive Communications and Networking. https://ieeexplore.ieee.org/abstract/document/8977557",
        year: "2020",
        domain: ["5G/6G Networks"]
    },  
    {
        title: "Quality of service provisioning for heterogeneous services in cognitive radio-enabled Internet of Things",
        author: "Amjad Ali, Li Feng, Ali Kashif Bashir, Shaker El-Sappagh, Syed Hassan Ahmed, Muddesar Iqbal, Gunasekaran Raja",
        doi: "IEEE Transactions on Network Science and Engineering. https://ieeexplore.ieee.org/abstract/document/8502867",
        year: "2020",
        domain: ["IoT"]
    },  
    {
        title: "Intelligent reward-based data offloading in next-generation vehicular networks",
        author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Sudha Anbalagan, Sheeba Backia Marry Baskaran, Kathiroli Raja, Ali Kashif Bashir.",
        doi: "IEEE Internet of Things Journal. https://ieeexplore.ieee.org/abstract/document/9001008",
        year: "2019",
        domain: ["IoT"]
    },  
    {
        title: "TLS cipher suite: Secure communication of 6LoWPAN devices",
        author: "Renuka Narayanan, S Jayashree, Nisha Deborah Philips, AM Saranya, Sahaya Beni Prathiba, Gunasekaran Raja",
        doi: "11th International Conference on Advanced Computing (ICoAC) https://ieeexplore.ieee.org/abstract/document/9087256",
        year: "2019",
        domain: ["5G/6G Networks"]
    },  
   {
        title: "Controlling Data Congestion by Efficient Backpressure Routing Algorithm in V2V Communication for Autonomous Vehicles",
        author: "Kriti Gupta, Sahaya Beni Prathiba, Gunasekaran Raja",
        doi: "11th International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/9087300",
        year: "2019",
        domain: ["Autonomous Vehicles"]
    },  
    {
        title: "Securing data transmission against multi cell MIMO eavesdropper in 5G wireless networks using MOSPR",
        author: "S Nirupama, R Harini, K Akshaya, B Devipriya, Sahaya Beni Prathiba, Gunasekaran Raja",
        doi: "11th International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/9087304",
        year: "2019",
        domain: ["5G wireless networks"]
    },  
    {
        title: "IoTexpert: Interconnection, interoperability and integration of IoT platforms",
        author: "V Geetanjali, Indraja Subramanian, Gunashree Kannan, Sahaya Beni Prathiba, Gunasekaran Raja",
        doi: "11th International Conference on Advanced Computing (ICoAC) https://ieeexplore.ieee.org/abstract/document/9087295",
        year: "2019",
        domain: ["IoT"]
    },  
    {
        title: "Special issue on “Evolution of information and communication technology towards 5G: New Emerging Areas, technologies, protocols, and applications",
        author: "Gunasekaran Raja, Ali Kashif Bashir, Anwer Al-Dulaimi, Thamarai Selvi Somasundaram, Shahid Mumtaz",
        doi: "Digital Communications and Networks.",
        year: "2019",
        domain: ["5G/6G Networks"]
    },  
    {
        title: "SDN assisted Stackelberg Game model for LTE-WiFi offloading in 5G networks",
        author: "Dhananjay Kumar, Gunasekaran Raja, Alkondan Balaji.",
        doi: "Digital Communications and Networks. https://www.sciencedirect.com/science/article/pii/S2352864819300422",
        year: "2019",
        domain: ["5G networks"]
    },  
    {
        title: "Channel assignment based coding mechanism for reliable transmission for smart cities",
        author: "Ramkumar Jayaraman, Gunasekaran Raja",
        doi: " Cluster Computing. https://link.springer.com/article/10.1007/s10586-017-1193-9",
        year: "2019",
        domain: ["Cluster Computing"]
    },  
    {
        title: "A quantum-safe key hierarchy and dynamic security association for LTE/SAE in 5G scenario",
        author: "Rajakumar Arul, Gunasekaran Raja, Alaa Omran Almagrabi, Mohammed Saeed Alkatheiri, Sajjad Hussain Chauhdary, Ali Kashif Bashir",
        doi: "IEEE Transactions on Industrial Informatics. https://ieeexplore.ieee.org/abstract/document/8882310",
        year: "2019",
        domain: ["5G network"]
    },  
    {
        title: "AECC: An Enhanced Public Key Cryptosystem for User Defined Messages",
        author: "Shajina Anand, Gunasekaran Raja, Aishwarya Ganapathisubramaniyan",
        doi: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). https://ieeexplore.ieee.org/abstract/document/8992992",
        year: "2019",
        domain: ["Crypto"]
    },  
     {
        title: "AECC: An Enhanced Public Key Cryptosystem for User Defined Messages",
        author: "Shajina Anand, Gunasekaran Raja, Aishwarya Ganapathisubramaniyan",
        doi: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). https://ieeexplore.ieee.org/abstract/document/8992992",
        year: "2019",
        domain: ["Crypto"]
    },  
     {
        title: "AECC: An Enhanced Public Key Cryptosystem for User Defined Messages",
        author: "Shajina Anand, Gunasekaran Raja, Aishwarya Ganapathisubramaniyan",
        doi: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). https://ieeexplore.ieee.org/abstract/document/8992992",
        year: "2019",
        domain: ["Crypto"]
    },  
     {
        title: "Inter-UAV collision avoidance using Deep-Q-learning in flocking environment",
        author: "Gunasekaran Raja, Sudha Anbalagan, Vikraman Sathiya Narayanan, Srinivas Jayaram, Aishwarya Ganapathisubramaniyan",
        doi: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). https://ieeexplore.ieee.org/abstract/document/8992966",
        year: "2019",
        domain: ["UAV"]
    },  
     {
        title: "Mirage: A protocol for decentralized and secured communication of IoT devices",
        author: "Gunasekaran Raja, Gokul Anand, Sajjad Hussain Chauhdary, Ali Kashif Bashir",
        doi: "IEEE 10th Annual Ubiquitous Computing, Electronics & Mobile Communication Conference (UEMCON). https://ieeexplore.ieee.org/abstract/document/8993110",
        year: "2019",
        domain: ["IoT"]
    },  
     {
        title: "Safer: Crowdsourcing based disaster monitoring system using software defined fog computing",
        author: "Gunasekaran Raja, Anil Thomas",
        doi: " Mobile Networks and Applications. https://link.springer.com/article/10.1007/s11036-019-01267-x",
        year: "2019",
        domain: ["5G/6G Networks"]
    },  
     {
        title: "An optimal multitier resource allocation of cloud RAN in 5G using machine learning",
        author: " Ali Kashif Bashir, Rajakumar Arul, Shakila Basheer, Gunasekaran Raja, Ramkumar Jayaraman, Nawab Muhammad Faseeh Qureshi ",
        doi: "https://onlinelibrary.wiley.com/doi/abs/10.1002/ett.3627",
        year: "2019",
        domain: ["machine learning"]
    },  
    {
        title: "FINDER: A D2D based critical communications framework for disaster management in 5G",
        author: "Anil Thomas, Gunasekaran Raja",
        doi: " Peer-to-Peer Networking and Applications. https://link.springer.com/article/10.1007/s12083-018-0689-2",
        year: "2019",
        domain: ["5G Network"]
    },  
{
        title: "Secured LTE-Wi-Fi Offloading Using RTT Based Evading Malicious Access Point (EMAP) Algorithm",
        author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Gayatri Iyer Sethuraman, Sajjad Hussain Chauhdary, Ali Hassani ",
        doi: "IEEE 4th International Conference on Computer and Communication Systems (ICCCS). https://ieeexplore.ieee.org/abstract/document/8821712",
        year: "2019",
        domain: ["5G/6G Networks"]
    },  
{
        title: "User activity analysis driven anomaly detection in cellular network",
        author: "S Swarnalaxmi, I Elakkiya, M Thilagavathi, Anil Thomas, Gunasekaran Raja",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8939064 ",
        year: "2018",
        domain: ["Network security"]
    },
{
        title: "Effective Cryptography Mechanism for Enhancing Security in Smart Key System",
        author: "Madhumitha Sri Selvakumar, Rohini Purushothkumar, Arunkumar Ramakrishnan, Gunasekaran Raja",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8939095",
        year: "2018",
        domain: ["Crypto"]
    },
{
        title: "Cognitive intelligent transportation system for smart cities",
        author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Madhumitha Sri Selvakumar, Thiruveni Ayyarappan, Karthikeyan Mahadevan",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8939091",
        year: "2018",
        domain: ["Internet of Vehicles"]
    },
{
        title: "Leaky bucket based congestion control in wireless sensor networks",
        author: "J Srinivas, Y Gowtham, K Chaitanya, R Archana, Gunasekaran Raja",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8939078",
        year: "2018",
        domain: ["5G/6G Networks"]
    },
{
        title: "Intrusion detector for blockchain based IoT networks",
        author: "Gunasekaran Raja, Aishwarya Ganapathisubramaniyan, Gokul Anand",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8939074",
        year: "2018",
        domain: ["Blockchain"]
    },
{
        title: "Mobility management for critical time and delay tolerant applications in vehicular networks",
        author: "G Gina Rose, R Gunasekaran, G Aishwarya",
        doi: "2018 Tenth International Conference on Advanced Computing (ICoAC). ",
        year: "2018",
        domain: ["Internet of Vehicles"]
    },
{
        title: "Interference mitigation based on radio aware channel assignment for wireless mesh networks",
        author: "Ramkumar Jayaraman, Gunasekaran Raja, Ali Kashif Bashir, Chauhdary Sajjad Hussain, Ali Hassan, Mohammed A Alqarni",
        doi: "Wireless Personal Communications. https://link.springer.com/article/10.1007/s11277-018-5776-4",
        year: "2018",
        domain: ["5G/6G Networks"]
    },
{
        title: "A console GRID leveraged authentication and key agreement mechanism for LTE/SAE",
        author: "Rajakumar Arul, Gunasekaran Raja, Ali Kashif Bashir, Junaid Chaudry, Amjad Ali",
        doi: "IEEE Transactions on Industrial Informatics. https://ieeexplore.ieee.org/abstract/document/8319431",
        year: "2018",
        domain: ["Cyber Security"]
    },
{
        title: "The future usage of smart phones",
        author: "Rajakumar Arul, Gunasekaran Raja, Sudha Anbalagan, Dhananjay Kumar, Ali Kashif Bashir",
        doi: "Future. https://internetinitiative.ieee.org/newsletter/march-2017/the-future-usage-of-smart-phones",
        year: "2018",
        domain: ["5G/6G Networks"]
    },
{
        title: "A lightweight incognito key exchange mechanism for LTE-A assisted D2D communication",
        author: "Sheeba Backia Mary Baskaran, Gunasekaran Raja",
        doi: "2017 ninth international conference on advanced computing (ICoAC). https://ieeexplore.ieee.org/abstract/document/8441370",
        year: "2017",
        domain: ["Blockchain"]
    },
{
        title: "QoS-aware frequency-based 4G+ relative authentication model for next generation LTE and its dependent public safety networks",
        author: "Sheeba Backia Mary Baskaran, Gunasekaran Raja, Ali Kashif Bashir, Masayuki Murata",
        doi: "IEEE Access. https://ieeexplore.ieee.org/abstract/document/8055545",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
{
        title: "SDN assisted middlebox synchronization mechanism for next generation mobile data management system",
        author: "Gunasekaran Raja, Kottilingam Kottursamy, Sajjad Hussain Chaudhary, Ali Hassan, Mohammed Alqarni",
        doi: "2017 IEEE SmartWorld, Ubiquitous Intelligence & Computing, Advanced & Trusted Computed, Scalable Computing & Communications, Cloud & Big Data Computing, Internet of People and Smart City Innovation. https://ieeexplore.ieee.org/abstract/document/8397620",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
{
        title: "A compatibility vector technique for cooperative scheduling and channel assignment algorithm in broadband wireless networks",
        author: "Ramkumar Jayaraman, Gunasekaran Raja, Dipak Ghosal, Rajakumar Arul, Sabareesh Kumar A",
        doi: "Mobile Networks and Applications. https://link.springer.com/article/10.1007/s11036-017-0841-x",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
{
        title: "SDN-assisted learning approach for data offloading in 5G HetNets",
        author: "Sudha Anbalagan, Dhananjay Kumar, Dipak Ghosal, Gunasekaran Raja, Muthuvalliammai V",
        doi: "Mobile Networks and Applications. https://link.springer.com/article/10.1007/s11036-017-0838-5",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
{
        title: "User path prediction based key caching and authentication mechanism for broadband wireless networks",
        author: "Rajakumar Arul, Gunasekaran Raja, Kottilingam Kottursamy, Pavithra Sathiyanarayanan, Swaminathan Venkatraman",
        doi: "Wireless Personal Communications. https://link.springer.com/article/10.1007/s11277-016-3877-5",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
{
        title: "An improved database synchronization mechanism for mobile data using software-defined networking control",
        author: "Kottilingam Kottursamy, Gunasekaran Raja, Jayashree Padmanabhan, Vaishnavi Srinivasan",
        doi: "Computers & Electrical Engineering. https://www.sciencedirect.com/science/article/abs/pii/S0045790616300064",
        year: "2017",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Blind key distribution mechanism to secure wireless metropolitan area network",
        author: "Sheeba Backia Mary Baskaran, Gunasekaran Raja",
       doi: " CSI transactions on ICT. https://link.springer.com/article/10.1007/s40012-016-0110-3",
        year: "2016",
        domain: ["Blockchain"]
    },
    {
    title: "Reduced overhead frequent user authentication in EAP-dependent broadband wireless networks.",
    author: "Gunasekaran Raja, Sheeba Backia Mary Baskaran, Dipak Ghosal, Jayashree Padmanabhan.",
 doi: "Mobile Networks and Applications. https://link.springer.com/article/10.1007/s11036-015-0642-z",
       year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Fast Authentication Using User Path Prediction in Wireless Broadband Access",
    author: "Sathya Pavithra and Swaminathan Venkatraman Rajakumar Arul, Gunasekaran Raja, Kottilingam Kottursamy, Ramkumar Jayaraman, Sheeba Backia Mary Baskaran.",
        doi: " International Conference on Innovations in Engineering and Technology (ICET), Singapore.",
        year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Network Coding with Buffer Scheme in Multicast for Broadband Wireless Network.",
        author: "Gunasekaran Raja, Ramkumar Jayaraman, Rajakumar Arul, Kottilingam Kottursamy.",
 doi: "International Journal of Electronics and Communication Engineering. https://www.researchgate.net/profile/Rajakumar-Arul/publication/303883066_Network_Coding_with_Buffer_Scheme_in_Multicast_for_Broadband_Wireless_Network/links/575e4cb808aed8846216737f/Network-Coding-with-Buffer-Scheme-in-Multicast-for-Broadband-Wireless-Network.pdf ",
        year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
   title: "Cooperative Cross Layer Topology for Concurrent Transmission Scheduling Scheme in Broadband Wireless Networks.",
        author: "Gunasekaran Raja, Ramkumar Jayaraman",
 doi: "International Journal of Computer and Information Engineering. https://publications.waset.org/10004514/cooperative-cross-layer-topology-for-concurrent-transmission-scheduling-scheme-in-broadband-wireless-networks ",
        year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Novel Key Management Scheme to Minimize Handoff Latency in IEEE 802.16 m Networks.",
        author: "R Kathiroli, D Arivudainambi, R Gunasekaran, P Jayashree, R Aarthi, B Syama",
 doi: "National Academy Science Letters. https://link.springer.com/article/10.1007/s40009-015-0393-1",
        year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Fault-tolerant Interworking Authentication Model for Non 3GPP – 3GPP Access.",
        author: "SBM Baskaran, Gunasekaran Raja, Ramkumar Jayaraman, Arunkumar Arulappan, Rajakumar Arul, Kottilingam Kottursamy. ",
   doi: "International Conference on Innovations in Engineering and Technology. ",
        year: "2016",
        domain: ["Cyber Security"]
    },
    {
        title: "BAY- RACE: Bayesian-Resource Allocation Conditional Entities algorithm under uncertainty in distributed WMN.",
        author: " Ramkumar Jayaraman, Gunasekaran Raja, Rajakumar Arul, SBM Baskaran, Arunkumar Arulppan, Kottilingam Kottursamy.",
        doi: " International Conference on Innovations in Engineering and Technology.",
        year: "2016",
        domain: ["5G/6G Networks"]
    },
    {
        title: "Sensor-to-Vehicle Communication by using VANETs for Urban Parking.",
        author: " Arunkumar Arulappan, Gunasekaran Raja, SBM Baskaran, Rajakumar Arul, Kottilingam Kottursamy, Ramkumar Jayaraman, Adhimuga Sivasakthi.",
        doi: " International Conference on Innovations in Engineering and Technology - ICET ",
        year: "2016",
        domain: ["Internet of Vehicles"]
    },
    {
        title: "A data activity-based server-side cache replacement for mobile devices.",
        author: " Kottilingam Kottursamy, Gunasekaran Raja, K Saranya.",
        doi: "Artificial Intelligence and Evolutionary Computations in Engineering Systems: Proceedings of ICAIECES 2015. https://link.springer.com/chapter/10.1007/978-81-322-2656-7_53",
        year: "2016",
        domain: ["5G/6G Networks"]
    }
]


let currentYear = null
const publicationsContainer = document.querySelector(".publications-container")
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