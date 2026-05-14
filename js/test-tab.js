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
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item.png', 'SberBoom Home'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-1.png', 'Умный хаб '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-2.png', 'Датчик температуры и влажности'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-3.png', 'Умный датчик движения'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-4.png', 'Умный датчик открытия'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-5.png', 'Умный датчик протечки'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-6.png', 'Терморегулятор'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-7.png', 'Умная кнопка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-8.png', 'Умная розетка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-9.png', 'Умное реле'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-10.png', 'Умные лампочки'],
  ],
  1: [
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item.png', 'SberBoom Home'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-1.png', 'Умный хаб '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-2.png', 'Датчик температуры и влажности'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-3.png', 'Умный датчик движения'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-4.png', 'Умный датчик открытия'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-5.png', 'Умный датчик протечки'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-6.png', 'Терморегулятор'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-7.png', 'Умная кнопка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-8.png', 'Умная розетка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-9.png', 'Умное реле'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-10.png', 'Умные лампочки'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-11.png', 'Умный ночник Sber'],
  ],
  2: [
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item.png', 'SberBoom Home'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-2.png', 'Датчик температуры и влажности '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-6.png', 'Терморегулятор'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-8.png', 'Умная розетка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-9.png', 'Умное реле'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-10.png', 'Умные лампочки'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-11.png', 'Умный ночник Sber'],
  ],
  3: [
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item.png', 'SberBoom Home'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-1.png', 'Умный хаб '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-2.png', 'Датчик температуры и влажности '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-3.png', 'Умный датчик движения '],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-4.png', 'Умный датчик открытия'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-5.png', 'Умный датчик протечки'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-6.png', 'Терморегулятор'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-7.png', 'Умная кнопка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-8.png', 'Умная розетка'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-9.png', 'Умное реле'],
    ['//static.mvideo.ru/media/Promotions/Promo_Page/2025/August/smart-house/img/tabs-foot-img/menu-item-10.png', 'Умные лампочки'],
  ],
};

const createPicture = (path, text) => {
  const wrapper = document.createElement('div');
  const img = document.createElement('img');
  const div = document.createElement('div');

  wrapper.className = 'ecosystem__foot-image-container';
  img.src = path;

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
