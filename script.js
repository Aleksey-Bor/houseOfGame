function changeLanguage(button) {
  let language = button.querySelector('.header__button-language');
  
  if (language.textContent === 'En') {
    language.textContent = 'Ru';
  } else {
    language.textContent = 'En';
  }
}