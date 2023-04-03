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
        domain: "UAV, Computer Vision, Blockchain, Deep Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/abhishek-manoharan-0294661b0/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/balakumar.jpg",
        name: "Balakumar R",
        domain: "Healthcare, Computer Vision, Machine Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/balakumarr15/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/thilak.jpg",
        name: "Thilaksurya B",
        domain: "AV, Deep Learning, Computer Vision, AI",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/thilaksurya-b-549b73219/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/nishanthini.jpg",
        name: "Nishanthini S",
        domain: "UAV, Computer Vision, Blockchain, Deep Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/bhargavi.jpg",
        name: "Bhargavi R",
        domain: "Healthcare, Computer Vision, Machine Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/bhargavi-rajendiran-1300a0259",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/srividya.png",
        name: "Ponnada Srividya",
        domain: "AV, AI, Deep Learning, Computer Vision",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/ponnada-srividya-b08280190/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/vamsi.jpg",
        name: "Vamsi Raju M",
        domain: "UAV, Computer Vision, Blockchain, Deep Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/vamsi-raju-m/",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/shalini.jpg",
        name: "Dampella Shalini Priya",
        domain: "Healthcare, Computer Vision, Machine Learning",
        facebook: "#",
        twitter: "#",
        linkedin: "#",
        year: "fourth-year"
    },
    {
        img: "./assets/img/people/suhruth.png",
        name: "Suhruth K C",
        domain: "AV, Computer Vision, Deep Learning",
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
        domain: "Machine learning, Full stack, Immersive Technologies",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sasana-ravi-27b0481ab",
        year: "third-year"
    },
    {
        img: "./assets/img/people/sidhaarthan.png",
        name: "Sidhaarthan VM",
        domain: "Machine learning, AI, UAV",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/sidharthan-vm-261b2a220/",
        year: "third-year"
    },
    {
        img: "./assets/img/people/rakshitha.png",
        name: "Rakshitha P",
        domain: "Machine learning, AI, Data Analytics",
        facebook: "#",
        twitter: "#",
        linkedin: "https://www.linkedin.com/in/rakshitha-prakasam-985079206/",
        year: "third-year"
    },
    {
        img: "./assets/img/people/joevita.png",
        name: "Joevita Faustina Doss F",
        domain: "UAV, Computer vision, Machine learning",
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
        fourthYearContainer.innerHTML += stud
    }
    if(student.year === "third-year") {
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
        thirdYearContainer.innerHTML += stud
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