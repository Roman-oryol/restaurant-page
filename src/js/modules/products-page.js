function createTitles() {
  const title = document.createElement('h1');
  const subTitle = document.createElement('h2');

  title.textContent = 'Our products';
  title.classList.add('text-lg');
  subTitle.textContent = 'From Top Quality Materials';
  subTitle.classList.add('text-xl');

  return [title, subTitle];
}

function renderProductsPage() {
  const container = document.getElementById('content');
  const main = document.createElement('main');
  main.classList.add('container', 'products');

  main.append(...createTitles());
  container.appendChild(main);
}

export default renderProductsPage;
