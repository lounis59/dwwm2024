"use strict"
import SuperBalise from "./SuperBalise.js"
import SuperDiv from "./SuperDiv.js"
/* 
    les custom element permet de creer nos propre element Html 

    Il existe deux type de custom elements :
        - les elements personnalises autonome qui herite de "HTMLElement"
        -Les element personalisees uintegres qui heriten d'un element Html particulier (div,span,li....)

    Pour les creer nous allon,s devoir definire une classe 
    Puis hors de celle ci appeler la methode suivante :
        * customElements.define();

    Cette methode prendra en premier argument un string representant le nom que l'on souhaite donner a notre custom element 
        ! IMPORTANT : On demande de choisir des nom comportant un tiret "-"

    En second argument elle prendra la classe qui la definie 
    Dans le cas d'un element personaliser integrer on donera un troisieme argument pour indiquer le nom de la balise dont elle herite :
        * {extend : "li"}

    une fois la methode appeler pour utiliser nos balise : 
        -autonome : <nom-balise></nom-balise>
        -integre : <baliseParent is="nom-balise"></baliseParent>

    Il est possible d'ajouter des "cycle de vie " a nos element HTML
    Les cycle de vie sont des methode predefinie qui se declenche automatiquement a certain moment precis :
        - "connectedCallBack()" se declenche quand l'element HTML est ajoute a la page 
        - "disconnectedCallBack()" se declenche quan l'element HTML est retirer de la page 
        - "adoptedCallBack()" se declenche quand l'element set deplacer d'un document a un autre (iframe par exemple)
        - "attributeCallBack()" se declenche lorsque l'attribut cibler est modifier
            Il prendra 3 parametres :
                -le premier recevera le nom de l'attribut modifie
                - Le second la valeur de l'attribut avant modification
                -le troisieme la valeur apre modification 
    Pour que cela fonctionne on devra accompagner ce cycle de vie d'un "getter static" appele "observedAttributes()" qui retourne un tableau contenant les attributs observer
*/