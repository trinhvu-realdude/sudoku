function generate() {

    const board = THREE_X_THREE;

    for (let i = 0; i < board.length; i++) {
        let inside = new Array(3);
        for (let j = 0; j < inside.length; j++) {
            inside[j] = generateElementArray(board);
            board[i] = inside;
        }
    }

    return board;
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

console.log(JSON.stringify(generate()));