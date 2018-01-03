let btn = document.querySelector('button');

//Faire une variable qui contient un compteur qui commence à zéro et faire en sorte qu'au click sur le bouton, le compteur s'incrémente et s'affiche dans la console.

let x = 0;
let compteur = document.getElementById('cadrant');

btn.addEventListener('click', function () {
    console.log('bloup');
    x++;
    compteur.innerHTML = `${x} jambons`;
});

let moins = document.querySelector('#moins');

moins.addEventListener('click', function () {
    x--;
    compteur.innerHTML = `${x} jambons`;

});

