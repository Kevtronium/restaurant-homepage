function loadElement(eleArr) {
  const app = document.querySelector('#content');

  for (let i = 0; i < eleArr.length; i++) {
    app.appendChild(eleArr[i]);
  }
}

export default loadElement;
