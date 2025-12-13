fetch("./data/team_members.json")
  .then(res => res.json())
  .then(data => {

    /* =========================
       HEAD SECTION
    ========================= */

    const h = data.head;

    // Build head icons from JSON (anna, irins, linkedin)
    const headIcons = Object.values(h.links)
      .filter(link => typeof link === "object")
      .map(link => `
        <div class="icon">
          <a href="${link.url}" target="_blank">
            <img src="${link.icon}" alt="">
          </a>
        </div>
      `).join("");

    document.getElementById("head-container").innerHTML = `
      <div class="wrp directors">
        <div class="photo">
          <img src="${h.image}" alt="${h.name}">
        </div>

        <div class="details">
          <div class="name">${h.name}</div>
          <div class="role">${h.role}</div>

          <div class="about">
            ${h.domain}<br>
            <a href="mailto:${h.email}">${h.email}</a>
          </div>

          <div class="footer">
            <div class="footer-btn">
              <div class="icons">
                ${headIcons}
                <a class="about-me-btn" href="${h.links.mypage}" target="_blank">
                  My Page →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    /* =========================
       TEAM MEMBERS
    ========================= */

    document.getElementById("team-container").innerHTML =
      data.team.map(m => `
        <div class="wrp staff1">

          <!-- Always keep photo block to avoid misalignment -->
          <div class="photo">
            <img 
              src="${m.image || '../assets/img/people/default.png'}" 
              alt="${m.name}">
          </div>

          <div class="details">
            <div class="name">${m.name}</div>

            <div class="about">
              ${m.role}<br>
              ${m.year}<br>
              ${m.domain}<br>
              <a href="mailto:${m.email}">${m.email}</a>
            </div>

            <div class="footer">
              <div class="footer-btn">
                <div class="icons">
                  ${m.linkedin && m.linkedin !== "#" ? `
                    <div class="icon">
                      <a href="${m.linkedin}" target="_blank">
                        <img src="../assets/img/logos/linkedin.svg" alt="LinkedIn">
                      </a>
                    </div>
                  ` : ``}
                </div>
              </div>
            </div>
          </div>

        </div>
      `).join("");

  })
  .catch(err => console.error("Team data load error:", err));
