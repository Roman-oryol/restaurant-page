import createTitle from '../components/title';
import createProductCard from '../components/product-card';

import chocolateLatte from '../../assets/img/chocolate-latte.jpg';
import mochaLatte from '../../assets/img/mocha-latte.jpg';
import coffeLatte from '../../assets/img/coffe-latte.jpg';
import hazelnutLatte from '../../assets/img/hazelnut-latte.jpg';

const products = [
  {
    name: 'Chocolate Latte',
    imgSrc: chocolateLatte,
    stars: 4.9,
    reviews: 360,
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    price: 2.9,
  },
  {
    name: 'Mocha Latte',
    imgSrc: mochaLatte,
    stars: 5.0,
    reviews: 180,
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    price: 2.7,
  },
  {
    name: 'Coffee Latte',
    imgSrc: coffeLatte,
    stars: 4.8,
    reviews: 450,
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    price: 2.9,
  },
  {
    name: 'Hazelnut Latte',
    imgSrc: hazelnutLatte,
    stars: 4.9,
    reviews: 390,
    description:
      'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla',
    price: 2.8,
  },
];

function renderProductsPage() {
  const container = document.getElementById('content');
  const main = document.createElement('main');
  const title = createTitle('h1', 'text-lg', 'Our products');
  const subTitle = createTitle('h2', 'text-xl', 'From Top Quality Materials');
  const filterSection = createFilters();
  const productsList = document.createElement('div');

  productsList.classList.add('products__list');
  products.forEach((product) => {
    productsList.appendChild(createProductCard(product));
  });

  main.classList.add('container', 'products');

  main.append(title, subTitle, filterSection, productsList);
  container.appendChild(main);
}

function createFilters() {
  const filterButtons = ['Latte', 'Robusta', 'Acabica'];
  const filtersSection = document.createElement('div');

  filtersSection.classList.add('products__filters', 'text-lg');

  filterButtons.forEach((filter, index) => {
    const buttonEl = document.createElement('button');
    buttonEl.classList.add('products__filter-button');
    if (index == 0) {
      buttonEl.classList.add('products__filter-button--active');
    }
    buttonEl.textContent = filter;
    filtersSection.appendChild(buttonEl);
  });

  return filtersSection;
}

function createProductsList() {
  const productsList = document.createElement('div');
}

export default renderProductsPage;
