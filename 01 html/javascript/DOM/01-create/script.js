"use strict";
/* 
    ?-----------------DOM---------------------
    Le DOM ou Document odject model est une representation sous la forme d'un objet de notre document HTML
    il est souvent representer comme un arbre dont chaque balise sont les branche 

    Dans JS chaque element HTML sera represente par un objet aux nombreuse proprieter 

    Les fonctionalite de bvase passeron par l'objet "document"

    Les fontionalite de bas passeront par l'objet "document"
*/
console.log(document);
// sous chrome on utilisera plutot console.dir() pour avoir le detail de l'objet
/* 
    La methode ".createElement()" de l'objet "document" permet de creer un objet representant une balise HTML
    Il prendra en paramettre un string indiquant le nom de la balise a creer
*/
const h = document.createElement("header");
console.log(h);
/* 
    L'element a eter creer dans la variable mes n'existe pas encore dans la page
*/
const m = document.createElement("main");
const f = document.createElement("footer");
// Je peux modifier le contenue HTML d'une balise avec la propriete ".innerHTML"
h.innerHTML = "<h1>Super Site en JS</h1>";
f.innerHTML = /* HTML */`<ul><li>Menu 1</li><li>Menu 2</li><li>Menu 3</li></ul>`;

console.log(document.body);
/* 
    Par defaut le sera "null" car le script lance avant que le navigateur rencontre la balise body

    Pour coriger cela deux solution :
        - Soit placer le script en bas de la page 
        - Soit placer l'attribut 'defer' sur le script pour lui indiquer d'attendre la fin du chargement de la page avent de lancer le script 

    Cela peut etre une bonne chose de verifier l'existence d'un element avant de travailler avec :
*/
if(document.body){
    /* 
        La methode ".append()" permet d'inserer des element HTML (ou du texte) dans l'element HTML qui la precede
        les element sont ajouter a la fin de la balise 
        On peut utiliser ".prepend()" pour ajouter au debut de celle ci
    */
   document.body.append(h,m,f);
}
for(let i=0;i<5;i++){
    const p = document.createElement("p");
    /* 
        ".textContent" permet d'ajouter du texte a un element HTML 
        Seulement les balise HTML ne seront pas interpretees
        Cela ne sera utile lorsque notre texte depend d'une entrer utilisateur afin d'eviter qu'il injecte sont propre code  
    */
    p.textContent= /* Html */ `<strong>bla bla bla</strong> Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo sequi expedita quae unde, odit quaerat voluptate earum hic, aperiam voluptatum illo ducimus animi explicabo. Blanditiis alias doloremque voluptas veritatis.`;
    /* 
     ".appendChild()" fonction comme ".append" si ce n'est qu'il ne peut prendre qu'un element HTML a la fois 
    */
    m.appendChild(p);

}

// ?----------------------------Exercisse--------------------------

const div = document.createElement("div");
div.innerHTML = "<h2>Sante !</h2><p>Manger 5 fruit et legume par jour, les produit laitiers sont nos amie pour la vie , ne manger ni trop gras,ni trop sale,ni trop sucre l'abus d'alcool est dangereux pour la sante</p><button class='btn1'>tchin tchin</button><button class='btn2'>Le gras c'est la vie</button>"

document.body.append(div)
