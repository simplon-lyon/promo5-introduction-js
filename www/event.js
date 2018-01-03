//On capture le premier élément button du document
let btn = document.querySelector('button');

//On crée une variable avec notre compteur numérique
let x = 0;
//On capture l'élément html ayant l'id cadrant
let compteur = document.getElementById('cadrant');

/*
On ajoute sur le bouton un event listener.
Les event listener disent en gros à javascript de surveiller
un événement (genre au click, au survol, etc.) voulu sur un élément,
et on lui indique une fonction à exécuter à chaque fois que l'événement
en question sera declencher sur l'élément.
Ici, on dit à javascript de lancer une fonction à chaque fois que
l'élément button sera cliqué.
*/
btn.addEventListener('click', function () {
    console.log('bloup');
    //On incrémente la variable x
    x++;
    //On modifie le contenu de l'élément HTML compteur pour y mettre
    //la valeur actuelle de notre variable x
    compteur.innerHTML = x;
});

//On capture l'élément html ayant l'id moins
let moins = document.querySelector('#moins');
//On ajoute un event listener au click sur l'élément en question
moins.addEventListener('click', function () {
    //A chaque click, on décrémentera la variable x
    x--;
    //Puis on modifie la contenu de l'élément HTML compteur pour y mettre
    //la valeur actuelle de la variable x
    compteur.innerHTML = x;

});

