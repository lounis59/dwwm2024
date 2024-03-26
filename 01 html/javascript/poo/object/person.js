"use strict"

/* 
    La programation orienter object consiste a developer notre logique et nos fonction a l'interieur d'objets

    La plupart des langage demande de passer par des classe et des constructeur pour creer des objet 
    Mais en JS on peut creer nos objet manuellement
    
    On vera donc les classe plus tard
*/
const Person = {
    name: {
        prenom : "Maurice",
        nom : "dupont"
    },
    age:54,
    /* 
        Les setters serve a parametrer une proprieter d'un objet en la filtant par quelconque fonction

        Le setter se declare tel une fonction mais avec le mot "set"
        par contre son utilisation se fera telle une proprieter 
            * Person.setAge = 30; ok
            ! Person.setAge(30); error
    */
    set setAge(a){
        // Dans un objet this fait reference a l'objet en question
        this.age = parseInt(a);
    },
    set nom(n){
        this.name.nom = n.toUpperCase()
    },
    set prenom(p)
    {
        this.name.prenom = p[0].toUpperCase()+p.slice(1).toLowerCase();
    },
    /* 
        Comme pour le setter nous avon le getter qui permet de recuperer une information aprer l'avoir filtre
        Preceder du mot clef "get" celui ci aura forcement un "return"
        la ausii il s'utilise comme une proprieter  
    */
   get fullname()
   {
        return `${this.name.prenom} ${this.name.nom}`
   },
   /* 
        Nos objets peuvent ossi contenir des fonction 
        pour les declarer aucun besoin de mot clef 
        ! ATTENTION !
        En POO on ne parle pas de variable ou de fonction d'un objet mais on parle de proprieter ou de methode d'un objet
   */
   salutation(){
    console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.age} ans.`);
   },
   anniversaire()
   {
    this.age++;
    this.salutation();
   }
};
export default Person;