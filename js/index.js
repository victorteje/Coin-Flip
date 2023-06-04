const headsOrTails = () => {
    document.addEventListener("click", spinCoin);

    function spinCoin() {
        let flip = document.getElementById("coin");
        flip.classList.remove("spinAnim");
        flip.classList.add("spinAnim");
        let showBackside = document.getElementById("tails");
        showBackside.style.opacity = 1;
    }

    let result = Math.round(Math.random());
    let headsScore = 0;
    let tailsScore = 0;

    if (result === 1)
    {   
        setTimeout(() => {
            let tailsLoses = document.getElementById("tails");
            tailsLoses.style.opacity = 0;
            let headsWins = document.getElementById("heads");
            headsWins.style.opacity = 1;
            headsScore++;
            document.getElementById("headsScore").innerText = headsScore;
        }, 1500);
    }
    else
    {
        setTimeout(() => {
            let headsLoses = document.getElementById("heads");
            headsLoses.style.opacity = 0;
            let tailsWins = document.getElementById("tails");
            tailsWins.style.opacity = 1;
            tailsScore++;
            document.getElementById("tailsScore").innerText = tailsScore;
            let ringSound = new Audio ("./../assets/SonicRing.mp3")
            ringSound.play();
        }, 1500);
    }
}

const resetGame = () => {
    document.getElementById("headsScore").innerText = 0;
    document.getElementById("tailsScore").innerText = 0;;
}