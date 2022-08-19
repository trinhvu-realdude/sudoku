const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const optionContainer = document.getElementById("option");

let board,
    answer;

let i = 0;

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

typeWriter();

