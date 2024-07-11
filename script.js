'use strict';

const col = document.querySelectorAll('.col')


let cross = false;
col.forEach(function(curVal) {
    curVal.addEventListener('click', function(e) {
        cross = !cross;

        if (cross) {
            curVal.style.backgroundImage = 'url("crossgit.png")';
        } else {
            curVal.style.backgroundImage = 'url("circle.png")';
        }

    })
})