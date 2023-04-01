const fourthYearContainer = document.querySelector(".fourth-year")
const thirdYearContainer = document.querySelector(".third-year")
const otherContainer = document.querySelector(".others")
const students = [
    {
        img: "./assets/img/ngn3.jpg",
        name: "name",
        domain: "domain",
        facebook: "",
        twitter: "",
        linkedin: "",
        year: "fourth-year"
    },
    {
        img: "./assets/img/ngn4.jpg",
        name: "name",
        domain: "domain",
        facebook: "",
        twitter: "",
        linkedin: "",
        year: "third-year"
    },
    {
        img: "./assets/img/ngn4.jpg",
        name: "name",
        domain: "domain",
        facebook: "",
        twitter: "",
        linkedin: "",
        year: "others"
    }
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
                                    <a href="${student.facebook}"><img src="./assets/img/logos/facebook.svg" alt=""></a>
                                    <a href="${student.twitter}"><img src="./assets/img/logos/twitter.svg" alt=""></a>
                                    <a href="${student.linkedin}"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
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
                                    <a href="${student.facebook}"><img src="./assets/img/logos/facebook.svg" alt=""></a>
                                    <a href="${student.twitter}"><img src="./assets/img/logos/twitter.svg" alt=""></a>
                                    <a href="${student.linkedin}"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
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
                                    <a href="${student.facebook}"><img src="./assets/img/logos/facebook.svg" alt=""></a>
                                    <a href="${student.twitter}"><img src="./assets/img/logos/twitter.svg" alt=""></a>
                                    <a href="${student.linkedin}"><img src="./assets/img/logos/linkedin.svg" alt=""></a>
                                </div>
                            </div>
                        </div>
                    </div>`
        otherContainer.innerHTML += stud
    }
})