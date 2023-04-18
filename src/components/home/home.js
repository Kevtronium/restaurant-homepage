import burgerImg from './main-burger.jpg';

const homeStyles = ['flex', 'items-center', 'justify-center'];
const cardStyles = [
  'border-2',
  'border-solid',
  'border-gray-300',
  'p-4',
  'text-center',
];
const textStyles = ['text-2xl', 'font-bold'];
const imgStyles = ['rounded-lg'];
const imgDim = { width: 500, height: 450 };

function createHomeElement() {
  const home = document.createElement('main');
  const card = document.createElement('div');
  const text = document.createElement('p');
  const img = document.createElement('img');

  card.classList.add(...cardStyles);

  text.classList.add(...textStyles);
  text.textContent = 'Best Burgers in Town!';
  card.appendChild(text);

  img.width = imgDim.width;
  img.height = imgDim.height;
  img.classList.add(...imgStyles);
  img.src = burgerImg;
  card.appendChild(img);

  home.appendChild(card);
  home.classList.add(...homeStyles);

  return home;
}

export default createHomeElement;
