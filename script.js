'use strict';


/*
delete next time

THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME
THERE IS A MASSIVE BUG IN PLAYING THE GAME


*/





const col = document.querySelectorAll('.col')
const resetButton = document.querySelector('.reset_button');
const circleStart = document.querySelector('#circle_add');
const crossStart = document.querySelector('#cross_add');
const titleButtons = document.querySelectorAll('.title_buttons')
const popupBox = document.querySelector('.popup_back')
const mainBody = document.querySelector('.main_body')
const popupButton = document.querySelector('.popup_button')

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
                
                if(curVal.classList.contains('diagonal') || curVal.classList.contains('diagonal1') || curVal.classList.contains('diagonal2')) {
                    curVal.classList.add('cross')
                }

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
                
                if(curVal.classList.contains('diagonal') || curVal.classList.contains('diagonal1') || curVal.classList.contains('diagonal2')) {
                    console.log('test', curVal)
                    curVal.classList.add('circle')
                }
            }
            cross = !cross;
            console.log(col)
            for(const property in finalObj) {
                if(finalObj[property] > 2) {
                    winnerPopup(property)
                }
            }

            if(diagonalCheck() == 1) {
                winnerPopup('circle')
            }

            if(diagonalCheck() == 2) {
                winnerPopup('cross')
            }
            
        }

    })
})
// long ass day on tic tac toe
function diagonalCheck() {
    let arrCheck = []
    col.forEach(function(curVal) {
        if (curVal.classList.contains('diagonal1')) {
            if(curVal.classList.contains('cross')) {
                arrCheck.push('yes')
                console.log('yes')
            }
            
        }

    })
    if(arrCheck.length == 2) {
        console.log('yur')
    }
}

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
      <div class="popup winner_box">
        <h1 class="popup_title winner">Congratulations ${realWinner}</h1>
        <img class="img_popup" src="${realWinner}.png">
        <button class="popup_button button_winner" onclick="removeNote()">Understood!</button>
      </div>
    </div>`
    mainBody.insertAdjacentHTML('afterbegin', markup)
    callEvent();
}

function callEvent() {
    const popupBox = document.querySelector('.popup_back')
    document.querySelector('.popup_button').addEventListener('click', function() {
        popupBox.remove();
    })
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