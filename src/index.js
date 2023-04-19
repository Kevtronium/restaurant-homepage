import './main.css';
import createHeader from './components/header/header.js';
import createMainContent from './components/mainContent/mainContent.js';
import createHomeElement from './components/home/home.js';
import loadElement from './elementLoader.js';

document.addEventListener('DOMContentLoaded', (e) => {
  const header = createHeader();
  const mainContent = createMainContent();
  const home = createHomeElement();

  mainContent.appendChild(home);

  loadElement([header, mainContent]);
});
