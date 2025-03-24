import createTitle from '../components/title';
import createParagraph from '../components/paragraph';

const text = [
  'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc. Viverra malesuada viverra id vel tortor dui adipiscing',
  'Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet. Integer sed pretium odio lectus at malesuada sed eget nunc.',
  ' Lorem ipsum dolor sit amet consectetur. Scelerisque urna vel sit dolor fringilla volutpat lectus amet.',
];

function renderAboutPage() {
  const container = document.getElementById('content');
  const main = document.createElement('main');
  const title = createTitle('h1', 'text-lg', 'About us');
  const subTitle = createTitle('h2', 'text-xl', 'Why we are the best');
  const content = document.createElement('div');
  const description = document.createElement('div');
  const moreBtn = document.createElement('a');
  const imagesContainer = document.createElement('div');
  const image1 = document.createElement('div');
  const image2 = document.createElement('div');

  text.forEach((par) => {
    description.append(createParagraph('text-md', par));
  });

  moreBtn.textContent = 'Read More';
  moreBtn.href = '#';
  moreBtn.classList.add('btn', 'btn--primary');
  description.appendChild(moreBtn);
  description.classList.add('about__description');

  image1.classList.add('about__image', 'about__image--1');
  image2.classList.add('about__image', 'about__image--2');
  imagesContainer.classList.add('about__images');
  imagesContainer.append(image1, image2);

  content.append(description, imagesContainer);
  content.classList.add('about__content');

  main.classList.add('about', 'container');
  main.append(title, subTitle, content);
  container.append(main);
}

export default renderAboutPage;
