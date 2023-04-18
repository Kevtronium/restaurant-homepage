import './main.css';
import createHeader from './components/header/header.js';
import createHomeElement from './components/home/home.js';
import loadElement from './elementLoader.js';

document.addEventListener('DOMContentLoaded', (e) => {
  const header = createHeader();
  const home = createHomeElement();

  loadElement([header, home]);
});
