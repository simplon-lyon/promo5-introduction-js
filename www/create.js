/**
 * On peut créer un élément en javascript en utilisant la méthode
 * createElement de l'objet document.
 * Cette méthode attend en argument le type de balise que l'on souhaite
 * créer.
 * Elle nous renvoie ensuite la balise en question qu'on pourra manipuler
 * exactement comme si on avait fait un querySelector dessus.
 * Ici, on crée un paragraphe
 */
let para = document.createElement('p');
//On change le contenu textuel de notre paragraphe pour y mettre bloup
para.textContent = 'bloup';
//On capture l'élément body du document
let body = document.querySelector('body');
//On ajoute l'élément para créé au dessus à l'intérieur du body
/**
 * (/!\ tant qu'on a pas append un élément à un autre déjà présent dans
 * le DOM, celui ci n'existe que dans la mémoire et pas dans le HTML) 
*/
body.appendChild(para);
