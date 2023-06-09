let headsScore = 0;
let tailsScore = 0;

let jumpSound = new Audio ("./../assets/sounds/jump.mp3");
let ringSound = new Audio ("./../assets/sounds/sonicRing.mp3");
let ringLoss = new Audio ("./../assets/sounds/sonicRingLoss.mp3");

const headsOrTails = () => {
    let disableFlipButton = document.getElementById("flip");
    disableFlipButton.disabled = true;
    let disableResetButton = document.getElementById("reset");
    disableResetButton.disabled = true;
    
    setTimeout(() => {
        disableFlipButton.disabled = false; 
        disableResetButton.disabled = false;                
    }, 1600);
  
    let flip = document.getElementById("coin");
    flip.classList.remove("spinAnim");
    setTimeout(() => {
        flip.classList.add("spinAnim");            
    }, 1);

    jumpSound.play();
    jumpSound.volume = .2;
    
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
            ringSound.play();
            ringSound.volume = .7;
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
            ringSound.play();
            ringSound.volume = .7;
        }, 1500);
    }
    let showBacksideHeads = document.getElementById("heads");
    let showBacksideTails = document.getElementById("tails");
    showBacksideHeads.style.opacity = 1;
    showBacksideTails.style.opacity = 1;
}

const resetGame = () => {
    headsScore = 0;
    tailsScore = 0;
    let resetHeads = document.getElementById("headsScore");
    resetHeads.innerHTML = 0;
    let resetTails = document.getElementById("tailsScore");
    resetTails.innerHTML = 0;
    ringLoss.play();
    ringLoss.volume = .7;
}