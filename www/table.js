// IV. Create Element
// Faire des tables de multiplication avec le javascript
// 1) Dans create.html, créer un élément table
// 2) Dans create.js, commencer par sélectionner la table avec un querySelector
// 3) Puis faire une première boucle qui va de 0 à 10 qui permettra de générer les lignes (tr) de notre table avec un createElement (à stocké dans une variable) (modifié)
// 4) A l'intérieur de cette boucle, faire une deuxième boucle de 0 à 10 qui permettra de générer les cellules (td), chaque cellule devra contenir le résultat de la valeur actuelle de la première boucle multipliée par la valeur actuelle de la seconde (avec un createElement aussi à stocker dans une variable puis un textContent sur cette variable) (modifié)
// 5) Ajouter la cellule à l'intérieur de sa ligne (avec un appendChild sur la variable tr qui prendra en argument la variable td)
// 6) ajouter la ligne à l'intérieur de la table (avec un appendChild sur la variable table qui prendra en argument la variable tr)

// on récupère l'élement table dans le DOM
let table = document.querySelector('table');
// premier for, pour gérer les lignes (table row) de notre tableau HTML
for (let i = 1; i <= 10; i++){
  // on créé notre table row
  let tr = document.createElement('tr');
  // second for, gérer les cellules (table data) de notre tableau HTML
  for( let j = 1; j <= 10; j++){
    // on créé notre table data
    let td = document.createElement('td');
    // on ajoute la table data dans les enfants de la table row précédement créée
    tr.appendChild(td);
    // on y écrit le contenu textuel, qui, en l'occurence, est le résultat de la multiplication
    td.textContent = j*i;
  }
  // on ajoute notre table row au tableau html
  table.appendChild(tr);
};