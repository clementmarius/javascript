const couleurMap = new Map();

// Remplissage du dictionnaire avec les couleurs et leurs premières lettres comme clés
couleurMap.set('j', 'jaune');
couleurMap.set('r', 'rouge');
couleurMap.set('v', 'violet');
couleurMap.set('b', 'bleu');

// Création d'un tableau avec les clés du dictionnaire
const cles = Array.from(couleurMap.keys());

// Fonction pour tirer au hasard 5 clés du tableau
function tirerClesAleatoires() {
  const clesAleatoires = [];
  const clesDisponibles = cles.slice(); // Copie du tableau des clés

  while (clesAleatoires.length < 5 && clesDisponibles.length > 0) {
    const randomIndex = Math.floor(Math.random() * clesDisponibles.length);
    const cleAleatoire = clesDisponibles.splice(randomIndex, 1)[0];
    clesAleatoires.push(cleAleatoire);
  }
  return clesAleatoires;
}

// Tirer 5 clés aléatoires
const clesAleatoires = tirerClesAleatoires();

// Afficher les couleurs correspondantes pour les clés tirées
console.log('Couleurs correspondantes aux clés tirées :');
for (const cle of clesAleatoires) {
  const couleur = couleurMap.get(cle);
  console.log(`Clé : ${cle}, Couleur : ${couleur}`);
}
