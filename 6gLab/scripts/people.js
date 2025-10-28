// ===== PEOPLE.JS =====
// Add all members here — name, role, expertise, image, and social links

const people = [
  {
    name: "Dr. A. Kumar",
    role: "Lab Head & Professor",
    expertise: "Wireless Communication, Network Security",
    image: "./assets/img/team/kumar.jpg",
    linkedin: "https://linkedin.com/in/akumar"
  },
  {
    name: "John Smith",
    role: "Frontend Developer",
    expertise: "React, UI/UX Specialist",
    image: "./assets/img/team/john.jpg",
    linkedin: "https://linkedin.com/in/johnsmith"
  },
  {
    name: "Alice Johnson",
    role: "Backend Developer",
    expertise: "Node.js, Database Integration",
    image: "./assets/img/team/alice.jpg",
    linkedin: "https://linkedin.com/in/alicejohnson"
  },
  {
    name: "Bob Williams",
    role: "AI/ML Engineer",
    expertise: "Python, TensorFlow, PyTorch",
    image: "./assets/img/team/bob.jpg",
    linkedin: "https://linkedin.com/in/bobwilliams"
  },
  {
    name: "Priya Sharma",
    role: "Blockchain Researcher",
    expertise: "Smart Contracts, Ethereum, Web3",
    image: "./assets/img/team/priya.jpg",
    linkedin: "https://linkedin.com/in/priyasharma"
  }
];

// ===== Dynamic Rendering =====
const container = document.getElementById("team-container");

people.forEach(person => {
  const card = document.createElement("div");
  card.classList.add("team-card");

  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}">
    <h3>${person.name}</h3>
    <h4>${person.role}</h4>
    <p>${person.expertise}</p>
    <div class="social-links">
      <a href="${person.linkedin}" target="_blank"><i class="fab fa-linkedin"></i></a>
    </div>
  `;

  container.appendChild(card);
});
