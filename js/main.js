// ----------------- VARIABLES ----------------------------

var choice = [
    "pierre",
    "feuille",
    "ciseaux"
];

userScore = 0;
computerScore = 0;
// ----------------- FUNCTIONS --------------------------
function randomComputerChoice(choice){
    return choice[Math.floor(Math.random() * choice.length)];
};

// ------------------ METHODS ------------------------------

// Recovery of the user name
do {
    var userName = prompt("Merci de saisir votre prénom");
} while (userName == "" || userName == null);

// Welcome
alert("Bienvenue " + userName + ", le jeu va commencer !");


// User's choice
do {
    do {
        var userChoice = prompt("Vous pouvez choisir entre pierre, feuille et ciseaux, saisissez votre choix ci dessous : ").toLowerCase();
    } while(userChoice !== choice[0] && userChoice !== choice[1] && userChoice !== choice[2]);

    // Computer choice
    var computerChoice = randomComputerChoice(choice);
    console.log(computerChoice);

    // Comparate choices + Alert
    if (userChoice === choice[0] && computerChoice === choice[0]) {
        alert("l'ordinateur a choisi " + computerChoice + ": Egalité !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[0] && computerChoice ===choice[1]) {
        computerScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[0] && computerChoice ===choice[2]) {
        userScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[1] && computerChoice ===choice[1]) {
        alert("l'ordinateur a choisi " + computerChoice + " : égalité !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[1] && computerChoice === choice[0]) {
        userScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[1] && computerChoice === choice[2]) {
        computerScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[2] && computerChoice ===choice[2]) {
        alert("l'ordinateur a choisi " + computerChoice + " : égalité !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[2] && computerChoice === choice[1]) {
        userScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else if(userChoice === choice[2] && computerChoice === choice[0]) {
        computerScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }

    else  {
        computerScore++;
        alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !" + "   ||   " + "Ordinateur : " + computerScore + " | " + userName + " : " + userScore);
    }
} while (computerScore !== 3 && userScore !== 3);

if (computerScore === 3) {
    alert("Ordinateur a gagné cette manche !");
}
else {
    alert(userName + " a gagné cette manche !");
}

// Replay
/* 
do {
    var replayChoice = prompt("Rejouer ? tapez oui ou non").toLowerCase();
} while(userChoice !== "oui" && userChoice !== "non");
 */