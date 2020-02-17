'use strict';

const Selector = {
  SLIDERS: '.services__list',
  BTN_LEFT: '.sliders__btn-left',
  BTN_RIGHT: '.sliders__btn-right',
  BTN_MORE: '.btn--work-open',
  BTN_CLOSE: '.btn--work-close',
  MENU_OPEN: '.menu__btn--open',
  MENU_CLOSE: '.menu__btn--close',
  MENU: '.header__nav',
  NAV: '.work__nav',
};

const Selectors = {
  ITEM_ADD: '.work__list-item--additional',
  ITEM: '.work__list-item',
  JSCLICK: '.js-click',
};

function toNodes(Selectors, flag){
  let queryType = flag ? 'querySelectorAll' : 'querySelector';
  let key = Object.keys(Selectors);
  let Temp = {};
  key.forEach(function(elem, index) {
      Temp[key[index]] = document[queryType](Selectors[key[index]]);
  })
  return Temp;
};

const Node = toNodes(Selector, );
const Nodes = toNodes(Selectors, true);

function events() {
  Node.BTN_LEFT.addEventListener("click", sliderMoveLeft);
  Node.BTN_RIGHT.addEventListener("click", sliderMoveRight);
  Node.BTN_MORE.addEventListener("click", openAddItems);
  Node.BTN_CLOSE.addEventListener("click", closeAddItems);
  Node.MENU_OPEN.addEventListener("click", openMenu);
  Node.MENU_CLOSE.addEventListener("click", closeMenu);
  Node.NAV.addEventListener("click", handlerNavigation);
}

function displayAddItems(action, items) {
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = action;
  }
}

function openAddItems(evt) {
  evt.preventDefault();
  Node.BTN_MORE.classList.toggle("hide");
  displayAddItems("block", Nodes.ITEM_ADD);
  Node.BTN_CLOSE.classList.toggle("hide");
};

function closeAddItems(evt) {
  evt.preventDefault();
  Node.BTN_CLOSE.classList.toggle("hide");
  displayAddItems("none", Nodes.ITEM_ADD);
  Node.BTN_MORE.classList.toggle("hide");
};

function handlerNavigation(evt){
  evt.preventDefault();
  let child = evt.target;
  let parent = evt.currentTarget;
  let temp = evt.target.dataset.name;
  if (child != parent && temp != '') {
    for (let i = 0; i < Nodes.ITEM.length; i++) {
      Nodes.ITEM[i].style.display = temp === Nodes.ITEM[i].dataset.name ? "block" : "none";
    }
  }
  if (temp == 'all') {
    displayAddItems("block", Nodes.ITEM);
    displayAddItems("none", Nodes.ITEM_ADD);
  }
};

function sliderMoveRight(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(-100%)";
  Node.BTN_RIGHT.classList.add("sliders__btn--active");
  Node.BTN_LEFT.classList.remove("sliders__btn--active");
};

function sliderMoveLeft(evt) {
  evt.preventDefault();
  Node.SLIDERS.style.transform = "translateX(0px)";
  Node.BTN_RIGHT.classList.remove("sliders__btn--active");
  Node.BTN_LEFT.classList.add("sliders__btn--active");
};

function openMenu(evt) {
  evt.preventDefault();
  Node.MENU_OPEN.classList.add("menu__btn-hide");
  Node.MENU_CLOSE.classList.add("menu__btn-show");
  Node.MENU.classList.add("open");
};

function closeMenu(evt) {
  evt.preventDefault();
  Node.MENU_CLOSE.classList.remove("menu__btn-show");
  Node.MENU_OPEN.classList.remove("menu__btn-hide");
  Node.MENU.classList.remove("open");
};

events();
