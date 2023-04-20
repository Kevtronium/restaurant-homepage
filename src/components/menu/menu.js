import menuItems from '../menuItem/menuItem.js';

const menuStyles = [
  'grid',
  'auto-rows-fr',
  'grid-cols-2',
  'gap-4',
  'rounded-sm',
  'border-2',
  'border-solid',
  'p-4',
];

function createMenu() {
  const menu = document.createElement('div');

  for (const ele of menuItems) {
    menu.appendChild(ele);
  }

  menu.classList.add(...menuStyles);
  return menu;
}

export default createMenu;
