'use strict';

var sliders = document.querySelector(".services__list");
var btnLeft = document.querySelector(".sliders__btn-left");
var btnRight = document.querySelector(".sliders__btn-right");
var btnMore = document.querySelector(".btn--work-open");
var btnClose = document.querySelector(".btn--work-close");
var workItemAdd = document.querySelectorAll(".work__list-item--additional");
var jsClick = document.querySelectorAll(".js-click");
var workItem = document.querySelectorAll(".work__list-item");
var menuOpen = document.querySelector(".menu__btn--open");
var menuClose = document.querySelector(".menu__btn--close");
var menu = document.querySelector(".header__nav");
var i;


btnRight.addEventListener("click", function(event) {
  event.preventDefault();
  sliders.style.transform = "translateX(-100%)";
  btnRight.classList.add("sliders__btn--active");
  btnLeft.classList.remove("sliders__btn--active");
});

btnLeft.addEventListener("click", function(event) {
  event.preventDefault();
  sliders.style.transform = "translateX(0px)";
  btnRight.classList.remove("sliders__btn--active");
  btnLeft.classList.add("sliders__btn--active");
});

btnMore.addEventListener("click", function(event) {
  event.preventDefault();
  btnMore.classList.add("hide");
  for (i=0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.add("open");
  }
  btnClose.classList.remove("hide");
});

btnClose.addEventListener("click", function(event) {
  event.preventDefault();
  btnClose.classList.add("hide");
  for (i=0; i < workItemAdd.length; i++) {
    workItemAdd[i].classList.remove("open");
  }
  btnMore.classList.remove("hide");
});

for (i = 0; i < jsClick.length; i++) {
jsClick[i].addEventListener("click", function(event) {
  event.preventDefault();
  var new1 = jsClick[0].dataset.name;
  console.log(new1);
  for (i = 0; i < workItem.length; i++) {
    if (new1 === workItem[i].getAttribute("data-name")) {
      workItem[i].style.display = "block";
    }
    else workItem[i].style.display = "none";
  }
})
}

menuOpen.addEventListener("click", function(event) {
  event.preventDefault();
  menuOpen.classList.add("menu__btn-hide");
  menuClose.classList.add("menu__btn-show");
  menu.classList.add("open");
});

menuClose.addEventListener("click", function(event) {
  event.preventDefault();
  menuClose.classList.remove("menu__btn-show");
  menuOpen.classList.remove("menu__btn-hide");
  menu.classList.remove("open");
});
