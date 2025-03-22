import img1 from '../../assets/img/hero-1.jpg';
import img2 from '../../assets/img/hero-2.jpg';
import img3 from '../../assets/img/hero-3.jpg';
import img4 from '../../assets/img/hero-4.jpg';
import img5 from '../../assets/img/hero-5.jpg';

const images = [img1, img2, img3, img4, img5];
const stats = [
  {
    value: 30,
    label: 'Coffee Variant',
  },
  {
    value: 20,
    label: 'Meeting room',
  },
  {
    value: 25,
    label: 'Event space',
  },
  {
    value: 40,
    label: 'Global Achievement',
  },
];

function renderHomePage() {
  const container = document.getElementById('content');

  const main = document.createElement('main');

  main.classList.add('container', 'home-page');

  main.append(createHeroSection(), createStatsSection());
  container.appendChild(main);
}

function createHeroSection() {
  const heroSection = document.createElement('section');
  const heroContent = document.createElement('div');
  const heroImages = document.createElement('div');
  const heroTitle = document.createElement('h1');
  const heroDescription = document.createElement('p');
  const heroButton = document.createElement('button');

  heroContent.classList.add('hero__content');
  heroTitle.classList.add('text-xxl');
  heroTitle.textContent = 'Enjoy Your Favorite Coffee with Ngopi';
  heroDescription.textContent =
    'Discover tranquility at Ngopi a sanctuary for unwinding, where your evenings are perfected with relaxation and rich flavors.';
  heroButton.classList.add('hero__btn', 'btn', 'btn--primary', 'text-lg');
  heroButton.textContent = 'Explore product';
  heroContent.append(heroTitle, heroDescription, heroButton);

  heroImages.classList.add('hero__images');
  images.forEach((img) => {
    heroImages.appendChild(createImgEl(img));
  });

  heroSection.classList.add('hero');
  heroSection.append(heroContent, heroImages);

  return heroSection;
}

function createStatsSection() {
  const statsSection = document.createElement('section');

  statsSection.classList.add('stats');

  stats.forEach(({ value, label }) => {
    statsSection.appendChild(createStatEl(value, label));
  });

  return statsSection;
}

function createImgEl(imageUrl) {
  const img = document.createElement('img');
  img.src = imageUrl;
  return img;
}

function createStatEl(value, label) {
  const statEl = document.createElement('div');
  const statNumber = document.createElement('span');
  const statLabel = document.createElement('span');

  statNumber.textContent = `${value}+`;
  statNumber.classList.add('text-xxl');
  statLabel.textContent = label;
  statLabel.classList.add('text-lg', 'stat__label');

  statEl.classList.add('stat');
  statEl.append(statNumber, statLabel);

  return statEl;
}

export default renderHomePage;
