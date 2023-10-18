const phrase = "une chaine avec des lettres dans un certain ordre pour donner du sens"; //une phrase définie dans une variable appelée "phrase". Cette phrase est une série de mots avec des espaces.
console.log(phrase);

const phraseSansEspace = phrase.replaceAll(" ","");
// ligne de code qui remplace tous les espaces dans la phrase par un espace simple. 


const sortedArray = phraseSansEspace.split("").sort().join(' '); // phrase sans espaces  transformée un tableau de lettres individuelles. Pour ce faire, la méthode "split('')" pour découper une chaine caractere - les lettres du tableau sont triées dans l'ordre alphabétique à l'aide de la méthode "sort()", "join()" s'applique sur un tableau pour les transformer en chaine de caracteres.
console.log(phraseSansEspace);

console.log(sortedArray); //chaîne résultante est affichée dans la console avec "console.log"  ce code, prend la phrase d'origine, supprime les espaces