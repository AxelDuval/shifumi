// ----------------- VARIABLES ----------------------------
var pierre = "pierre";
var feuille = "feuille";
var ciseaux = "ciseaux";


// ----------------- FUNCTIONS --------------------------


// ------------------ METHODS ------------------------------

// Recovery of the user name
do {
    var userName = prompt("Merci de saisir votre prénom");
} while (userName == "" || userName == null);

// Welcome
alert("Bienvenue " + userName + ", le jeu va commencer !");

// User's choice

do {
    var userChoice = prompt("Vous pouvez choisir entre pierre, feuille et ciseaux, saisissez votre choix ci dessous : ");
} 
while(userChoice !== "pierre" && userChoice !== "feuille" && userChoice !== "ciseaux");
