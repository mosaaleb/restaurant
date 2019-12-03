const MenuTab = (() => {
  const tabContent = `
  <div class="flex flex-col w-11/12 justify-around items-center mx-auto text-gray-200 overflow-scroll h-full">
    <div class="dish flex items-center" style="margin-top: 1450px;">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Frogged Fish</h3>
          <h5 class="text-xl">An extremely desgustive dish made with frogs</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/dish4-croped.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>
    </div>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return {
    render,
  };
})();

export default MenuTab;
