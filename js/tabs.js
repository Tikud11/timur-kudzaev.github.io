const imageContainers = document.querySelectorAll('.ecosystem__foot-img');
const tabs = document.querySelectorAll("._tabs");

// SberBoom Home
// Умный хаб
// Датчик температуры и влажности
// Умный датчик движения
// Умный датчик открытия
// Умный датчик протечки
// Терморегулятор
// Умная кнопка
// Умная розетка
// Умное реле
// Умные лампочки
// Умный ночник Sber

const TABS_CONTENT = {
  0: [
    ['img/tabs-foot-img/menu-item.webp', 'SberBoom Home'],
    ['img/tabs-foot-img/menu-item-1.webp', 'Умный хаб '],
    ['img/tabs-foot-img/menu-item-2.webp', 'Датчик температуры и влажности'],
    ['img/tabs-foot-img/menu-item-3.webp', 'Умный датчик движения'],
    ['img/tabs-foot-img/menu-item-4.webp', 'Умный датчик открытия'],
    ['img/tabs-foot-img/menu-item-5.webp', 'Умный датчик протечки'],
    ['img/tabs-foot-img/menu-item-6.webp', 'Терморегулятор'],
    ['img/tabs-foot-img/menu-item-7.webp', 'Умная кнопка'],
    ['img/tabs-foot-img/menu-item-8.webp', 'Умная розетка'],
    ['img/tabs-foot-img/menu-item-9.webp', 'Умное реле'],
    ['img/tabs-foot-img/menu-item-10.webp', 'Умные лампочки'],
  ],
  1: [
    ['img/tabs-foot-img/menu-item.webp', 'SberBoom Home'],
    ['img/tabs-foot-img/menu-item-1.webp', 'Умный хаб '],
    ['img/tabs-foot-img/menu-item-2.webp', 'Датчик температуры и влажности'],
    ['img/tabs-foot-img/menu-item-3.webp', 'Умный датчик движения'],
    ['img/tabs-foot-img/menu-item-4.webp', 'Умный датчик открытия'],
    ['img/tabs-foot-img/menu-item-5.webp', 'Умный датчик протечки'],
    ['img/tabs-foot-img/menu-item-6.webp', 'Терморегулятор'],
    ['img/tabs-foot-img/menu-item-7.webp', 'Умная кнопка'],
    ['img/tabs-foot-img/menu-item-8.webp', 'Умная розетка'],
    ['img/tabs-foot-img/menu-item-9.webp', 'Умное реле'],
    ['img/tabs-foot-img/menu-item-10.webp', 'Умные лампочки'],
    ['img/tabs-foot-img/menu-item-11.webp', 'Умный ночник Sber'],
  ],
  2: [
    ['img/tabs-foot-img/menu-item.webp', 'SberBoom Home'],
    ['img/tabs-foot-img/menu-item-2.webp', 'Датчик температуры и влажности '],
    ['img/tabs-foot-img/menu-item-6.webp', 'Терморегулятор'],
    ['img/tabs-foot-img/menu-item-8.webp', 'Умная розетка'],
    ['img/tabs-foot-img/menu-item-9.webp', 'Умное реле'],
    ['img/tabs-foot-img/menu-item-10.webp', 'Умные лампочки'],
    ['img/tabs-foot-img/menu-item-11.webp', 'Умный ночник Sber'],
  ],
  3: [
    ['img/tabs-foot-img/menu-item.webp', 'SberBoom Home'],
    ['img/tabs-foot-img/menu-item-1.webp', 'Умный хаб '],
    ['img/tabs-foot-img/menu-item-2.webp', 'Датчик температуры и влажности '],
    ['img/tabs-foot-img/menu-item-3.webp', 'Умный датчик движения '],
    ['img/tabs-foot-img/menu-item-4.webp', 'Умный датчик открытия'],
    ['img/tabs-foot-img/menu-item-5.webp', 'Умный датчик протечки'],
    ['img/tabs-foot-img/menu-item-6.webp', 'Терморегулятор'],
    ['img/tabs-foot-img/menu-item-7.webp', 'Умная кнопка'],
    ['img/tabs-foot-img/menu-item-8.webp', 'Умная розетка'],
    ['img/tabs-foot-img/menu-item-9.webp', 'Умное реле'],
    ['img/tabs-foot-img/menu-item-10.webp', 'Умные лампочки'],
  ],
};

const createPicture = (path, text) => {
  const wrapper = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');

  wrapper.className = 'ecosystem__foot-image-container';
  img.src = path;
  img.width = 120;
  img.height = 124;


  div.className = 'ecosystem__foot-text';
  div.innerText = text;

  wrapper.append(img);
  wrapper.append(div);

  return wrapper;
};

const getPicturesNodes = (someObject, key) => {
  imageContainers[key].innerHTML = '';

  someObject[key].forEach(([path, title]) => {
    imageContainers[key].append(createPicture(path, title));
  });
};

getPicturesNodes(TABS_CONTENT, 0);


const tabContainer = document.querySelector("._tabs");
const tabItems = tabContainer.querySelectorAll("._tabs-item");
const tabContents = tabContainer.querySelectorAll("._tabs-block");

tabItems.forEach((item, index) => {
  item.dataset.id = String(index);
})

const setActiveTab = (index) => {
  tabItems[index].classList.add("_active");
  tabContents[index].classList.add("_active");
};

const removeActiveTab = (index) => {
  tabItems[index].classList.remove("_active");
  tabContents[index].classList.remove("_active");
};

let activeIndex = 0
setActiveTab(activeIndex);

tabContainer.addEventListener('click', (evt) => {
  const item = evt.target.closest("._tabs-item");

  if (!item) {
    return null;
  }

  const newIndex = item.dataset.id;

  removeActiveTab(activeIndex);
  setActiveTab(newIndex);
  getPicturesNodes(TABS_CONTENT, newIndex);

  activeIndex = newIndex;
});
