"use strict";

import { loadRandomPhoto, changeHistory, main } from "./script.js";

const photos =  loadRandomPhoto();



    main.addEventListener('click', function (e) {
        const icon = e.target.classList.contains('click');
        let likes =document.querySelector('.count-likes');
        const url = document.querySelector('.img').src;
       
        if (icon) {
          const count = +likes.textContent.split(': ')[1] + 1;
          likes.innerHTML = likes.textContent.split(': ')[0] + ': ' + count;
          changeHistory(url, count);
          document.querySelector('.icon').classList.remove('click');
        };
      });
  