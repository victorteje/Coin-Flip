const headsOrTails = () => {
    let result = Math.round(Math.random());
    if (result === 1)
    {
        let headsWins = document.getElementById("tails");
        headsWins.style.opacity = 0;
    }

    else
    {
        let tailsWins = document.getElementById("heads");
        tailsWins.style.opacity = 0;  
    }
}

const resetGame = () => {
    let resetHeads = document.getElementById("heads");
    resetHeads.style.opacity = 1;
    let resetTails = document.getElementById("tails");
    resetTails.style.opacity = 1;
}