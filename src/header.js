const textStyles = ['text-6xl', 'font-bold'];
const headerStyles = [
  'mb-4',
  'flex',
  'items-center',
  'justify-center',
  'p-6',
  'shadow-lg',
];

function createHeader() {
  const header = document.createElement('header');
  const text = document.createElement('h1');

  text.textContent = 'BurgerZone';
  text.classList.add(...textStyles);
  header.appendChild(text);

  header.classList.add(...headerStyles);
  return header;
}

export default createHeader;
