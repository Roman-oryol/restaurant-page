function createTitle(level, className, text) {
  const title = document.createElement(level);
  title.textContent = text;
  title.classList.add(className);
  return title;
}

function renderProductsPage() {
  const container = document.getElementById('content');
  const main = document.createElement('main');
  const title = createTitle('h1', 'text-lg', 'Our products');
  const subTitle = createTitle('h2', 'text-xl', 'From Top Quality Materials');

  main.classList.add('container', 'products');

  main.append(title, subTitle);
  container.appendChild(main);
}

export default renderProductsPage;
