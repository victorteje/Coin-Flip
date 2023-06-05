let headsScore = 0;
let tailsScore = 0;
    
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
    
    if (result === 1)
    {   
        setTimeout(() => {
            let tailsLoses = document.getElementById("tails");
            tailsLoses.style.opacity = 0;
            let headsWins = document.getElementById("heads");
            headsWins.style.opacity = 1;
            headsScore++;
            document.getElementById("headsScore").innerHTML = headsScore;
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
            document.getElementById("tailsScore").innerHTML = tailsScore;
            let ringSound = new Audio ("./../assets/SonicRing.mp3")
            ringSound.play();
        }, 1500);
    }
}

const resetGame = () => {
    let resetHeads = 0;
    document.getElementById("headsScore").innerHTML = resetHeads;
    let resetTails = 0;
    document.getElementById("tailsScore").innerHTML = resetTails;
}