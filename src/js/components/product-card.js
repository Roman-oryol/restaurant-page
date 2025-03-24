import createTitle from './title';
import createParagraph from './paragraph';

function createProductCard(product) {
  const { name, imgSrc, stars, reviews, description, price } = product;
  const productCard = document.createElement('arcticle');
  const productImg = document.createElement('img');
  const productContent = document.createElement('div');
  const productTitle = createTitle('h3', 'text-lg', name);
  const productRating = document.createElement('p');
  const productStars = document.createElement('span');
  const productReviews = document.createElement('span');
  const productDescription = createParagraph('text-sm', description);
  const productFooter = document.createElement('div');
  const productPrice = document.createElement('span');
  const productAddBtn = document.createElement('button');

  productImg.src = imgSrc;
  product.alt = name;
  productTitle.classList.add('product-card__name');
  productStars.textContent = stars;
  productStars.classList.add('product-card__stars');
  productReviews.textContent = `(${reviews} reviews)`;
  productReviews.classList.add('product-card__reviews');
  productRating.append(productStars, productReviews);
  productRating.classList.add('product-card__rating');

  productDescription.classList.add('product-card__description');

  productPrice.textContent = `$${price}`;
  productPrice.classList.add('product-card__price');
  productAddBtn.classList.add('btn', 'btn--secondary');
  productAddBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" /></svg>`;
  productFooter.append(productPrice, productAddBtn);
  productFooter.classList.add('product-card__footer');

  productContent.classList.add('product-card__content');
  productContent.append(
    productTitle,
    productRating,
    productDescription,
    productFooter
  );

  productCard.classList.add('product-card');
  productCard.append(productImg, productContent);

  return productCard;
}

export default createProductCard;
