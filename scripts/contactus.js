const fourthYearContainer = document.querySelector(".fourth-year")
const pgContainer = document.querySelector(".pg")
const phdContainer = document.querySelector(".phd")
const alumniContainer = document.querySelector(".alumni")
const thirdYearContainer = document.querySelector(".third-year")
const otherContainer = document.querySelector(".others")
// import students from "../data/students.json" assert { type: "json" }
let students = []
fetch("../data/students.json")
    .then(response => response.json())
    .then(data => {
        students=data
        renderPeople()
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });
function renderPeople() {
    students.forEach(student => {
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
}