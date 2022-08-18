function render() {
    let html = "";

    for (let i = 0; i < board.length; i++) {
        html += `<div class='row' data-id='row-${i}'>`;

        for (let j = 0; j < board[i].length; j++) {
            html += `<div class='column' data-id='col-${j}'>
                        ${board[i][j] != 0 
                        ? board[i][j] 
                        : `<input type='text' class='input-field' maxlength='1' id='input-${i}${j}' oninput='go(${i}, ${j})'>`} 
                    </div>
            `;
        }

        html += "</div>";
    }

    optionContainer.innerHTML = `
        <button id='backBtn' onclick='onBack()'>&#8592; ${BACK}</button>
        <button id='nextBtn' onclick='onNext()' disabled>${NEXT} &#8594;</button>
    `;
    boardContainer.innerHTML = html;

    (function ($) {
        $.fn.inputFilter = function (inputFilter) {
            return this.on("input keydown keyup mousedown mouseup select contextmenu drop", function () {
                if (inputFilter(this.value)) {
                    this.oldValue = this.value;
                    this.oldSelectionStart = this.selectionStart;
                    this.oldSelectionEnd = this.selectionEnd;
                } else if (this.hasOwnProperty("oldValue")) {
                    this.value = this.oldValue;
                    this.setSelectionRange(this.oldSelectionStart, this.oldSelectionEnd);
                } else {
                    this.value = "";
                }
            });
        };
    }(jQuery));
    
    $(document).ready(function () {
        $(".input-field").inputFilter(function (value) {
            return /^\d*$/.test(value);
        });
    });
}

function go(i, j) {
    let input = parseInt(document.getElementById(`input-${i}${j}`).value);
    board[i][j] = input;

    checkAnswer();
}

function checkAnswer() {
    const resultContainer = document.getElementById("result");
    resultContainer.innerHTML = "";
    let compare = 0;
    let checkFullBoard = 0;

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] != answer[i][j]) {
                compare++;
            }

            if (board[i][j] == 0) {
                checkFullBoard++;
            }
        }
    }

    if (compare == 0) {
        const winResult = document.createElement("div");
        winResult.className = "win";
        winResult.innerHTML = WIN;
        resultContainer.append(winResult);

        const nextBtn = document.getElementById("nextBtn");
        nextBtn.disabled = false;
    } 
}

function onBack() {
    localStorage.clear();
    window.location.reload();
}

function onNext() {
    const data = game.getData();
    const level = game.getLevel();
    const levels = JSON.parse(localStorage.getItem(level));
    const resultContainer = document.getElementById("result");

    if (levels.length >= data.length) {
        alert("Brilliant! You did it.");
        onBack();
    } else {
        const random = generateUniqueValue(levels , data);
        localStorage.setItem(level, JSON.stringify(levels));
        boardContainer.innerHTML = "";
        resultContainer.innerHTML = "";
        board = data[random].board;
        answer = data[random].answer;
        render();
    }
}

function generateUniqueValue(levels, data) {
    let check = 0;
    const random = Math.floor(Math.random() * data.length);
    for (let i = 0; i < levels.length; i++) {
        if (levels[i] == random) {
            check++;
        }
    }
    if (check == 0) {
        levels.push(random);
        return random;  
    } else {
        return generateUniqueValue(levels, data);
    }
}