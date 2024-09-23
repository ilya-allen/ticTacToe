'use strict';


/*
delete next time
god forbid i wanna break
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
let countCheck = 9;

// tough day today

let ready = false;
let cross = false;
col.forEach(function(curVal) {
    curVal.addEventListener('click', function(e) {
        if(curVal.style.backgroundImage == '' && ready == true) {
            console.log(col)
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
                
                if(curVal.classList.contains('diagonal') || curVal.classList.contains('diagonal0') || curVal.classList.contains('diagonal1')) {
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
                
                if(curVal.classList.contains('diagonal') || curVal.classList.contains('diagonal0') || curVal.classList.contains('diagonal1')) {
                    curVal.classList.add('circle')
                }
            }
            countCheck--;
            cross = !cross;
            console.log(col)
            for(const property in finalObj) {
                if(finalObj[property] > 2) {
                    winnerPopup(property)
                    countCheck = 9;
                } 
            }

            if(countCheck == 0) {
                drawPopup();
            }
            diagonalCheck();

            
            
        }

    })
})
// long ass day on tic tac toe
function diagonalCheck() {
    let classChecker = ['cross', 'circle']
    for(let i = 0; i !== 2; i ++) {
        let arrCheck = []
        col.forEach(function(curVal) {
            if (curVal.classList.contains(`diagonal${i}`)) {
                if(curVal.classList.contains('cross') || curVal.classList.contains('circle')) {
                    console.log('diagona')
                    arrCheck.push(curVal.classList[4])
                    console.log('yes')
                }
                
            }
    
        })
        if(arrCheck.length == 2 && arrCheck[0] == arrCheck[1]) {
            col.forEach(function(curVal) {
                if(curVal.classList.contains('diagonal')) {
                    if(curVal.classList[4] !== undefined && curVal.classList[4] == arrCheck[1]) {
                        winnerPopup(arrCheck[1])
                    }
                }
            })
        }
    }
}

// exams today soz

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

function drawPopup() {
    const drawMark = `
    <div class="popup_back">
      <div class="popup winner_box">
        <h1 class="draw_popup_title">Both Players Tied!!</h1>
        <button class="popup_button draw_button" onclick="removeNote()">Understood!</button>
      </div>
    </div>`
    mainBody.insertAdjacentHTML('afterbegin', drawMark)
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
        if(curVal.classList.contains('cross')) {
            curVal.classList.remove('cross')
        } 

        if(curVal.classList.contains('circle')) {
            curVal.classList.remove('circle')
        } 
    })
    resetButton.classList.add('disabled')
    titleButtons.forEach(function(curVal) {
        curVal.classList.remove('disabled')
    })
    countCheck = 9;

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
