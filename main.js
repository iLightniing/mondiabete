var readline = require("readline-sync");
/**
 * MAIN
 */

var choisirTaux    = "Quel est votre taux actuellement ? ";
var choisirGlucide = "Combien mangez-vous de glucide ? ";
var action;
var taux;
var glucideSaisie;
var glucideMatin = 75;
var glucideMidi  = 85;
var glucideSoir  = 110;

/**
 * BOUCLE
 */
while (action !== 0){
    menu(); // Fonction qui appelle mon Menu
    action = readline.questionInt("Choissisez : ");
    /**
     * Le SWITCH qui appelle les différents choix + les formule de calcul
     */
    switch(action){ 
        /**
         * Le CAS 1 => MATIN
         */
        case 1: 
            taux    = readline.questionInt(choisirTaux);
            glucideSaisie = readline.questionInt(choisirGlucide);
            
            if (taux <= 80){
                var calcul   = 6 / glucideMatin;
                var resultat = calcul * glucideSaisie;
                console.log("votre injection est de : "+ resultat);
            } else if (taux >=81 && taux <= 129){
                calcul   = 8 / glucideMatin;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=130 && taux <= 179){
                calcul   = 9 / glucideMatin;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=180 && taux <= 229){
                calcul   = 10 / glucideMatin;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=230 && taux <= 279){
                calcul   = 12 / glucideMatin;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=280){
                calcul   = 14 / glucideMatin;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            }
        break;
        /**
         * Le CAS 2 => MIDI
         */
        case 2: 
            taux    = readline.questionInt(choisirTaux);
            glucideSaisie = readline.questionInt(choisirGlucide);

            if (taux <= 80){
                var calcul   = 5 / glucideMidi;
                var resultat = calcul * glucideSaisie;
                console.log("votre injection est de : "+ resultat);
            } else if (taux >=81 && taux <= 129){
                calcul   = 7 / glucideMidi;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=130 && taux <= 179){
                calcul   = 8 / glucideMidi;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=180 && taux <= 229){
                calcul   = 9 / glucideMidi;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=230 && taux <= 279){
                calcul   = 10 / glucideMidi;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=280){
                calcul   = 12 / glucideMidi;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            }
        break;
        /**
         * Le CAS 3 => SOIR
         */
        case 3: 
            taux    = readline.questionInt(choisirTaux);
            glucideSaisie = readline.questionInt(choisirGlucide);

            if (taux <= 80){
                var calcul   = 8 / glucideSoir;
                var resultat = calcul * glucideSaisie;
                console.log("votre injection est de : "+ resultat);
            } else if (taux >=81 && taux <= 129){
                calcul   = 10 / glucideSoir;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=130 && taux <= 179){
                calcul   = 11 / glucideSoir;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=180 && taux <= 229){
                calcul   = 12 / glucideSoir;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=230 && taux <= 279){
                calcul   = 14 / glucideSoir;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            } else if (taux >=280){
                calcul   = 16 / glucideSoir;
                resultat = calcul * glucideSaisie;
                console.log("Votre injection est de : " + resultat)
            }
        break;
        /**
         * Le CAS 0 => QUITTE L'APP
         */
        case 0 : return;
        default: console.log("");
        break;
    }
}

/**
 * FONCTIONS
 */
function menu(){
    var menu  = "1/ Matin (75g)\n";
        menu += "2/ Midi (85g)\n";
        menu += "3/ Soir (110g)\n";
        menu += "0/ Quitter\n";
        console.log(menu);
}