const headsOrTails = () => {
    document.addEventListener("click", spinCoin);
    function spinCoin() {
        let flip = document.getElementById("coin");
        flip.removeAttribute("class");
        flip.classList.add("spinAnim");
    }
    let result = Math.round(Math.random());
    let headsScore = 0;
    let tailsScore = 0;
    if (result === 1)
    {   
        let tailsLoses = document.getElementById("tails");
        tailsLoses.style.opacity = 0;
        let headsWins = document.getElementById("heads");
        headsWins.style.opacity = 1;
        
        headsScore++;
        document.getElementById("headsScore").innerText = headsScore;
    }
    else
    {
        let headsLoses = document.getElementById("heads");
        headsLoses.style.opacity = 0;
        let tailsWins = document.getElementById("tails");
        tailsWins.style.opacity = 1;

        tailsScore++;
        document.getElementById("tailsScore").innerText = tailsScore;
    }
}


const resetGame = () => {
    document.getElementById("headsScore").innerText = 0;
    document.getElementById("tailsScore").innerText = 0;;
}