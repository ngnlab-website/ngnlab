const studentProjectsSectionContainer = document.querySelector(".student-projects-section-container");

let studentProjects = [];
fetch("../data/networksProjects.json")
    .then(response => response.json())
    .then(data => {
        studentProjects = data;
        renderProjects();
    })
    .catch(error => {
        console.error("Error fetching JSON:", error);
    });

function renderProjects() {
        studentProjects.forEach((studentProject, index) => {
            const imageGallery = studentProject.images.map((img, imgIndex) => 
                `<div style="width: 100%; aspect-ratio: 4 / 3; overflow: hidden; border-radius: 8px; background-color: #f4f4f4;">
                    <img src="${img}" alt="Project Image" 
                        style="width: 100%; height: 100%; object-fit: cover; display: block; border-radius: 8px; cursor: pointer;"
                        onclick="openImageModal('${img}')"
                    />
                </div>
                `
            ).join("");
    
            const studentList = studentProject.students.join(", ");
    
            let proj =  `
                <div class="student-project" style="padding: 16px; margin-bottom: 20px; border-radius: 8px; color:#333333">
                    <div class="description" style="font-weight: bold; font-size: 1.2em;">
                        ${studentProject.title}
                    </div>

                    <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin: 10px 0;">
                        ${imageGallery}
                    </div>

                    <div style="display: flex; gap: 20px; margin: 10px 0; align-items: center;">
                        <div style="flex: 2;">
                            ${studentProject.description}
                        </div>
                        <!--<div style="flex: 1;">
                            <div style="position: relative; width: 100%; padding-top: 56.25%; border-radius: 8px; overflow: hidden;">
                                <iframe 
                                    src="${studentProject.videoLink}" 
                                    style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none;" 
                                    allowfullscreen
                                ></iframe>
                            </div>
                        </div>-->
                    </div>

                    <div class="other-details" style="margin: 10px 0;">
                        <span><strong>Contributors:</strong> ${studentList}</span>
                    </div>
                </div>
            `;
            
            studentProjectsSectionContainer.innerHTML += proj;
        });
    }    
    window.openImageModal = function(imgSrc) {
        const modal = document.getElementById('imageModal');
        const modalImage = document.getElementById('modalImage');
        const closeBtn = document.getElementById('closeModalBtn');
    
        modal.style.display = 'flex';
        modalImage.src = imgSrc;
    
        // Click outside the image to close
        modal.onclick = function (event) {
            if (event.target === modal || event.target === closeBtn) {
                modal.style.display = 'none';
                modalImage.src = '';
            }
        };
    
        // Escape key to close
        document.onkeydown = function (e) {
            if (e.key === 'Escape') {
                modal.style.display = 'none';
                modalImage.src = '';
            }
        };
    };
    
    
