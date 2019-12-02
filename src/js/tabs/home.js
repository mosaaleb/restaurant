const HomeTab = (() => {
  const tabContent = `
  <p>This is the best retaurant in the world</p>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return { render };
})();

export default HomeTab;
