/**
 * On peut déclarer des objets en javascript en utilisant les accolades.
 * Les objets contiennent des propriétés du type qu'on souhaite et servent
 * à "regrouper"/organiser certaines variables/fonctions de manière
 * logique pour un humain.
 * Chaque propriété possède une clef et une valeur (de n'importe quel 
 * type, string, number, boolean, function, object).
 * Lorsqu'on déclare un objet, les propriétés sont séparées par des
 * virgules.
 */
let person = {
    name:'Jean',
    surname:'simplon',
    age:14,
    isDev:false,
    //La propriété presentation contient une fonction, c'est ce qu'on
    //appelle une méthode.
    presentation:function () {
        let dev = "I'm a developper";
        if(!this.isDev) {
            dev = "I'm no one";
        }
        
        console.log(`Hello I'm ${this.name} ${this.surname}, I'm ${this.age} years old, ${dev}`);
    },
    address: {
        street:'rue bidon',
        number: '30X',
        city: 'villeurbanne'
    }
};
//Ici, on appelle la méthode presentation de l'objet contenu dans la variable person
person.presentation();
// console.log(`Here is ${personne.name} ${personne.surname}, he's ${personne.age} years old`);

person.surname='promo5';
person.age++;
// console.log(`Here is ${personne.name} ${personne.surname}, he's ${personne.age} years old`);

person.presentation();

//j'accède ici au numéro de l'adresse de la personne
console.log(person.address.number);
