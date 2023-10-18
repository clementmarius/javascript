

const valeursUniques = new Set(); // Créez un ensemble pour stocker les valeurs uniques

var compteur = 0; // initialise une variable compteur à zéro. Cette variable va compter combien de tirages sont nécessaires pour obtenir 101 valeurs uniques.


//On utilise une boucle do...while pour effectuer les actions suivantes au moins une fois, et tant que la taille de l'ensemble valeursUniques est inférieure à 101, la boucle continuera à s'exécuter.


do {

    // nombre aléatoire rand entre 0 et 100 à l'aide de Math.random(). Ensuite, on arrondit ce nombre à l'entier le plus proche avec Math.floor().
    let rand = Math.floor(Math.random() * 101);
    valeursUniques.add(rand)//ajoute le nombre aléatoire rand à l'ensemble valeursUniques à l'aide de la méthode add()

    //On incrémente la variable compteur de 1 à chaque itération pour compter combien de tirages ont été nécessaires.
    compteur=compteur+1;
}
while (valeursUniques.size<101);//La boucle se poursuit jusqu'à ce que l'ensemble valeursUniques contienne 101 valeurs uniques,





console.log("Le nombre de  tirage nécessaire est de  " + compteur );




