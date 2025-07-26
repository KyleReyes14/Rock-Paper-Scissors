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
