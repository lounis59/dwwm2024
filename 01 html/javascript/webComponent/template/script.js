"use stict"
/* 
    La balise template est par defaut invisible
    Peu importe ce qui est mit dedans

    Son but est d'acceuillir des element HTML qui vont servir a etre recupere par JS
    afin d'etre clone et reutiliser a diverse endroit 

    On commencera par selectionner notre template 
    Puis avec la proprieter "content " on recupere son contenue sous la forme d'un "documentFragment"

    Enfin nous clonerons ce fragment via la methode ".cloneNode(true)"
    Dont le boolean permet de cloner le contenue de la balise et pas juste la balise elle meme 

    Il nous reste qu'a inserer le clone dans le HTML
*/
// Je recupere le template 
const blogTemplate = document.querySelector('template#blog');
// Je recupere le contenue du template :
const blogArticle = blogTemplate.content;
console.log(blogArticle);

// Je selectionne les element que je souhaite modifier :
const blogTitle = blogArticle.querySelector('h2')
const blogText = blogArticle.querySelector('p')
const blogSource = blogArticle.querySelector('a')

getBlog();
async function getBlog()
{
    const response = await fetch("blog.json")
    if(!response.ok) return;
    const articles = await response.json();
    articles.forEach(a=>{
        // Je modifie mon template :
        blogTitle.textContent = a.title;
        blogText.textContent = a.content;
        blogSource.textContent = a.source;
        blogSource.href = a.source
        // Je clone mon template
        const clone = blogArticle.cloneNode(true)
        // J'insert le clone dans mon HTML :
        document.body.append(clone)
    })
}
/* 
    Si les template sont utilisable seul 
    les slot eux accompagne forcement le shadowDOM

    On va donc tester cela sur un webcomponent

    en inseran des balise "slot" avec des attributs "name"
    Puis en lient ce template au shadowDOM d'un custom element 

    Lorsque que je vais appeler mon custom ellement  si je place des balise HTML ayant l'attribute "slot" avec une valeur correspondante au "name" d'un slot
    celle ci viendra  remplacer le "slot"

    Ainsi il est possible d'inserer des element variable a nos template
*/
import SuperCard from "./SuperCard.js"