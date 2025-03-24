export default function createTitle(level, textSizeClass, text) {
  const title = document.createElement(level);
  title.textContent = text;
  title.classList.add(textSizeClass);
  return title;
}
