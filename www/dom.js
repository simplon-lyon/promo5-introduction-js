/*
I. Manipulation du DOM
1) Changer la couleur du texte du paragraphe avec l'id para en rouge
2) Changer le texte du span contenu dans le paragraphe par "inside para"
3) Récupérer le texte du h1 et l'afficher en alert
4) faire un prompt qui demande un mot, et mettre ce mot comme texte d'un span contenu directement dans une section
5) Rajouter une bordure à la section
6) Changer la taille du texte des éléments ayant la classe laClasse

*/

//let para = document.getElementById('para');

/*
On peut capturer un élément HTML sur le DOM en utilisant la
méthode querySelector de l'objet document (qui est là par défaut
dans le javascript sur un navigateur)
querySelector attend en argument un sélecteur css comme ceux de nos
feuilles css.
La méthode querySelector renvoie le premier élément du document HTML
qui correspond au sélecteur qu'on lui a indiqué.
(ici, elle nous renvoie un élément avec l'id para)
*/
let para = document.querySelector('#para');
/*
On peut modifier n'importe quel attribut des élément HTML avec le
javascript. Ici on change la couleur du texte de l'élément contenu dans
para, en rouge.
*/
para.style.color = "red";

//On sélectionne le premier span contenu dans un paragraphe
let span = document.querySelector("p span");
//On change le contenu textuel de ce span par autre chose
span.textContent = "inside paragraphe";

//On sélectionne le premier élément h1 du document
let h1 = document.querySelector("h1");
//On alert son contenu textuel
alert(h1.textContent);

//On demande un mot à l'utilisateur et on le stock
let getWord = prompt("tapez un mot");
//On sélectionne le premier span contenu directement dans une section
let lastSpan = document.querySelector("section > span");
//On change le texte de ce span par le mot récupéré au dessus
lastSpan.textContent = getWord;

//On sélectionne la première section du document
let section = document.querySelector("section");
//On lui ajoute une bordure rouge
section.style.border = "solid 1px red";

/*
querySelectorAll fonctionne à peu près comme querySelector sauf 
qu'au lieu de récupérer le premier élément correspondant, il
récupérera TOUT les éléments correspondant au sélecteur (qu'il y en
ait 0, 1 ou 1000) et les renvoie sous forme d'un tableau.
Cela signifie qu'il faudra itérer sur le tableau pour intéragir
avec les éléments contenus dedans.
Ici on sélectionne tous les élément avec la class laClasse
*/
let laClasse = document.querySelectorAll(".laClasse");

//On fait une boucle for..of sur le tableau d'éléments
for (let element of laClasse) {
    //Pour chaque élément du tableau, on change la taille de son texte
    element.style.fontSize = "30px";
}

//On peut aussi faire la boucle comme ça
// for (let x = 0; x < laClasse.length; x++) {
//     laClasse[x].style.fontSize = '30px';
    
// }

//ou comme ça
// laClasse.forEach(function(element) {
//     element.style.fontSize = "30px"
// });