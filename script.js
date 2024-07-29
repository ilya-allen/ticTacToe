'use strict';

const col = document.querySelectorAll('.col')
const resetButton = document.querySelector('.reset_button');
const circleStart = document.querySelector('#circle_add');
const crossStart = document.querySelector('#cross_add');
const titleButtons = document.querySelectorAll('.title_buttons')
const popupBox = document.querySelector('.popup_back')

let finalObj = {

}

let ready = false;
let cross = false;
col.forEach(function(curVal) {
    curVal.addEventListener('click', function(e) {
        if(curVal.style.backgroundImage == '' && ready == true) {
            if (cross) {
                curVal.style.backgroundImage = 'url("cross.png")';
                if(Object.hasOwn(finalObj, `${curVal.classList[1]}_cross`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_cross`)) {
                    finalObj[`${curVal.classList[1]}_cross`] += 1;
                    finalObj[`${curVal.classList[2]}_cross`] += 1;
                } else if (!Object.hasOwn(finalObj, `${curVal.classList[1]}_cross`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_cross`)) {
                    finalObj[`${curVal.classList[1]}_cross`] = 1;
                    finalObj[`${curVal.classList[2]}_cross`] += 1;
                } else if (Object.hasOwn(finalObj, `${curVal.classList[1]}_cross`) && !Object.hasOwn(finalObj, `${curVal.classList[2]}_cross`)) {
                    finalObj[`${curVal.classList[1]}_cross`] += 1;
                    finalObj[`${curVal.classList[2]}_cross`] = 1;
                } else {
                    finalObj[`${curVal.classList[1]}_cross`] = 1;
                    finalObj[`${curVal.classList[2]}_cross`] = 1;
                }

            } else {
                curVal.style.backgroundImage = 'url("circle.png")';
                if(Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] += 1;
                    finalObj[`${curVal.classList[2]}_circle`] += 1;
                } else if (!Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] = 1;
                    finalObj[`${curVal.classList[2]}_circle`] += 1;
                } else if (!Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] += 1;
                    finalObj[`${curVal.classList[2]}_circle`] = 1;
                } else {
                    finalObj[`${curVal.classList[1]}_cross`] = 1;
                    finalObj[`${curVal.classList[2]}_cross`] = 1;
                }
                
            }
            cross = !cross;
        }

    })
})

function removeNote() {
    popupBox.remove();
}

resetButton.addEventListener('click', function() {
    ready = false;
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
    ready = true;
    titleButtons.forEach(function(curVal) {
        curVal.classList.add('disabled')
    })
    resetButton.classList.remove('disabled')
})

crossStart.addEventListener('click', function() {
    cross = true;
    ready = true;
    titleButtons.forEach(function(curVal) {
        curVal.classList.add('disabled')
    })
    resetButton.classList.remove('disabled')
})

// kata today