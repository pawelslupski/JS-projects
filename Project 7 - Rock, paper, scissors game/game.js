const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0
}

const game = {
    playerHand: "",
    aiHand: ""
}

const hands = [...document.querySelectorAll('.select img')];

// First function
function handSelection() {
    game.playerHand = this.dataset.option;
    hands.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

// const handSelection = (e) => {
//     console.log(e.target);
//     console.log(e.currentTarget);
// }

function aiChoice() {
    const aiHand = hands[Math.floor(Math.random() * 3)].dataset.option;
    return aiHand;
}

function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === "paper" && ai === "rock") || (player === "rock" && ai === "scissors") || (player === "scissors" && ai === "paper")) {
        return "win";
    } else {
        return "loss";
    }
}

function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;
    document.querySelector('[data-summary="ai-choice"]').textContent = ai;
    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;
    if (result === "win") {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "You won!";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === "loss") {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "AI won!";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "It's a draw!";
        document.querySelector('[data-summary="who-win"]').style.color = "gray";
    }
}

function startGame() {
    if (!game.playerHand) return alert("Choose a hand!");
    game.aiHand = aiChoice();
    const gameResult = checkResult(game.playerHand, game.aiHand);
    publishResult(game.playerHand, game.aiHand, gameResult);
}

hands.forEach(hand => hand.addEventListener('click', handSelection));

document.querySelector('.start').addEventListener('click', startGame);