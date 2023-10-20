let reponse = confirm("Souhaitez-vous à une question ?")

console.log(reponse);

if (reponse) {
    let nom = prompt("Votre nom : ")
    console.log(nom);
}
else {
    alert("Dommage !!!");
}