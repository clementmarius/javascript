// Hello

console.log("Hello World !");

// Typage dynamique 
let a = 7;
console.log(a + 1);

a = "Bonjour";
console.log(a + 1);

a = true;
console.log(a);


// différences entre const, var, let 

const maConst = 100;


// Assignment to constant variable.
// maConst = 101;


console.log(maConst);

function f1() {
    if (true) {
        x = 14; //scope global
        var y = 15; // scope de fonction - uniquement visible dans une fonction
        let z = 16; // scope de bloc - uniquement visible dans un bloc
        console.log(x);
        console.log(y);
        console.log(z);
    }
    console.log(x);
    console.log(y);
    //console.log(z); // inaccessible
}

f1();
//console.log(y);


console.log(x);


//////////////////////////////////////////////
// Type complexes

//Math
let rand = Math.random(); // aléatoire entre 0 et 1 [0,1[
console.log(rand);

// entier compris entre 0 et  9
rand = rand * 100;
console.log(rand);


console.log("Partie entiere : " + Math.floor(rand));
console.log("Partie arrondie : " + Math.round(rand));

let valeur = -4.2;
console.log("valeur absolue : " + Math.abs(valeur));

// 2 puissance 8
console.log("2 puissance 8 : " + Math.pow(2, 8));


//Notion de date

const maDate = new Date(1998, 5, 23, 16, 6, 12);
console.log(maDate);

const today = new Date();
console.log(today);
todayFrance = today.toLocaleDateString();
heureFrance = today.toLocaleTimeString();
console.log(todayFrance + " " + heureFrance);




//////////////////////////////////////////////
// Opérateurs

let m1 = 2;
let m2 = "2";

let m3 = 2.0;

//let m3 = 3 + m2;
//console.log(m3);

if (m1 == m2)
    console.log("m1 == m2");
else
    console.log("m1 != m2");

    if (m1 === m2)
    console.log("m1===m2");
else
    console.log("m1 !== m2");

    if (m1 === m3)
    console.log("m1 === m3 ");
else
    console.log("m1 !== m3 ");

    let num = 0o16
    console.log(num);
    
    