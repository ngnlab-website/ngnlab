const fourthYearContainer = document.querySelector(".fourth-year")
const alumniContainer = document.querySelector(".alumni")
const thirdYearContainer = document.querySelector(".third-year")
const otherContainer = document.querySelector(".others")
const students = [
    {
        img: "./assets/img/people/saiganesh.jpg",
        name: "Sai Ganesh Senthivel",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sai-ganesh-senthivel/",
        year: "alumni"
    },
    {
        img: "./assets/img/people/sugeerthi.png",
        name: "Sugeerthi Gurumoorthy",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sugeerthi-gurumoorthy-62142b181/",
        year: "alumni"
    },
    {
        img: "./assets/img/people/abhishek.jpg",
        name: "Abhishek Manoharan",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/abhishek-manoharan-0294661b0/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/balakumar.jpg",
        name: "Balakumar R",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/balakumarr15/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/thilak.jpg",
        name: "Thilaksurya B",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/thilaksurya-b-549b73219/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/nishanthini.jpg",
        name: "Nishanthini S",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/bhargavi.jpg",
        name: "Bhargavi R",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/bhargavi-rajendiran-1300a0259",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/srividya.png",
        name: "Ponnada Srividya",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/ponnada-srividya-b08280190/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/vamsi.jpg",
        name: "Vamsi Raju M",
        domain: "UAV, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/vamsi-raju-m/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/shalini.jpg",
        name: "Dampella Shalini Priya",
        domain: "Healthcare",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/shalini-priya-ab9a461a5",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/suhruth.png",
        name: "Suhruth K C",
        domain: "AV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/chenchu-suhruth-b56298198/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/deepak.png",
        name: "Deepak Suresh R",
        domain: "UAV, AI, Blockchain",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/deepak-suresh-a0b57020a/",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sasana.png",
        name: "Sasana R",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sasana-ravi-27b0481ab",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sidhaarthan.png",
        name: "Sidhaarthan VM",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sidharthan-vm-261b2a220/",
        year: "third-year"
    },
    {
        img: "./assets/img/people/rakshitha.png",
        name: "Rakshitha P",
        domain: "IoT",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/rakshitha-prakasam-985079206/",
        year: "third-year"
    },
    {
        img: "./assets/img/people/joevita.png",
        name: "Joevita Faustina Doss F",
        domain: "UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/joevita-faustina-doss-a5a565246",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sudarsan.jpg",
        name: "Sudarsan Kumar N",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sudarsan-kumar-n-53535b211/",
        year: "others"
    },
    {
        img: "./assets/img/people/krishna.jpg",
        name: "Krishna Padmanabhan",
        domain: "",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/krishna-padmanabhan-016321167/",
        year: "others"
    },
]
students.forEach(student => {
    if(student.year === "fourth-year") {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("student-member-card")
        let face1Div = document.createElement("div");
        face1Div.classList.add("face")
        face1Div.classList.add("face1")
        let face1Content = document.createElement("div");
        face1Content.classList.add("content")
        let face1Img = document.createElement("img")
        face1Img.src = student.img
        face1Img.alt = student.name
        face1Content.appendChild(face1Img)
        face1Div.appendChild(face1Content)

        let face2Div = document.createElement("div")
        face2Div.classList.add("face")
        face2Div.classList.add("face2")
        let face2Content = document.createElement("div")
        face2Content.classList.add("content")
        let face2Name = document.createElement("div")
        face2Name.innerHTML = student.name
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
        socialMedia.innerHTML = `<a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>`
        face2Content.appendChild(face2Name)
        face2Content.appendChild(face2Domain)
        face2Content.appendChild(socialMedia)
        face2Div.appendChild(face2Content)
        parentDiv.appendChild(face1Div)
        parentDiv.appendChild(face2Div)
        fourthYearContainer.appendChild(parentDiv)
        // let stud = `<div class="student-member-card">
        //                 <div class="face face1">
        //                     <div class="content">
        //                         <img src="${student.img}" />
        //                     </div>
        //                 </div>
        //                 <div class="face face2">
        //                     <div class="content">
        //                         <div class="name">${student.name}</div>
        //                         <div class="role">${student.domain}</div>
        //                         <div class="social-media"> 
        //                             <a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>`
        // fourthYearContainer.innerHTML += stud
    }
    if(student.year === "third-year") {
        let parentDiv = document.createElement("div");
        parentDiv.classList.add("student-member-card")
        let face1Div = document.createElement("div");
        face1Div.classList.add("face")
        face1Div.classList.add("face1")
        let face1Content = document.createElement("div");
        face1Content.classList.add("content")
        let face1Img = document.createElement("img")
        face1Img.src = student.img
        face1Img.alt = student.name
        face1Content.appendChild(face1Img)
        face1Div.appendChild(face1Content)

        let face2Div = document.createElement("div")
        face2Div.classList.add("face")
        face2Div.classList.add("face2")
        let face2Content = document.createElement("div")
        face2Content.classList.add("content")
        let face2Name = document.createElement("div")
        face2Name.innerHTML = student.name
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
        socialMedia.innerHTML = `<a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>`
        face2Content.appendChild(face2Name)
        face2Content.appendChild(face2Domain)
        face2Content.appendChild(socialMedia)
        face2Div.appendChild(face2Content)
        parentDiv.appendChild(face1Div)
        parentDiv.appendChild(face2Div)
        thirdYearContainer.appendChild(parentDiv)
        // let stud = `<div class="student-member-card">
        //                 <div class="face face1">
        //                     <div class="content">
        //                         <img src="${student.img}" />
        //                     </div>
        //                 </div>
        //                 <div class="face face2">
        //                     <div class="content">
        //                         <div class="name">${student.name}</div>
        //                         <div class="role">${student.domain}</div>
        //                         <div class="social-media">
        //                             <a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>`
        // thirdYearContainer.innerHTML += stud
    }
    if(student.year === "others") {
        let stud = `<div class="student-member-card">
                        <div class="face face1">
                            <div class="content">
                                <img src="${student.img}" />
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <div class="name">${student.name}</div>
                                <div class="role">${student.domain}</div>
                                <div class="social-media">
                                    <a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>`
        otherContainer.innerHTML += stud
    }
    if(student.year === "alumni") {
        let stud = `<div class="student-member-card">
                        <div class="face face1">
                            <div class="content">
                                <img src="${student.img}" />
                            </div>
                        </div>
                        <div class="face face2">
                            <div class="content">
                                <div class="name">${student.name}</div>
                                <div class="role">${student.domain}</div>
                                <div class="social-media">
                                    <a href="${student.linkedin}" target="_blank"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>`
        alumniContainer.innerHTML += stud
    }
})