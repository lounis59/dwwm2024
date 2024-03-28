"use strict"

export default class EasyDom
{
    constructor(){
        
    }
    /**
     * creation de balise HTML
     * @param {string} baliseName nom de la balise 
     * @param {string} className classe de la balise
     * @param {string} content contenue de la balise 
     */
    tag(baliseName,className,content){

        const balise = document.createElement(baliseName)
        balise.className = `${className}`
        if(content){
            balise.textContent = `${content}`
        } 
        document.body.append(balise)

    }
    /**
     * Permet de selection un element CSS
     * @param {string} selection 
     */
    select(selection){
        if(selection){
            return document.querySelector(selection);
        }
    }
    /**
     * Permet de parametrer un evenement
     * @param {void} elementEvent Element de l'evenement  
     * @param {string} eventType type d'evenement 
     * @param {function} fonction fonction de l'evenement
     */
    event(elementEvent,eventType,fonction){
        elementEvent.addEventListener(eventType,fonction)
    }
}