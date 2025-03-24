export default function createParagraph(textSizeClass, text) {
  const paragraph = document.createElement('p');

  paragraph.classList.add(textSizeClass);
  paragraph.textContent = text;
  return paragraph;
}
