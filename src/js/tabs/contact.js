const ContactTab = (() => {
  const tabContent = `
  <div class="flex w-8/12 justify-center items-center mx-auto">
    <div class="max-w-sm w-full lg:max-w-full lg:flex">
      <div id="about-bg"
        class="h-64 lg:h-auto lg:w-64 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
        title="Woman holding a mug">
      </div>
      <div
        class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <h2 class="text-5xl text-yellow-700 font-vibes">Our Story</h2>
          <div class="text-gray-900 font-bold text-xl mb-2">Our Search for magical food experiences</div>
          <p class="text-gray-700 text-base">Inspired by the traditional way of cooking Egyptian cuisine,
            Om-Ali Restaurant is a recollection of Cairo's past and its surrounding provinces, a homey yet
            elegant feeling that everyone can experience right in the heart of the Old Quarter.

            Situated in one of the oldest locations in Cairo's history where the Pyramids just a few blocks away,
            Om-Ali Restaurant is the ideal introduction for both local and foreign visitors who are seeking
            authentic exposure to Egyptian culture.</p>
        </div>
        <button
          class="mt-5 px-3 py-2 rounded-full bg-transparent text-yellow-700 font-bold uppercase border-solid border-2 border-yellow-700">Book
          Now!</button>
      </div>
    </div>
  </div>
  `;

  const render = () => {
    const root = document.getElementById('content');
    root.innerHTML = tabContent;
  };

  return { render };
})();

export default ContactTab;
