"use strict"

/* 
    Une classe est un plan de cosntruction pour un objet

    Certaine classe sont dejat integrer a JS:
        "Date" , "FormData"...
    Mais on peut evidament creer les notre 
        Pour cela on utilisera le mot clef "class" suivi du nom de la class puis d'acolades :
            * class MaSuperClasss{}

    Quelque convention de developeur :
        -une classe par fichier,
        -Le nom de la classe commence par une majuscule 
        -Le nom du fichier est le meme que celui de la classe

    Lorsqu'on voudrait creer un objet a partir d'une classe (instencier)
    On appelera le nom de la classe precede du mot clef "new"
        * const monSuperObjet = new MaSuperClass();
*/

export default class Human
{
    /* 
        En Javascript nous allon trouver 3 types de proprietes :

        - La proprieter dite public, dans une classe pas besoin de virgule pour separer les proprieter ni de mot clef (let,var ...)
        -La propriete prive, elle prend un "#" devant son nom
            Elle a la proprieter de n'etre accessible que dans sa classe.
        -La proprieter static elle est precede du mot clef "static"
            Elle n'est accessible que sur la classe et no sur l'objet

        Ces mot clefs s'applique aussi aux methodes
    */
   vivant = true;
   #name = {}
   #age;
   static categorie = "Mamifère";
   /**
    * 
    * @param {string} prenom prenom de l'humain
    * @param {string} nom nom de l'humain
    * @param {number|string} age age de l'humain
    */
   constructor(prenom,nom,age)
   {
        /* 
            La fonction constructor est appele directement a chaque fois que l'on instencie une classe 
            Les argument donnes a la classe sont transmis au constructor.
        */
        console.log(prenom,nom,age);
        this.prenom = prenom;
        this.nom = nom;
        this.#setAge = age;

        /* 
            Les proprieter privees doivent etre declarer avent d'etre utiliser 
            Mais on peut declarer de nouvelle proprieter directement dans une methode 
        */
       this.createAt = new Date();
    //    this.#truc = "test";
   }
    // On retrouve les setters et le getters :
    set #setAge(a){
        
        this.#age = parseInt(a);
    }
    set nom(n){
        this.#name.nom = n.toUpperCase()
    }
    set prenom(p)
    {
        this.#name.prenom = p[0].toUpperCase()+p.slice(1).toLowerCase();
    }
   get fullname()
   {
        return `${this.#name.prenom} ${this.#name.nom}`
   }
   get getAge()
   {
        return this.#age + "ans"
   }
//    les methodes :
   static description()
   {
        console.log(`Un humain est un ${this.categorie}, a generalement une tete, un buste, deux bras et deux jambe.`);
   }
   salutation()
   {
        console.log(`Bonjour je suis ${this.fullname} et j'ai ${this.getAge}`);
   }
   aniversaire()
   {
        this.#age++;
        this.salutation();
   }
}