const titleContainer = document.getElementById("title");
const boardContainer = document.getElementById("board");
const buttonContainer = document.getElementById("level");
const optionContainer = document.getElementById("option");

titleContainer.innerHTML = `<h1>${TITLE}</h1>`;

let board, answer;

easyBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(EASY);
    const random = Math.floor((Math.random() * LEVELS.EASY.length));
    board = LEVELS.EASY[random].board;
    answer = LEVELS.EASY[random].answer;
    render();
});

mediumBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(MEDIUM);
    const random = Math.floor((Math.random() * LEVELS.MEDIUM.length));
    board = LEVELS.MEDIUM[random].board;
    answer = LEVELS.MEDIUM[random].answer;
    render();
});

hardBtn.addEventListener("click", () => {
    buttonContainer.style.display = "none";
    window.game = new Sudoku(HARD);
    const random = Math.floor((Math.random() * LEVELS.HARD.length));
    board = LEVELS.HARD[random].board;
    answer = LEVELS.HARD[random].answer;
    render();
});