const monH1 = document.querySelector("h1");
monH1.className = "main-title";

const monH2 = document.querySelector("h2");
monH2.className = "elements-title";



//utilise la fonction fetch pour envoyer une requête à l'URL "https://restcountries.com/v2/all". 
fetch('https://restcountries.com/v2/all')

//traite la réponse en la convertissant en un objet JavaScript utilisable
    .then(response => response.json())

//données converties en JSON et les passe à la fonction afficherData pour afficher
    .then(listCountries => afficherData(listCountries));

//prend les données sur les pays reçues en argument (data) et les utilise pour construire un tableau HTML.
function afficherData(data) {

    const nbcountries = document.getElementById("nb-countries");
    nbcountries.innerText = `Nombre de pays :  ${data.length}`;

//ID "main-table" est un tableau existant dans le HTML où vous souhaitez afficher les données des pays.
    let myBoard = document.getElementById("main-table");


    for (let i = 0; i < data.length; i++) {
        let currrent = data[i];
        let name = currrent.name;
        let capital = currrent.capital;
        let flag = currrent.flags.png;

        // crée une nouvelle ligne (<tr>) pour le tableau.
        const tr = document.createElement("tr");

        //crée deux cellules de tableau (<td>) : une pour le nom du pays et une pour la capitale du pays.
        const tdName = document.createElement("td");
        const tdCapital = document.createElement("td");
        const tdFlags = document.createElement("img")
        
        
        //extrait le nom et la capitale du pays à partir des données.
        //définit le texte à afficher dans ces cellules de tableau
        tdName.innerText = name;
        tdCapital.innerText = capital;
        tdFlags.src = flag;

        //attache ces cellules à la ligne du tableau.
        tr.appendChild(tdName);
        tr.appendChild(tdCapital);
        tr.appendChild(tdFlags);

        //ajoute la ligne complète au tableau existant (supposé être représenté par l'élément avec l'ID "myBoard")
        myBoard.appendChild(tr);

    }

}

