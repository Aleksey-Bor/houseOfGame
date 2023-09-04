class LanguageChanger {
  constructor(button) {
    this.language = button.querySelector(".header__button-language");
    this.button = button;
    this.button.addEventListener("click", this.changeLanguage.bind(this));
  }

  changeLanguage() {
    if (this.language.textContent === "En") {
      this.language.textContent = "Ru";
    } else {
      this.language.textContent = "En";
    }
  }
}

class LinkHoverEffect {
  constructor(links) {
    this.links = links;
    this.links.forEach((link) => {
      link.addEventListener("mouseover", this.setHoverColor.bind(this, link));
      link.addEventListener("mouseout", this.setDefaultColor.bind(this, link));
    });
  }

  setHoverColor(link) {
    const svg = link.querySelector("svg");
    const path = svg.querySelector("path:first-of-type");
    path.setAttribute("fill", "#9dadf2");
  }

  setDefaultColor(link) {
    const svg = link.querySelector("svg");
    const path = svg.querySelector("path:first-of-type");
    path.setAttribute("fill", "#478BF9");
  }
}

const button = document.querySelector(".header__button");
const languageChanger = new LanguageChanger(button);

const links = document.querySelectorAll(".footer__social-link");
const linkHoverEffect = new LinkHoverEffect(links);
