'use strict';

const col = document.querySelectorAll('.col')
const resetButton = document.querySelector('.reset_button');
const circleStart = document.querySelector('#circle_add');
const crossStart = document.querySelector('#cross_add');
const titleButtons = document.querySelectorAll('.title_buttons')
const popupBox = document.querySelector('.popup_back')
const mainBody = document.querySelector('.main_body')

let finalObj = {

}

// tough day today

let ready = false;
let cross = false;
col.forEach(function(curVal) {
    curVal.addEventListener('click', function(e) {
        if(curVal.style.backgroundImage == '' && ready == true) {
            if (cross == true) {
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
                console.log(finalObj)

            } else if(cross == false) {
                curVal.style.backgroundImage = 'url("circle.png")';
                if(Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] += 1;
                    finalObj[`${curVal.classList[2]}_circle`] += 1;
                } else if (!Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] = 1;
                    finalObj[`${curVal.classList[2]}_circle`] += 1;
                } else if (Object.hasOwn(finalObj, `${curVal.classList[1]}_circle`) && !Object.hasOwn(finalObj, `${curVal.classList[2]}_circle`)) {
                    finalObj[`${curVal.classList[1]}_circle`] += 1;
                    finalObj[`${curVal.classList[2]}_circle`] = 1;
                } else {
                    finalObj[`${curVal.classList[1]}_circle`] = 1;
                    finalObj[`${curVal.classList[2]}_circle`] = 1;
                }
                console.log(finalObj)
            }
            cross = !cross;
            console.log(cross)
            for(const property in finalObj) {
                if(finalObj[property] > 2) {
                    winnerPopup(property)
                }
            }
            
        }

    })
})

function winnerPopup(winner) {
    console.log(winner)
    let realWinner = winner.slice(winner.length - 3)

    if(realWinner == 'cle') {
        realWinner = 'Circles'
    } else {
        realWinner = 'Crosses'
    }
    console.log(realWinner)
    const markup = `
    <div class="popup_back">
      <div class="popup">
        <h1 class="popup_title">Congratulations ${realWinner}</h1>
        <button class="popup_button" onclick="removeNote()">Understood!</button>
      </div>
    </div>`
    mainBody.insertAdjacentHTML('afterbegin', markup)
}

function removeNote() {
    popupBox.remove();
}

resetButton.addEventListener('click', function() {
    ready = false;
    finalObj = {};
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