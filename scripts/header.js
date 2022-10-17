const humberger = document.querySelector('.humberger');
const menu = humberger.firstElementChild;
const navs = document.querySelector('.navs');
const navsLinks = document.querySelectorAll('.nav-link');

function handleClick() {
  menu.classList.toggle('bar_close');
  navs.classList.toggle('navs-open');
  humberger.classList.toggle('humberger-opened');
}

humberger.addEventListener('click', handleClick);

if (window.innerWidth < 768) {
  navsLinks.forEach((menuLink) => {
    menuLink.addEventListener('click', handleClick);
  });
}

window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navsLinks.forEach((menuLink) => {
      menuLink.removeEventListener('click', handleClick);
    });
  }
});
