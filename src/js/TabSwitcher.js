import HomeTab from './tabs/home';
import MenuTab from './tabs/menu';
import ContactTab from './tabs/contact';


const TabSwitcher = (() => {
  const tabs = () => document.querySelectorAll('.tab');

  const setDefaultTab = () => {
    tabs()[0].classList.add('active-tab');
    HomeTab.render();
  };

  const renderTab = (tab) => {
    switch (tab.id) {
      case 'home':
        HomeTab.render();
        break;
      case 'menu':
        MenuTab.render();
        break;
      default:
        ContactTab.render();
    }
  };

  const resetActiveTab = () => {
    tabs().forEach((tab) => {
      tab.classList.remove('active-tab');
    });
  };

  const bindListeners = () => {
    tabs().forEach((tab) => {
      tab.addEventListener('click', () => {
        resetActiveTab();
        tab.classList.add('active-tab');
        renderTab(tab);
      });
    });
    document.addEventListener('click', (event) => {
      if (event.target && event.target.id === 'menu-btn') {
        resetActiveTab();
        tabs[1].classList.add('active-tab');
        MenuTab.render();
      }
    });
  };

  return { setDefaultTab, bindListeners };
})();

export default TabSwitcher;
