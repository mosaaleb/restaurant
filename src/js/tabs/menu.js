const MenuTab = (() => {
  const tabContent = `
    <div class="flex flex-col w-10/12 justify-around items-center mx-auto text-gray-200 overflow-scroll h-full">
      <div class="dish flex items-center" style="margin-top: 1450px;">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex justify-end">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="dish flex items-center flex-row-reverse">
        <section class="w-1/2">
          <h3 class="font-vibes text-5xl text-yellow-700">Greek Chicken</h3>
          <h5 class="text-xl">Fresh, crunchy cucumber salad, chicken breask with Green-inspired flavor</h5>
        </section>
        <section class="w-1/2 flex">
          <img src="images/home-dish.png" alt="dish" class="h-88 p-4 rounded-full">
        </section>
      </div>

      <div class="gradientback">
      </div>
    </div>
  `;

  const render = () => {
    const root = document.getElementById('tab');
    root.innerHTML = tabContent;
  };

  return {
    render,
  };
})();

export default MenuTab;
