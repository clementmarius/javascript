function direBonjour(nom, prenom){
    console.log("Bonjour " + prenom + " " + nom);
}


function afficherDateEtHeure(){
    console.log(new Date());
}

console.log("Debut du traitement....");

setTimeout(direBonjour,5000, "Legrand", "Zoé");
setTimeout((nom, prenom) => console.log("Bonjour " + prenom + " " + nom), 3000, "lele", "joe");

setInterval(afficherDateEtHeure, 1000);

console.log("FIN !!");

