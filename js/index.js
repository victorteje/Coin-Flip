const headsOrTails = () => {
    let result = Math.round(Math.random());
    if (result === 1)
    {
        let headsWins = document.getElementById("heads");
        headsWins.style.opacity = 1;
    }
    else
    {
        let tailsWins = document.getElementById("tails");
        tailsWins.style.opacity = 1;
    }
}


document.addEventListener("click", spinCoin);
function spinCoin() {
    let flip = document.getElementById("coin");
    flip.classList.add("spinAnim");
}

const resetGame = () => {
    let resetHeads = document.getElementById("heads");
    resetHeads.style.opacity = 1;
    let resetTails = document.getElementById("tails");
    resetTails.style.opacity = 0;
}