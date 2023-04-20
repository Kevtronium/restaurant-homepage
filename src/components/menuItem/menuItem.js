import menuItemImg1 from './bacon-burger.jpg';
import menuItemImg2 from './deluxe-burger.jpg';
import menuItemImg3 from './veggie-burger.jpg';
import menuItemImg4 from './classic-combo.jpg';
import menuItemImg5 from './cheeseburger-with-fries.jpg';
import menuItemImg6 from './breakfast-burger.jpg';

const menuItemImgDim = { width: 250, height: 200 };
const itemImgStyles = ['h-48', 'rounded-lg'];
const itemTextStyles = ['text-lg'];

function itemInfoFactory(text, imgSrc, imgAlt) {
  return { text, img: { src: imgSrc, alt: imgAlt } };
}

function generateItemInfosArray() {
  const item1 = itemInfoFactory(
    'Bacon Burger',
    menuItemImg1,
    'a closeup of a burger with bacon'
  );
  const item2 = itemInfoFactory(
    'Deluxe Burger',
    menuItemImg2,
    'a deluxe burger'
  );
  const item3 = itemInfoFactory(
    'Veggie Burger',
    menuItemImg3,
    'a closeup of veggie burger'
  );
  const item4 = itemInfoFactory('Classic Combo', menuItemImg4, 'classic combo');
  const item5 = itemInfoFactory(
    'Cheeseburger with fries',
    menuItemImg5,
    'cheeseburger with fries'
  );
  const item6 = itemInfoFactory(
    'Breakfast Burger',
    menuItemImg6,
    'a breakfast burger'
  );

  const itemInfoArr = [item1, item2, item3, item4, item5, item6];

  return itemInfoArr;
}

function createMenuItem(itemInfo) {
  const menuItem = document.createElement('div');
  const itemImg = new Image(menuItemImgDim.width, menuItemImgDim.height);
  const itemText = document.createElement('p');

  itemImg.src = itemInfo.img.src;
  itemImg.alt = itemInfo.img.alt;
  itemImg.classList.add(...itemImgStyles);
  menuItem.appendChild(itemImg);

  itemText.textContent = itemInfo.text;
  itemText.classList.add(...itemTextStyles);
  menuItem.appendChild(itemText);

  return menuItem;
}

function createMenuItemArray(itemInfoArr) {
  const menuItems = itemInfoArr.map((ele) => {
    return createMenuItem(ele);
  });
  return menuItems;
}

const menuItems = createMenuItemArray(generateItemInfosArray());

export default menuItems;
