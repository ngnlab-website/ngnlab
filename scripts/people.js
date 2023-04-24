const fourthYearContainer = document.querySelector(".fourth-year")
const pgContainer = document.querySelector(".pg")
const phdContainer = document.querySelector(".phd")
const alumniContainer = document.querySelector(".alumni")
const thirdYearContainer = document.querySelector(".third-year")
const otherContainer = document.querySelector(".others")
const students = [
    {
        img: "./assets/img/people/sreenithi.jpg",
        name: "Sreenithi Ramesh",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sreenithi-r-14b48b1b1",
        mail: "snithi2112@gmail.com",
        batch: "2022-2024",
        currentPosition: "Post Graduate",
        year: "pg"
    },
    {
        img: "./assets/img/people/selvam.jpg",
        name: "Selvam Essaky",
        domain: "UAV, AV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sai-ganesh-senthivel/",
        mail: "selvame.mit@@gmail.com",
        batch: "2021-present",
        currentPosition: "Research Scholar",
        year: "phd"
    },
    {
        img: "./assets/img/people/saiganesh.jpg",
        name: "Sai Ganesh Senthivel",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sai-ganesh-senthivel/",
        mail: "ssenthiv@andrew.cmu.edu",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "alumni"
    },
    {
        img: "./assets/img/people/sugeerthi.png",
        name: "Sugeerthi Gurumoorthy",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sugeerthi-gurumoorthy-62142b181/",
        mail: "sugeerthiguru@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "alumni"
    },
    {
        img: "./assets/img/people/abhishek.jpg",
        name: "Abhishek Manoharan",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/abhishek-manoharan-0294661b0/",
        mail: "abhimano789@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/balakumar.jpg",
        name: "Balakumar R",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/balakumarr15/",
        mail: "balakumarr2001@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/thilak.jpg",
        name: "Thilaksurya B",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/thilaksurya-b-549b73219/",
        mail: "thilaksurya29@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/nishanthini.jpg",
        name: "Nishanthini S",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        mail: "nishasekar1826@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/bhargavi.jpg",
        name: "Bhargavi R",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/bhargavi-rajendiran-1300a0259",
        mail: "krishnabhargavi2002@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/srividya.jpg",
        name: "Ponnada Srividya",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/ponnada-srividya-b08280190/",
        mail: "psrivi1234@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/vamsi.jpg",
        name: "Vamsi Raju M",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/vamsi-raju-m/",
        mail:"vamsisays@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/shalini.jpg",
        name: "Dampella Shalini Priya",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/shalini-priya-ab9a461a5",
        mail: "shalinipriya927@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/suhruth.png",
        name: "Suhruth K C",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/chenchu-suhruth-b56298198/",
        mail: "kcsuhruth2001@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/deepak.png",
        name: "Deepak Suresh R",
        domain: "UAV, AI, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/deepak-suresh-a0b57020a/",
        mail: "deepaksuresh1406@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sasana.png",
        name: "Sasana R",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sasana-ravi-27b0481ab",
        mail: "sasanaravi2020@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sidhaarthan.png",
        name: "Sidhaarthan VM",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sidharthan-vm-261b2a220/",
        mail: "sidharth2405@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/rakshitha.png",
        name: "Rakshitha P",
        domain: "IoT",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/rakshitha-prakasam-985079206/",
        mail: "rakshithaprakasam@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/joevita.png",
        name: "Joevita Faustina Doss F",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/joevita-faustina-doss-a5a565246",
        mail: "joevita2002@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sreevinay.jpg",
        name: "Sree Vinay R",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sree-vinay-r-523998211",
        mail: "rsreevinay@gmail.com",
        batch: "2020-2024",
        currentPosition: "Final Year",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sudarsan.jpg",
        name: "Sudarsan Kumar N",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sudarsan-kumar-n-53535b211/",
        year: "others",
        mail: "n.sudarsankumar@gmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
    },
    {
        img: "./assets/img/people/krishna.jpg",
        name: "Krishna Padmanabhan",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/krishna-padmanabhan-016321167/",
        mail: "krishna2752@hotmail.com",
        batch: "2019-2023",
        currentPosition: "Final Year",
        year: "others"
    },
]
students.forEach(student => {
    if(student.year !== "others") {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("student-member-card")
        let face1Div = document.createElement("div");
        face1Div.classList.add("face")
        face1Div.classList.add("face1")
        let face1Content = document.createElement("div");
        face1Content.classList.add("content")
        face1Content.innerHTML = `
                                    <img src="${student.img}" alt="${student.name}" />
                                    <div class="content-details">
                                        <h3>${student.name}</h3>
                                        <a class="h3-mail" href="mailto:${student.mail}">${student.mail}</a>
                                        <a href="${student.linkedin}" class="linkedin-img" target="_blank">Linkedin</a>
                                    </div>
        `
        face1Div.appendChild(face1Content)

        let face2Div = document.createElement("div")
        face2Div.classList.add("face")
        face2Div.classList.add("face2")
        let face2Content = document.createElement("div")
        face2Content.classList.add("content")
        let face2Name = document.createElement("div")
        face2Name.innerText = "Domains"
        let face2Domain = document.createElement("div")
        face2Domain.classList.add("role")
        let domains = student.domain.split(", ")
        domains.forEach(domain => {
            let url = document.createElement("a")
            url.innerHTML = domain
            url.target ="_blank"
            let urlVal = domain.split(" ")
            urlVal = urlVal.join("_")
            url.href = "./domains/" + urlVal + '.html'
            face2Domain.appendChild(url)
        })
        let socialMedia = document.createElement("div")
        socialMedia.classList.add("social-media")
        socialMedia.innerHTML = `
                                    <div class="name">${student.batch}</div>
                                    <div class="role">${student.currentPosition}</div>
                                `
        face2Content.appendChild(face2Name)
        face2Content.appendChild(face2Domain)
        face2Content.appendChild(socialMedia)
        face2Div.appendChild(face2Content)
        parentDiv.appendChild(face1Div)
        parentDiv.appendChild(face2Div)
        if(student.year === "fourth-year")
            fourthYearContainer.appendChild(parentDiv)
        if(student.year === "third-year")
            thirdYearContainer.appendChild(parentDiv)
        if(student.year === "alumni")
            alumniContainer.appendChild(parentDiv)
        if(student.year === "pg")
            pgContainer.appendChild(parentDiv)
        if(student.year === "phd")
            phdContainer.appendChild(parentDiv)
    }
    if(student.year === "others") {
        let stud = `<div class="student-member-card">
                        <div class="face face1">
                            <div class="content">
                                <img src="${student.img}" alt="${student.name}" />
                                <div class="content-details">
                                    <h3>${student.name}</h3>
                                    <a href="mailto:${student.mail}">${student.mail}</a>
                                    <a href="${student.linkedin}" class="linkedin-img" target="_blank">Linkedin</a>
                                </div>
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <div class="social-media">
                                    <div class="name">${student.batch}</div>
                                    <div class="role">${student.currentPosition}</div>
                                </div>
                            </div>
                        </div>
                    </div>`
        otherContainer.innerHTML += stud
    }
})