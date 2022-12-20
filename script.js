let combo = [];
let end = false;

const winning_combinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const Player = (sign) => {
    this.sign = sign;

    const getSign = () => {
        return sign;
    };

    return { getSign };
};

const player1 = Player("X");
const player2 = Player("O");

let currentPlayer = player1.getSign();

const square = document.querySelectorAll(".square");
square.forEach((el) => {
    el.addEventListener("click", (e) => {
        if (end == false) {
            if (e.target.textContent == "") {
                combo.push(e.target.id);
                e.target.textContent = currentPlayer;
                checkForWinner();
                currentPlayer =
                    currentPlayer == player1.getSign()
                        ? player2.getSign()
                        : player1.getSign();
            }
        }
    });
});

const msg = document.querySelector(".msg");
const checkForWinner = () => {
    if (combo.length == 9) {
        end = true;
        msg.textContent = "It's a Tie!";
    }

    winning_combinations.forEach((e) => {
        let check = e.every(
            (idx) => square[idx].textContent.trim() == currentPlayer
        );
        if (check) {
            end = true;
            msg.textContent = "Player " + currentPlayer + " has won!";
        }
    });
};

const restart = () => {
    combo = [];
    currentPlayer = player1.getSign();
    square.forEach((el) => {
        el.textContent = "";
    });
    end = false;
    msg.textContent = "";
};