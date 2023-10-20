window.onload = init;

let nbrandom = Math.floor(Math.random() * 101);

function init() {
    document.getElementById("btn").addEventListener("click", verification);
    document.getElementById("triche").addEventListener("change", modeTriche);
    document.getElementById("triche").addEventListener("mouseover", ()=>{
        console.log("H1 survolé");
    });
}


function modeTriche() {
    let label = document.querySelector("label[for='triche']").innerText;

    if (document.getElementById('triche').checked) {

        document.querySelector("label[for='triche']").innerText = label + " : " + nbrandom;
    }else{
        document.querySelector("label[for='triche']").innerText = 'Mode triche'
    }
}



function verification() {
    let chaine = "C'est gagné !!!";
    let valeurUser = document.getElementById("nbUser").value;
    if (valeurUser < 0 || valeurUser > 100) {
        chaine = "Pas de blague !!!!"
    }
    else {
        if (valeurUser < nbrandom) {
            chaine = "C'est plus !"
        }
        else
            if (valeurUser > nbrandom) {
                chaine = "C'est moins !"
            }

    }
    document.getElementById("resultat").innerText = chaine;
}
