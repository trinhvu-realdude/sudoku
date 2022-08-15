const TITLE = "SUDOKU";

const EASY = "EASY";
const MEDIUM = "MEDIUM";
const HARD = "HARD";

const BACK = "Back";
const NEXT = "Next";

const LEVELS = {
    EASY: [
        {
            board: [
                [1, 2, 3],
                [6, 0, 4],
                [7, 8, 9]
            ],
            answer: [
                [1, 2, 3],
                [6, 5, 4],
                [7, 8, 9]
            ]
        },
        {
            board: [
                [2, 1, 4],
                [9, 5, 0],
                [6, 7, 8]
            ],
            answer: [
                [2, 1, 4],
                [9, 5, 3],
                [6, 7, 8]
            ]
        },
        {
            board: [
                [9, 3, 4],
                [6, 5, 7],
                [1, 2, 0]
            ],
            answer: [
                [9, 3, 4],
                [6, 5, 7],
                [1, 2, 8]
            ]
        }
    ],

    MEDIUM: [
        {
            board: [
                [0, 0, 3, 0, 1, 0],
                [5, 6, 0, 3, 2, 0],
                [0, 5, 4, 2, 0, 3],
                [2, 0, 6, 4, 5, 0],
                [0, 1, 2, 0, 4, 5],
                [0, 4, 0, 1, 0, 0]
            ],
            answer: [
                [4, 2, 3, 5, 1, 6],
                [5, 6, 1, 3, 2, 4],
                [1, 5, 4, 2, 6, 3],
                [2, 3, 6, 4, 5, 1],
                [3, 1, 2, 6, 4, 5],
                [6, 4, 5, 1, 3, 2]
            ]
        }
    ],

    HARD: [
        {
            board: [
                [5, 3, 0, 0, 7, 0, 0, 0, 0],
                [6, 0, 0, 1, 9, 5, 0, 0, 0],
                [0, 9, 8, 0, 0, 0, 0, 6, 0],
                [8, 0, 0, 0, 6, 0, 0, 0, 3],
                [4, 0, 0, 8, 0, 3, 0, 0, 1],
                [7, 0, 0, 0, 2, 0, 0, 0, 6],
                [0, 6, 0, 0, 0, 0, 2, 8, 0],
                [0, 0, 0, 4, 1, 9, 0, 0, 5],
                [0, 0, 0, 0, 8, 0, 0, 7, 9]
            ],
            answer: [
                [5, 3, 4, 6, 7, 8, 9, 1, 2],
                [6, 7, 2, 1, 9, 5, 3, 4, 8],
                [1, 9, 8, 3, 4, 2, 5, 6, 7],
                [8, 5, 9, 7, 6, 1, 4, 2, 3],
                [4, 2, 6, 8, 5, 3, 7, 9, 1],
                [7, 1, 3, 9, 2, 4, 8, 5, 6],
                [9, 6, 1, 5, 3, 7, 2, 8, 4],
                [2, 8, 7, 4, 1, 9, 6, 3, 5],
                [3, 4, 5, 2, 8, 6, 1, 7, 9]
            ]
        }
    ]
}

const RESULT = {
    WIN: "Congratulations! You win.",
    SOMETHING_WRONG: "Something wrong! Let's check again."
}