

//On crée une variable voiture qui contiendra notre tableau
// let voiture =[];
// //On fait une boucle qui fera 3 tours pour récupérer 3 valeur de l'utilisateur
// for (let x = 0; x < 3; x++) {
//     //On stock le retour du prompt dans la variable valeur
//     let valeur = prompt("entrer nom de voiture");
//     //On ajoute cette valeur à la fin de notre tableau avec un push
//     voiture.push(valeur);

// }
// /**
//  * Plusieurs manières pour itérer sur (parcourir) un tableau
//  */

// /*
// On peut utiliser le for...of, qui est assez 
// récent mais commence à être bien supporté sur les 
// navigateurs modernes.
// Il attend en premier argument une declaration de 
// variable qui contiendra chaque valeur du tableau
// au fur et à mesure des tours de boucle
// Et en deuxième argument un iterable (typiquement un 
// tableau) sur lequel faire son itération
// */
// for (let nom of voiture) {
//     //Ici, chaque nom de voiture sera stocké dans
//     //la variable nom, qu'on affiche à chaque fois
//     console.log(nom);
// }
// /*On peut faire un for classique en prenant comme 
// limite de la boucle la taille du tableau à parcourir
// (voiture.length ici)
// */
// for (let x = 0; x < voiture.length; x++) {
//     /*à ce moment, on accède à la valeur à la 
//     position (l'index) x dans le tableau voiture
//     */
//     console.log(voiture[x]);

// }
// /*
// On peut utiliser la méthode .forEach() qui est 
// disponible sur les tableau en javascript.
// Celle ci attend en argument une fonction qu'elle 
// exécutera pour chaque valeur contenue dans le tableau
// */
// voiture.forEach(function(nom) {
//     console.log(nom);
// });

// console.log(voiture.length);



let check = true, ask = '', arr = [];

while (check) {
    ask = prompt('What?\nYou can: start,show,length,reset,stop')

    switch (ask) {
        case 'start':
            start();
            break;
        case 'show':
            show();
            break;
        case 'length':
            length();
            break;
        case 'reset':
            reset();
            break;
        case 'stop':
            check = false;
            break;
        default:
            unknown();
            break;
    }

}

//autre manière avec des if et else-if
while (true) {
    let reponse = prompt('enter command');

    if (reponse === 'start') {
        start();
    } else if (reponse === 'show') {
        show();
    } else if (reponse === 'length') {
        length();
    } else if (reponse === 'stop') {
        break;
    } else {
        unknown();
    }
}



function unknown() {
    console.log('unknown command');
}

function reset() {
    arr = [];
}

function length() {
    console.log(arr.length);
}

function show() {
    for (let nom of arr) {
        console.log(nom);
    }
}

function start() {

    for (let x = 0; x < 3; x++) {
        let valeur = prompt("entrer nom de voiture");

        arr.push(valeur);

    }
}

