fetch("./data/team_members.json")
  .then(res => res.json())
  .then(data => {

    /* =========================
       HEAD SECTION (Director)
    ========================= */

    const h = data.head;

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
       CO-PRINCIPAL INVESTIGATORS
    ========================= */

    const teamContainer = document.getElementById("team-container");
    let teamHTML = "";

    if (data.coInvestigators) {
      data.coInvestigators.forEach(m => {
        teamHTML += `
          <div class="wrp staff1">
            <div class="photo">
              <img src="${m.image}" alt="${m.name}">
            </div>

            <div class="details">
              <div class="name">${m.name}</div>

              <div class="about">
                ${m.role} – 6G Ubiquitous Connectivity Lab<br>
                ${m.designation}<br>
                ${m.department}
              </div>

              <div class="footer">
                <div class="footer-btn">
                  <div class="icons">
                    ${m.links?.anna ? `
                      <div class="icon">
                        <a href="${m.links.anna}" target="_blank">
                          <img src="https://npsbcet.edu.in/wp-content/uploads/2020/04/ANNA.png">
                        </a>
                      </div>` : ``}

                    ${m.links?.irins ? `
                      <div class="icon">
                        <a href="${m.links.irins}" target="_blank">
                          <img src="../assets/img/icons/irins.png">
                        </a>
                      </div>` : ``}

                    ${m.links?.linkedin ? `
                      <div class="icon">
                        <a href="${m.links.linkedin}" target="_blank">
                          <img src="../assets/img/logos/linkedin.svg">
                        </a>
                      </div>` : ``}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    }

    /* =========================
       TEAM MEMBERS
    ========================= */

    if (data.team) {
      data.team.forEach(m => {
        teamHTML += `
          <div class="wrp staff1">
            <div class="photo">
              <img src="${m.image || '../assets/img/people/default.png'}" alt="${m.name}">
            </div>

            <div class="details">
              <div class="name">${m.name}</div>

              <div class="about">
                ${m.role}<br>
                <a href="mailto:${m.email}">${m.email}</a>
              </div>

              <div class="footer">
                <div class="footer-btn">
                  <div class="icons">
                    ${m.linkedin && m.linkedin !== "#" ? `
                      <div class="icon">
                        <a href="${m.linkedin}" target="_blank">
                          <img src="../assets/img/logos/linkedin.svg">
                        </a>
                      </div>` : ``}
                  </div>
                </div>
              </div>
            </div>
          </div>
        `;
      });
    }

    teamContainer.innerHTML = teamHTML;

  })
  .catch(err => console.error("Team data load error:", err));
