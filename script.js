function changeLanguage(button) {
  let language = button.querySelector(".header__button-language");

  if (language.textContent === "En") {
    language.textContent = "Ru";
  } else {
    language.textContent = "En";
  }
}

const links = document.querySelectorAll('.footer__social-link');

links.forEach(link => {
  link.addEventListener('mouseover', () => {
    const svg = link.querySelector('svg');
    const path = svg.querySelector('path:first-of-type');
    path.setAttribute('fill', '#9dadf2');
  });

  link.addEventListener('mouseout', () => {
    const svg = link.querySelector('svg');
    const path = svg.querySelector('path:first-of-type');
    path.setAttribute('fill', '#478BF9');
  });
});

