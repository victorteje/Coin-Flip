const headsOrTails = () => {
    // document.addEventListener("click", resetTails);
    // function resetTails() {
    //     let hideTails = document.getElementById("tails");
    //      hideTails.style.opacity = 0;
    //     }
    document.addEventListener("click", spinCoin);
    function spinCoin() {
        let flip = document.getElementById("coin");
        flip.removeAttribute("class");
        flip.classList.add("spinAnim");
    }
    let result = Math.round(Math.random());
    if (result === 1)
    {   
        let tailsLoses = document.getElementById("tails");
        tailsLoses.style.opacity = 0;
        let headsWins = document.getElementById("heads");
        headsWins.style.opacity = 1;
    }
    else
    {
        let headsLoses = document.getElementById("heads");
        headsLoses.style.opacity = 0;
        let tailsWins = document.getElementById("tails");
        tailsWins.style.opacity = 1;
    }
}

const resetGame = () => {
    let resetHeads = document.getElementById("heads");
    resetHeads.style.opacity = 1;
    let resetTails = document.getElementById("tails");
    resetTails.style.opacity = 0;
}