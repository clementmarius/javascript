afficherBonjour();

function afficherBonjour(){
    console.log("Bonjour");
}

disBonjourA("Legrand");

function disBonjourA(nom){
    console.log("Bonjour " + nom);
}




// fonction annonyme 

let sayHello = function () {
    console.log("Hello !");
}

sayHello();



 (function (){
    console.log("Hello World !");
}) ();

