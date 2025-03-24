import '../../styles/components/titles.css';

export default function createTitle(level, textSizeClass, text) {
  const title = document.createElement(level);
  title.textContent = text;
  title.classList.add(textSizeClass);
  title.classList.add(level === 'h1' ? 'title' : 'subtitle');
  return title;
}
