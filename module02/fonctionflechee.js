// Fonction fléchée 


let disBonjour = () => console.log("Bonjour !");
disBonjour();

let disBonjourToutLemonde = () => {
    console.log("Bonjour");
    console.log("tout");
    console.log("le");
    console.log("monde");
}

disBonjourToutLemonde();

let sayHello = (nom) => "Bonjour " + nom;
//sayHello renvoie une chaine de caracteres
/*
Identique sayHello = (nom) => {return"Bonjour" + nom;}
*/ 
let message = sayHello("Joe");
console.log(message);


let sayHelloEnDeuxLignes = (nom) => {
    let chaineARenvoyer = "Bonjour";
    chaineARenvoyer = chaineARenvoyer + nom;
     return chaineARenvoyer;
}