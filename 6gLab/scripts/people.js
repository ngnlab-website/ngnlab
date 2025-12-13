// ===== PEOPLE.JS - Fetches data and dynamically renders team members =====

const container = document.getElementById("faculty-container");
const DATA_URL = "./data/team_members.json"; // Path to the new JSON file

// Function to generate the HTML for a single person card
const createPersonCard = (person) => {
    // Using backticks for a multi-line string (template literal)
    return `
        <div class="wrp ${person.cssClass || ''}">
            <div class="photo">
                <img src="${person.image}" alt="${person.name}">
            </div>
            <div class="details">
                <div class="name">${person.name}</div>
                <div class="role">${person.role}</div>
                <div class="about">${person.expertise}</div>
                <div class="footer">
                    <div class="footer-btn">
                        <div class="icons">
                            <div class="icon">
                                <a href="${person.linkedin}" target="_blank">
                                    <i class="fab fa-linkedin"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};

// Function to fetch the data and render the team
const renderTeam = async () => {
    try {
        const response = await fetch(DATA_URL);
        
        // Check if the request was successful
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const teamData = await response.json();

        // 1. Insert Head Member
        if (teamData.head) {
            container.innerHTML += createPersonCard(teamData.head);
        }

        // 2. Insert Staff Members
        if (teamData.staff && Array.isArray(teamData.staff)) {
            teamData.staff.forEach(person => {
                container.innerHTML += createPersonCard(person);
            });
        }

    } catch (error) {
        console.error("Could not fetch or render team data:", error);
        container.innerHTML = "<p>Error loading team members. Please check the console for details.</p>";
    }
};

// Execute the rendering function when the script loads
renderTeam();