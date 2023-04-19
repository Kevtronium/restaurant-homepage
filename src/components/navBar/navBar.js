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
  active: ['bg-gray-500'],
};

function createNavBar() {
  const navBar = document.createElement('nav');
  const homeTab = document.createElement('button');
  const menuTab = document.createElement('button');
  const contactTab = document.createElement('button');

  homeTab.textContent = 'Home';
  homeTab.classList.add(...tabStyles.default);
  homeTab.classList.toggle(...tabStyles.active);
  navBar.appendChild(homeTab);

  menuTab.textContent = 'Menu';
  menuTab.classList.add(...tabStyles.default);
  navBar.appendChild(menuTab);

  contactTab.textContent = 'Contact';
  contactTab.classList.add(...tabStyles.default);
  navBar.appendChild(contactTab);

  navBar.classList.add(...navBarStyles);

  return navBar;
}

export default createNavBar;
