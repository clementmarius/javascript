
// ARRAY
// Création d'un tableau de 3 datas

let tableau1 = new Array(3);


// valorisation de la premiere cellule du tableau
tableau1[0] = 44;
tableau1[1] = "Bonjour";
tableau1[6] = "Hello";

console.log("Taille du tableau : " + tableau1.length);
console.log(tableau1);

for (let i = 0 ; i < tableau1.length; i++){
    console.log(i + " : " + tableau1[i]);
}

let tableau2 = ['java', 'javascript', 'c++'];

tableau2.push('C');
console.log(tableau2);

console.log("Langages : %s, %s, %s et %s" , tableau2[0], tableau2[1], tableau2[2], tableau2[3]);
console.table(tableau2);

console.table(tableau1);


for (let valeur of tableau2){
    console.log( " - " + valeur);
}



/////////////////////////////////////////
//MAP


let depts = new Map([["01", "Ain"],["02","Aisne"]]);

let Ain = depts.get("01");
console.log("ain : " + Ain);

depts.set("2A", "Corse du sud");
depts.set("2B", "Haute Corse");

console.log(("02 : " + depts.get("02")));
console.log(("A : " + depts.get("2A")));
console.log(("44 : " + depts.get("44")));

console.log("02 : " + depts.get("02"));
console.log("2A : " + depts.get("2A"));
console.log("44 : " + depts.get("2B"));



////////////////////////////////////////////
//SET

let monSet = new Set();
monSet.add(5);
monSet.add(2);
monSet.add(5);
monSet.add(1);
monSet.add(5);
monSet.add(2);
monSet.add(1);

console.log("Nombres d'elements dans mon set : " + monSet.size);
console.log("Presence du 1 : " + monSet.has(1));
console.log("Presence du 10 : " + monSet.has(10));