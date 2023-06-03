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

const resetGame = () => {
    let resetHeads = document.getElementById("heads");
    resetHeads.style.opacity = 0;
    let resetTails = document.getElementById("tails");
    resetTails.style.opacity = 0;
}