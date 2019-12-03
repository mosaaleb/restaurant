// TODO: add each tab content
// TODO: add animiation on tab change
// TODO: add purge css to minify generated css classes


import '../css/main.css';
import '../images/dish4-croped.png';

import HomeTab from './tabs/home';
import MenuTab from './tabs/menu';
import ContactTab from './tabs/contact';


const TabSwitcher = (() => {
  const tabs = document.querySelectorAll('.tab');
  const menuButton = document.getElementById('menu-btn');

  const setDefaultTab = () => {
    tabs[0].classList.add('active-tab');
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
    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });
  };

  const bindListeners = () => {
    tabs.forEach((tab) => {
      tab.addEventListener('click', () => {
        resetActiveTab();
        tab.classList.add('active-tab');
        renderTab(tab);
      });
    });
    menuButton.addEventListener('click', () => {
      MenuTab.render();
    });
  };

  return { setDefaultTab, bindListeners };
})();

// TabSwitcher.setDefaultTab();
TabSwitcher.bindListeners();
