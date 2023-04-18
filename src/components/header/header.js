import createNavBar from '../navBar/navBar.js';

const textStyles = ['text-6xl', 'font-bold'];
const headerStyles = [
  'mb-4',
  'flex',
  'flex-col',
  'gap-4',
  'items-center',
  'justify-center',
  'p-6',
  'shadow-lg',
];

function createHeader() {
  const header = document.createElement('header');
  const text = document.createElement('h1');
  const navBar = createNavBar();

  text.textContent = 'BurgerZone';
  text.classList.add(...textStyles);
  header.appendChild(text);
  header.appendChild(navBar);

  header.classList.add(...headerStyles);
  return header;
}

export default createHeader;
