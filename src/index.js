import './main.css';
import createHeader from './header.js';
import loadElement from './elementLoader';

document.addEventListener('DOMContentLoaded', (e) => {
  const header = createHeader();

  loadElement([header]);
});
