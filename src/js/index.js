import '../css/main.css';
import HomeTab from './tabs/home';
import MenuTab from './tabs/menu';
import ContactTab from './tabs/contact';

const tabs = document.querySelectorAll('.tab');
tabs[0].classList.add('active-tab');
HomeTab.render();


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
      break;
  }
};

const resetActiveTab = () => {
  tabs.forEach((tab) => {
    tab.classList.remove('active-tab');
  });
};

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    resetActiveTab();
    tab.classList.add('active-tab');
    renderTab(tab);
  });
});
