'use strict';

const col = document.querySelectorAll('.col')
const resetButton = document.querySelector('.reset_button');
const circleStart = document.querySelector('#circle_add');
const crossStart = document.querySelector('#cross_add');
const titleButtons = document.querySelectorAll('.title_buttons')


let cross = false;
col.forEach(function(curVal) {
    curVal.addEventListener('click', function(e) {
        if (cross) {
            curVal.style.backgroundImage = 'url("cross.png")';
        } else {
            curVal.style.backgroundImage = 'url("circle.png")';
        }
        cross = !cross;

    })
})

resetButton.addEventListener('click', function() {
    col.forEach(function(curVal) {
        curVal.style.backgroundImage = ''
    })
    resetButton.classList.add('disabled')
    titleButtons.forEach(function(curVal) {
        curVal.classList.remove('disabled')
    })
})

circleStart.addEventListener('click', function() {
    cross = false;
    titleButtons.forEach(function(curVal) {
        curVal.classList.add('disabled')
    })
    resetButton.classList.remove('disabled')
})

crossStart.addEventListener('click', function() {
    cross = true;
    titleButtons.forEach(function(curVal) {
        curVal.classList.add('disabled')
    })
    resetButton.classList.remove('disabled')
})