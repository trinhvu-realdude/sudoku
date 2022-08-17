const titleContainer = document.getElementById("title");
const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const optionContainer = document.getElementById("option");
const resultContainer = document.getElementById("result");

titleContainer.innerHTML = `<h1>${TITLE}</h1>`;

let board,
    answer;

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
    localStorage.setItem(level, JSON.stringify(levelLocal));
    render();
}
