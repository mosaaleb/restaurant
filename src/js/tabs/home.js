const HomeTab = (() => {
  const tabContent = `
    <div class="flex w-10/12 justify-around items-center mx-auto">
      <section>
        <h2 class="text-4xl text-gray-200 italic">Are you hungry?</h2>
        <h1 class="text-6xl text-yellow-700 font-bold">Don't Wait !</h1>
        <h3 class="text-2xl text-gray-200 italic">Let's start to order food now</h3>
        <button class="mt-5 px-3 py-2 rounded-full bg-transparent text-yellow-700 font-bold uppercase border-solid border-2 border-yellow-700" id="menu-btn">Check Menu</button>
      </section>
      <section>
        <img src="images/dish4-croped.png" alt="dish" class="h-112 p-4 border-4 border-gray-200 rounded-full">
      </section>
    </div>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return { render };
})();

export default HomeTab;
