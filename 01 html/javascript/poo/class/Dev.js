"use strict";
import Human from "./Human.js";
/* 
    L'heristage permet de transferer toute les proprieter et methiode (non"private") d'une classe a une autre 

    Cela permet d'avoir un parent comun a plusieurs classes plutot que de opier coller les proprieter comune a c'est classe 

    Pour utiliser l'heritage on fera suivre le nom de la classe par le mot clef "extendes" puis du nom du parent
*/
export default class Dev extends Human
{
    /**
     * Créer un nouveaux developeur
     * @param {string} prenom prenom du developeur 
     * @param {string} nom nom du developeur 
     * @param { number | string} age age du developeur
     * @param {string | Array} tech technologie connus du developeur 
     */
    constructor(prenom,nom,age,tech)
    {
        /* 
            Lorsque l'on fait un constructor dans une classe qui herite 
            Il nous faut appeler le constructeur parent avent toute autre chose 
            Pour cela on utiise la fonction "super()"
        */
        super(prenom, nom, age);
        this.techniques = tech
    }
    set techniques(t)
    {
        if (Array.isArray(t))
        {
            this.tech = t
        }
        else
        {
            this.tech = [t]
        }
    }
    /* 
        Bine que la classe herite de toute les proprieter et methode publique du parent 
        On pourait vouloir qu'une methode fonctionne differament avec cette classe 

        Pour cela il suffit de redeclarer la methode elle viendra remplacer celle du parent 
    */
   salutation()
   {
        console.log(`Bonjour, je suis ${this.fullname} et j'ai ${this.getAge}. Je maitrise ${this.tech.join(", ")}.`);
   }
}