function generate() {

    switch (game.getLevel()) {
        case EASY:
            const boardEasy = [...THREE_LEVEL];

            for (let i = 0; i < boardEasy.length; i++) {
                let inside = new Array(3);
                for (let j = 0; j < inside.length; j++) {
                    inside[j] = generateElementArray(boardEasy);
                    boardEasy[i] = inside;
                }
            }

            console.log(boardEasy);
            return boardEasy;

        case MEDIUM:
            const boardMedium = [...SIX_LEVEL];
            console.log(`boardMedium::: [${boardMedium}]`);

            for (let i = 0; i < boardMedium.length; i++) {
                let row = new Array(6);

            }
            return boardMedium;

        case HARD:
            const boardHard = [...NINE_LEVEL];
            console.log(`boardHard::: [${boardHard}]`);

            for (let i = 0; i < boardHard.length; i++) {
                let row = new Array(9);

            }
            return boardHard;

        default:
            break;
    }
}

function generateElementArray(a) {
    const random = Math.floor(Math.random() * 9) + 1;

    for (let i = 0; i < a.length; i++) {
        for (let j = 0; j < a[i].length; j++) {
            if (a[i][j] == random) {
                return generateElementArray(a);
            }
        }
    }
    return random;
}
