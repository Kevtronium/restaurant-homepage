const mainContentStyles = ['flex', 'items-center', 'justify-center'];

function createMainContent() {
  const mainContent = document.createElement('main');

  mainContent.classList.add(...mainContentStyles);

  return mainContent;
}

export default createMainContent;
