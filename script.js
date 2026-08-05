/* ========================================
   MENU MOBILE
======================================== */

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("is-open");
  });

  const navLinks = document.querySelectorAll(".main-nav a");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("is-open");
    });
  });
}

/* ========================================
   CHARGEMENT DES RÉALISATIONS
======================================== */

const gallery = document.getElementById("gallery");

function afficherRealisations(filtre) {
  if (!gallery) return;

  gallery.innerHTML = "";

  const projets = filtre === "all"
    ? realisations
    : realisations.filter((p) => p.categorie === filtre);

  projets.forEach((projet) => {
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.category = projet.categorie;

    if (projet.large) {
      card.classList.add("large");
    }

    if (projet.video) {
      card.innerHTML = `
        <video controls poster="${projet.image || ''}">
          <source src="${projet.video}" type="video/mp4" />
          Votre navigateur ne supporte pas la lecture vidéo.
        </video>
      `;
    } else {
      card.innerHTML = `
        <img src="${projet.image}" alt="${projet.titre}" />
        <div class="project-overlay">
          <h3>${projet.titre}</h3>
          <p>${projet.secteur} - ${projet.lieu}</p>
        </div>
      `;
    }

    gallery.appendChild(card);
  });
}

if (gallery) {
  afficherRealisations("all");
}

/* ========================================
   FILTRES
======================================== */

const filterButtons = document.querySelectorAll(".filter-btn");

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedCategory = button.dataset.filter;

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    afficherRealisations(selectedCategory);
  });
});
