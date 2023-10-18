
//Définir une fonction appelée strUcFirst qui prend un mot en argument et renvoie ce mot avec sa première lettre en majuscule.
function strUcFirst(word) {
    return word.charAt(0).toUpperCase() + word.substr(1);
  }
  
  //1.fonction appelée strUcWords prend une phrase comme argument, divise en mots individuels
  function strUcWords(texte) {
    var words = texte.split(' '); 
  
    for (var i = 0; i < words.length; i++) {
      words[i] = strUcFirst(words[i]); // Applique la fonction strUcFirst à chaque mot
    }
  
    return words.join(' '); // Rejoins les mots en une phrase
  }
  
  
  //On initialise une variable appelée texte avec une phrase en minuscules.
  var texte = 'une phrase avec des mots en majuscule';
  
  texte = strUcWords(texte); // Met chaque première lettre de chaque mot en majuscule
  
  console.log(texte);
  