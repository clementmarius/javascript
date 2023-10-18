/*
let monBouton = document.getElementById("monBouton");


function declanchemenTraitement(){
    console.log("J'ai appuyé sur le bouton");
}

monBouton.addEventListener("click", declanchemenTraitement);
*/

function afficherBonjour(){
    console.log("bonjour");

}

function afficherHello(){
    console.log("Hello");

}

function repeter (nombre, callback){
for (let i=0 ; i < nombre; i++){
    callback();
}
}

repeter(5, afficherBonjour);
repeter(3, afficherHello);

repeter(10, function(){
    console.log("Hola !");
});

repeter(3, () => console.log("Demat !"));

