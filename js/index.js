"use strict";

import { loadRandomPhoto, changeHistory, main, handleLeft, handleRight} from "./script.js";

const photos =  loadRandomPhoto();

right.setAttribute('disabled', '');


main.addEventListener('click', function (e) {
    const icon = e.target.classList.contains('click');
    const likes = countLikes;
    const url = document.querySelector('.img').src;
   
    if (icon) {
      const count = +likes.textContent.split(': ')[1] + 1;
      likes.innerHTML = likes.textContent.split(': ')[0] + ': ' + count;
      changeHistory(url, count);
      document.querySelector('.icon').classList.remove('click');
    };
  });

left.addEventListener('click', function () {
  const idPh = main.firstElementChild.getAttribute('data-id');
  handleLeft(idPh);
});

right.addEventListener('click', function () {
  const idPh = main.firstElementChild.getAttribute('data-id');
  handleRight(idPh);
});