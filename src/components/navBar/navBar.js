import createHomeElement from '../home/home';
import createMenu from '../menu/menu';
import createContact from '../contact/contact';

const navBarStyles = ['flex', 'gap-2', 'text-lg', 'font-bold'];
const tabStyles = {
  default: [
    'rounded-sm',
    'border-b-0',
    'border-l-2',
    'border-r-2',
    'border-t-2',
    'border-solid',
    'border-black',
    'p-2',
    'hover:bg-gray-300',
    'active:bg-gray-400',
  ],
  active: ['bg-gray-500', 'selected'],
};

function handleTabClick(e) {
  const mainContent = document.querySelector('main');
  const oldTab = document.querySelector('.selected');
  let newContent = null;

  if (e.target.textContent === 'Contact') {
    newContent = createContact();
  } else if (e.target.textContent === 'Menu') {
    newContent = createMenu();
  } else {
    newContent = createHomeElement();
  }

  e.target.classList.add(...tabStyles.active);
  oldTab.classList.remove(...tabStyles.active);
  mainContent.removeChild(mainContent.firstChild);
  mainContent.appendChild(newContent);
}

function createNavBar() {
  const navBar = document.createElement('nav');
  const homeTab = document.createElement('button');
  const menuTab = document.createElement('button');
  const contactTab = document.createElement('button');

  homeTab.textContent = 'Home';
  homeTab.classList.add(...tabStyles.default);
  homeTab.classList.add(...tabStyles.active);
  homeTab.addEventListener('click', handleTabClick);
  navBar.appendChild(homeTab);

  menuTab.textContent = 'Menu';
  menuTab.classList.add(...tabStyles.default);
  menuTab.addEventListener('click', handleTabClick);
  navBar.appendChild(menuTab);

  contactTab.textContent = 'Contact';
  contactTab.classList.add(...tabStyles.default);
  contactTab.addEventListener('click', handleTabClick);
  navBar.appendChild(contactTab);

  navBar.classList.add(...navBarStyles);

  return navBar;
}

export default createNavBar;
