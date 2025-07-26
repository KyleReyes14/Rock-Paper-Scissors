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
    const playerRock = document.getElementById("player-rock");
    const playerPaper = document.getElementById("player-paper");
    const playerScissors = document.getElementById("player-scissors");
    const computerPickContainer = document.getElementById("computer-pick");
    
    playerRock.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/rock-inserted.png" alt="Rock hand" class="inserted-img">`
    })  

    playerScissors.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/scissors-inserted.png" alt="Scissors hand" class="inserted-img">`
    })

        playerPaper.addEventListener("click", () => {
        let playerPickContainer = document.getElementById("player-pick")
        playerPickContainer.innerHTML = `<img src="./images/paper-inserted.png" alt="Paper hand" class="inserted-img">`
    })
})

document.addEventListener("DOMContentLoaded", () => {
    const submit = document.getElementById("submit-btn")

    submit.addEventListener("click", () => {
        const computerPickContainer = document.getElementById("computer-pick")
        
        getComputerChoice()
        if (computerPick === "Rock") {
            computerPickContainer.innerHTML = `<img src="./images/rock-inserted.png" alt="Rock hand" class="inserted-img">`
        } else if (computerPick === "Scissors") {
            computerPickContainer.innerHTML = `<img src="./images/scissors-inserted.png" alt="Scissors hand" class="inserted-img">`
        } else {
            computerPickContainer.innerHTML = `<img src="./images/paper-inserted.png" alt="Paper hand" class="inserted-img">`
        }
    })
})
