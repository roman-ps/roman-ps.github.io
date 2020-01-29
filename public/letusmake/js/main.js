'use strict';

const FORM = document.querySelector(".form");
const MESSAGE = document.querySelector(".form__message");
const MAIL = document.querySelector(".form__mail");

let reviews = [];
let reviewToJSON = [];

function addReview(evt) {
  evt.preventDefault();
  if (MESSAGE.value != '' && MAIL.value != '') {
    let last = {message: MESSAGE.value, mail: MAIL.value};
    reviews.push(last);
    toLocalStorage(reviews);
  }
  MESSAGE.value = '';
  MAIL.value = '';
}

function toLocalStorage(reviews) {
  reviewToJSON = JSON.stringify(reviews);
  localStorage.setItem("reviews", reviewToJSON);
}

FORM.addEventListener("submit", addReview);