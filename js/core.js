const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const stopWatchContainer = document.getElementById("stopwatch");
const recordContainer = document.getElementById("record");
const optionContainer = document.getElementById("option");

let board,
    answer;

let i = 0;

let seconds = -1;
let secs,
    mins = 0;
let interval = null;

easyBtn.addEventListener("click", () => {
    const levels = LEVELS.EASY;
    initGame(EASY, levels);
});

mediumBtn.addEventListener("click", () => {
    const levels = LEVELS.MEDIUM;
    initGame(MEDIUM, levels);
});

hardBtn.addEventListener("click", () => {
    const levels = LEVELS.HARD;
    initGame(HARD, levels);
});

function initGame(level, data) {
    const random = Math.floor(Math.random() * data.length);
    const levelLocal = new Array();
    buttonContainer.style.display = "none";
    window.game = new Sudoku(level, data);
    board = data[random].board;
    answer = data[random].answer;
    levelLocal.push(random);
    sessionStorage.setItem(level, JSON.stringify(levelLocal));
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

function checkUniqueArray(array) {
    let check = 0;
    for (let i = 0; i < array.length; i++) {
        let temp = array[i];
        for (let j = array.length - 1; j >= 0; j--) {
            if (temp != array[j]) {
                check++;
            }
        }
    }
    
    return check != array.length * 2;
}

function generateUniqueArray(array, child, parent) {
    for (let i = 0; i < array.length; i++) {
        const random = Math.floor(Math.random() * (child * parent)) + 1;
        array[i] = random;
    }

    if (!checkUniqueArray(array)) {
        return array;
    } else {
        return generateUniqueArray(array, child, parent);
    }
}

typeWriter();
loadRecord();