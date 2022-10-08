const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const stopWatchContainer = document.getElementById("stopwatch");
const recordContainer = document.getElementById("record");
const optionContainer = document.getElementById("option");

let board;
let answer;

let i = 0;

let seconds = -1;
let secs,
    mins = 0;
let interval = null;

easyBtn.addEventListener("click", () => {
    window.game = new Sudoku(EASY);
    initGame();
});

mediumBtn.addEventListener("click", () => {
    window.game = new Sudoku(MEDIUM);
    initGame();
});

hardBtn.addEventListener("click", () => {
    window.game = new Sudoku(HARD);
    initGame();
});

function initGame() {
    let clone = new Array(3);
    answer = generate();
    
    for (let i = 0; i < answer.length; i++) {
        let inside = [...answer[i]];
        clone[i] = inside;
    }

    board = clone;
    const i = Math.floor(Math.random() * 3);
    const j = Math.floor(Math.random() * 3);
    board[i][j] = 0;
    buttonContainer.style.display = "none";
    render();
}

function typeWriter() {
    const heading = document.getElementById("heading");
    if (i < TITLE.length) {
        heading.innerHTML += TITLE.charAt(i);
        i++;
        setTimeout(typeWriter, 100);
    }
}


function loadRecord() {
    const record = JSON.parse(localStorage.getItem(RECORD));

    if (record == null) {
        recordContainer.innerHTML = WELCOME;
    } else {
        const minute = parseInt(record.record.minute);
        const second = parseInt(record.record.second);
        const level = record.level;
        recordContainer.innerHTML = minute == 0 ? `<span style='font-weight: bold'>#${level}:</span> ${second}s 🚀` : `<span style='font-weight: bold'>#${level}:</span> ${minute}m${second}s 🚀`;
    }
}

typeWriter();
loadRecord();