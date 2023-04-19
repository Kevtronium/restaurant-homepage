import burgerImg from './main-burger.jpg';

const homeStyles = [
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
  const home = document.createElement('div');
  const text = document.createElement('p');
  const img = document.createElement('img');

  home.classList.add(...homeStyles);

  text.classList.add(...textStyles);
  text.textContent = 'Best Burgers in Town!';
  home.appendChild(text);

  img.width = imgDim.width;
  img.height = imgDim.height;
  img.classList.add(...imgStyles);
  img.src = burgerImg;
  home.appendChild(img);

  return home;
}

export default createHomeElement;
