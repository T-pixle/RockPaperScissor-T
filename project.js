// part 1: number of rounds
var roundOption = prompt("How many rounds would you like to play.");
var roundNumber = parseInt(roundOption, 10);
const win = "You win!!!";
const lose = "Sorry, you lost :(";
const tie = "It's a tie.";
var winNum = 0;
var loseNum = 0;
var tieNum = 0;

function newScore () {
    winNum;
    loseNum;
    tieNum;
}

// part 2: the game 
for (let i = 1; i <= roundNumber; i++) {
    var userchoice = prompt("r, p, or s");
    const computerOption = ["r", "p", "s"]
    const computerNumber = Math.floor(Math.random() * 3);
    const computerChoice = computerOption[computerNumber];
    
    if(userchoice === computerChoice){
        alert(tie);
        tieNum++;
    }else if(userchoice === "r"){
        if(computerChoice === "s"){
        alert(win);
        winNum++;
        newScore();
        }else{
        alert(lose);
        loseNum++;
        newScore();
        }
    }else if(userchoice === "p"){
        if(computerChoice === "r"){
            alert(win);
            winNum++;
            newScore();
        }else{
            alert(lose);
            loseNum++;
            newScore();
        }
    }else if(userchoice === "s"){
        if(computerChoice === "p"){
            alert(win);
            winNum++;
            newScore();
        }else{
            alert(lose);
            loseNum++;
            newScore();
        }
    }
}

// part 3: the scoreborad
alert("Won: " + winNum + " Lost: " + loseNum + " Tied: " + tieNum);