let pPoint = 0
let cPoint = 0

function getComputerChoice () {
    const index = Math.floor(Math.random()*3)
    if (index === 2) {
        computerPick = "Rock"
        return computerPick
    } else if (index === 1) {
        computerPick = "Scissors"
        return computerPick
    } else {
        computerPick = "Paper"
        return computerPick
    }
}

document.addEventListener("DOMContentLoaded", () => {
    let playerPick = ""
    const playerRock = document.getElementById("player-rock");
    const playerPaper = document.getElementById("player-paper");
    const playerScissors = document.getElementById("player-scissors");
    const computerPickContainer = document.getElementById("computer-pick");
    const submit = document.getElementById("submit-btn")
    
    playerRock.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/rock-inserted.png" alt="Rock hand" class="inserted-img">`
        computerPickContainer.innerHTML = `<p class="computer" id="computer-pick"> Opponent's turn <br> will appear here </p>`
        playerPick = "Rock"
    })  

    playerScissors.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/scissors-inserted.png" alt="Scissors hand" class="inserted-img">`
        computerPickContainer.innerHTML = `<p class="computer" id="computer-pick"> Opponent's turn <br> will appear here </p>`
        playerPick = "Scissors"
    })

    playerPaper.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/paper-inserted.png" alt="Paper hand" class="inserted-img">`
        computerPickContainer.innerHTML = `<p class="computer" id="computer-pick"> Opponent's turn <br> will appear here </p>`
        playerPick = "Paper"
    })

    //when submit button is clicked
    submit.addEventListener("click", () => {
        const computerPickContainer = document.getElementById("computer-pick");
        const playerTurnCard = document.getElementById("player-turn-card");
        const computerTurnCard = document.getElementById("computer-turn-card");
        const whoComputer = document.getElementById("who-computer");
        const whoPlayer = document.getElementById("who-player");
        const curPlayerScore = document.getElementById("cur-player-score")
        const curComputerScore = document.getElementById("cur-computer-score")
        const curRound = document.getElementById("rnd-num")
        const endRound = document.getElementById("submit-btn")
        const txtRnd = document.getElementById("txt-rnd")


        const computerPick = getComputerChoice(); //runs random computer choice

        //change computer pick container after submit button
        if (computerPick === "Rock") {
            computerPickContainer.innerHTML = `<img src="./images/rock-inserted.png" alt="Rock hand" class="inserted-img">`
        } else if (computerPick === "Scissors") {
            computerPickContainer.innerHTML = `<img src="./images/scissors-inserted.png" alt="Scissors hand" class="inserted-img">`
        } else {
            computerPickContainer.innerHTML = `<img src="./images/paper-inserted.png" alt="Paper hand" class="inserted-img">`
        }
        
        //default game state
        playerTurnCard.className = "player-pick-container";
        computerTurnCard.className = "computer-pick-container";
        whoPlayer.className = "who";
        whoComputer.className = "who";

        //Player winning
        if (playerPick === "Rock" && computerPick === "Scissors" ||
            playerPick === "Scissors" && computerPick === "Paper" ||
            playerPick === "Paper" && computerPick === "Rock") {

            playerTurnCard.className = "win-round-container";
            computerTurnCard.className = "lose-round-container";
            whoPlayer.className = "win-who";
            whoComputer.className = "lose-who";

            //round score settlement
            let pPoint = Number(curPlayerScore.textContent);
            pPoint++;
            curPlayerScore.textContent = pPoint.toString();


        //tie
        } else if (playerPick === computerPick) {
            playerTurnCard.className = "player-pick-container";
            computerTurnCard.className = "computer-pick-container";
            whoPlayer.className = "who";
            whoComputer.className = "who";
        
        //computer winning
        } else {
            playerTurnCard.className = "lose-round-container";
            computerTurnCard.className = "win-round-container";
            whoPlayer.className = "lose-who";
            whoComputer.className = "win-who";
            
            //round score settlement
            let cPoint = Number(curComputerScore.textContent);
            cPoint++;
            curComputerScore.textContent = cPoint.toString();
        }

        //conclude round to 5
        let cRnd = Number(curRound.textContent);
        cRnd++;
        curRound.textContent = cRnd.toString();
        endRound.disabled = true;

        if (cRnd === 5) {
            endRound.textContent = "Please refresh browser"
            if (pPoint > cPoint) {
                txtRnd.textContent = "You Win! Congratulations!"
                txtRnd.className = "rnd-win"

            } else if (pPoint < cPoint) {
                txtRnd.textContent = "You Lose, Try again!"
                txtRnd.className = "rnd-lose"
            } else {
                txtRnd.textContent = "It's a Tie!"
                txtRnd.className = "rnd-tie"
            }
        } else {
            txtRnd.className = "rounds"
        }

    });
})