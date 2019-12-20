import '../css/main.css';
import '../images/about-bg.jpg';
import '../images/home-dish.png';
import TabSwitcher from './TabSwitcher';

const Marginals = (() => {
  const container = document.getElementById('content');
  const headerContent = `
    <nav class="px-8 pt-2 shadow-md">
      <div class="-mb-px flex justify-center">
        <a class="tab no-underline text-gray-200 border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-2 mr-8"
          href="#" id="home">
          Home
        </a>
        <a class="tab no-underline text-gray-200 border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-2 mr-8"
          href="#" id="menu">
          Menu
        </a>
        <a class="tab no-underline text-gray-200 border-b-2 border-transparent uppercase tracking-wide font-bold text-sm py-2"
          href="#" id="contact">
          Contact
        </a>
      </div>
    </nav>
  `;

  const tabsContent = `
    <main id="tab" class="mx-auto w-5/6 p-2 m-8 shadow-md flex flex-grow h-112 items-center rounded-sm">
    </main>
  `;

  const footerContent = `
    <footer>
      <div class="flex justify-center p-2">
        <a target="_blank" href="https://github.com/mosaaleb" class="text-gray-200 hover:underline">
          Credits <span class="font-bold mx-2">|</span>
        </a>
        <a href="#" class="text-gray-200 hover:underline">
          Reservation <span class="font-bold mx-2">|</span>
        </a>
        <a href="#" class="text-gray-200 hover:underline">
          Reviews
        </a>
      </div>
    </footer>
  `;

  const render = () => {
    container.innerHTML = headerContent;
    container.innerHTML += tabsContent;
    container.innerHTML += footerContent;
  };

  return { render };
})();

Marginals.render();
TabSwitcher.setDefaultTab();
TabSwitcher.bindListeners();
