// ----------------- VARIABLES ----------------------------

var choice = [
    "pierre",
    "feuille",
    "ciseaux"
];

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
    var userChoice = prompt("Vous pouvez choisir entre pierre, feuille et ciseaux, saisissez votre choix ci dessous : ").toLowerCase();
} while(userChoice !== choice[0] && userChoice !== choice[1] && userChoice !== choice[2]);

// Computer choice
var computerChoice = randomComputerChoice(choice);
console.log(computerChoice);

// Comparate choices
if (userChoice === choice[0] && computerChoice === choice[0]) {
    alert("l'ordinateur a choisi " + computerChoice + ": Egalité !");
}

else if(userChoice === choice[0] && computerChoice ===choice[1]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !");
}

else if(userChoice === choice[0] && computerChoice ===choice[2]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !");
}

else if(userChoice === choice[1] && computerChoice ===choice[1]) {
    alert("l'ordinateur a choisi " + computerChoice + " : égalité !");
}

else if(userChoice === choice[1] && computerChoice === choice[0]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !");
}

else if(userChoice === choice[1] && computerChoice === choice[2]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !");
}

else if(userChoice === choice[2] && computerChoice ===choice[2]) {
    alert("l'ordinateur a choisi " + computerChoice + " : égalité !");
}

else if(userChoice === choice[2] && computerChoice === choice[1]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez gagné !");
}

else if(userChoice === choice[2] && computerChoice === choice[0]) {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !");
}

else  {
    alert("l'ordinateur a choisi " + computerChoice + " : Vous avez perdu !");
}