const ContactTab = (() => {
  const tabContent = `
  <p>This is contact Tab</p>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return { render };
})();

export default ContactTab;
