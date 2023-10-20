fetch('https://restcountries.com/v2/all')
    .then(reponse => reponse.json())
    .then(listCountries => afficherData(listCountries));

function afficherData(data) {
    console.log(data);
    
    for (let i = 0; i < data.length; i++) {
        let currrent = data[i];
        let name = currrent.name;
        let population = currrent.population;
        let area = currrent.area;

        console.log("name : " + name);
        console.log("population : " + population);
        console.log("are : " + area);
    }

} 

