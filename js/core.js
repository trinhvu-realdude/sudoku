const titleContainer = document.getElementById("title");
const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const optionContainer = document.getElementById("option");
const resultContainer = document.getElementById("result");

titleContainer.innerHTML = `<h1>${TITLE}</h1>`;

let board, answer;

easyBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(EASY);
    board = EASY_INIT.board;
    answer = EASY_INIT.answer;
    render();
});

mediumBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(MEDIUM);
    board = MEDIUM_INIT.board;
    answer = MEDIUM_INIT.answer;
    render();
});

hardBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(HARD);
    board = HARD_INIT.board;
    answer = HARD_INIT.answer;
    render();
});