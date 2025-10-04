const burgerButton = document.querySelector('.button-icon--burger');
const burgerMenu = document.querySelector('.burger-menu');
const burgerCloseButton = document.querySelector('.button-icon--close');
const overlay = document.querySelector('.overlay');
const openFeedButton = document.querySelector('.button-icon--checkstatus');
const closeFeedButton = document.querySelector('.button-icon-close-feedback')
const feedback = document.querySelector('.feedback');

const openFeed = () => {
  feedback.classList.add('feedback__open');
  overlay.classList.add('overlay-open');
}

const closeFeed = () => {
  feedback.classList.remove('feedback__open');
  overlay.classList.remove('overlay-open');
}

const openMenu = () => {
  burgerMenu.classList.add('burger-menu--active');
  overlay.classList.add('overlay-open');
}

const closeMenu = () => {
  burgerMenu.classList.remove('burger-menu--active');
  overlay.classList.remove('overlay-open');
};

burgerButton.addEventListener('click', openMenu);

burgerCloseButton.addEventListener('click', closeMenu);

overlay.addEventListener('click', closeMenu);
overlay.addEventListener('click', closeFeed);

openFeedButton.addEventListener('click', openFeed);

closeFeedButton.addEventListener('click', closeFeed)
