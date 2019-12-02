const MenuTab = (() => {
  const tabContent = `
  <p>This is the menu</p>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return { render };
})();

export default MenuTab;
