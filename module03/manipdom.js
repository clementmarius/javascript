
const monH1 = document.querySelector("h1");
monH1.className = "titre";

const p1 = document.getElementById("paragraphe1");
p1.innerText = "Le Javascript manipule le Dom !"

const p2 = document.getElementById("paragraphe2");
p2.innerHTML = "Le Javascript manipule le <code>Dom</code> !"



const list = document.getElementById("liste");

for (let i = 0; i < 11; i++) {
    const monLi = document.createElement("li");

    monLi.setAttribute("id", "li" + i);

    const monText = document.createTextNode("Valeur de i : " + i);
    monLi.appendChild(monText);
    liste.appendChild(monLi);
}

const li5 = document.getElementById("li5");
li5.className = "rouge";

document.getElementById("li6").className = "vert";