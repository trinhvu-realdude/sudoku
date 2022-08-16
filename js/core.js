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
    const random = Math.floor(Math.random() * levels.length);
    const easy = new Array();
    buttonContainer.style.display = "none";
    window.game = new Sudoku(EASY);
    board = levels[random].board;
    answer = levels[random].answer;
    easy.push(random);
    localStorage.setItem(EASY, JSON.stringify(easy));
    render();
});

mediumBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(MEDIUM);
    board = LEVELS.MEDIUM.board;
    answer = LEVELS.MEDIUM.answer;
    render();
});

hardBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(HARD);
    board = LEVELS.HARD.board;
    answer = LEVELS.HARD.answer;
    render();
});