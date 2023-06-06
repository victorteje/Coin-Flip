let headsScore = 0;
let tailsScore = 0;
    
const headsOrTails = () => {
    let disableButton = document.getElementById("flip");
    disableButton.disabled = true;
    setTimeout(() => {
        disableButton.disabled = false;        
    }, 1600);
  
    let flip = document.getElementById("coin");
    flip.classList.remove("spinAnim");
    setTimeout(() => {
        flip.classList.add("spinAnim");            
    }, 1);

    let showBacksideHeads = document.getElementById("heads");
    showBacksideHeads.style.opacity = 1;
    let showBacksideTails = document.getElementById("tails");
    showBacksideTails.style.opacity = 1;

    // function ramdomOpacity(element){
    //     if(element === "heads"){
    //         showBackside.style.opacity = 1;
    //     }
    //     if(element === "tails"){
    //         showBackside.style.opacity = 1;
    //     }
    // }

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
            let ringSound = new Audio ("./../assets/SonicRing.mp3");
            ringSound.play();
        }, 1500);
    }
}

const resetGame = () => {
    headsScore = 0;
    tailsScore = 0;
    let resetHeads = document.getElementById("headsScore");
    resetHeads.innerHTML = 0;
    let resetTails = document.getElementById("tailsScore");
    resetTails.innerHTML = 0;
    let ringLoss = new Audio ("./../assets/SonicRingLoss.mp3");
    ringLoss.play();
}