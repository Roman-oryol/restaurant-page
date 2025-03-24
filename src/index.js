import renderHomePage from './js/modules/home-page';
import renderProductsPage from './js/modules/products-page';
import renderAboutPage from './js/modules/about-page';
import './styles/style.css';

const content = document.getElementById('content');
const logo = document.querySelector('.header__logo-btn');
const nav = document.querySelector('.header__nav');

document.addEventListener('DOMContentLoaded', renderHomePage);

const pages = {
  home: renderHomePage,
  products: renderProductsPage,
  about: renderAboutPage,
};

function handlePageChange(pageName, clickedBtn) {
  const menuButtons = nav.querySelectorAll('.header__nav-btn');

  menuButtons.forEach((btn) => {
    btn.classList.remove('header__nav-btn--active');
    btn.disabled = false;
  });
  clickedBtn.classList.add('header__nav-btn--active');
  clickedBtn.disabled = true;

  content.classList.add('fade-out');

  if (clickedBtn.dataset.page == 'home') {
    logo.disabled = true;
  } else {
    logo.disabled = false;
  }

  setTimeout(() => {
    content.innerHTML = '';
    pages[pageName]();
    content.classList.remove('fade-out');
    content.classList.add('fade-in');

    setTimeout(() => {
      content.classList.remove('fade-in');
    }, 500);
  }, 500);
}

nav.addEventListener('click', (e) => {
  if (e.target.dataset.page) {
    handlePageChange(e.target.dataset.page, e.target);
  }
});

logo.addEventListener('click', () => {
  const menuButtons = nav.querySelectorAll('.header__nav-btn');

  menuButtons.forEach((btn) => {
    btn.classList.remove('header__nav-btn--active');
    btn.disabled = false;

    if (btn.dataset.page == 'home') {
      btn.classList.add('header__nav-btn--active');
      btn.disabled = true;
    }
  });

  logo.disabled = true;

  content.classList.add('fade-out');

  setTimeout(() => {
    content.innerHTML = '';
    renderHomePage();

    content.classList.remove('fade-out');
    content.classList.add('fade-in');

    setTimeout(() => {
      content.classList.remove('fade-in');
    }, 500);
  }, 500);
});
