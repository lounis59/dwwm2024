"use strict"
/* 
    Regex ou Expression reguliere 
    Permet de verifier la presence dans un string de certain caractere 

    Une regex comence et se termine pa "/" (ou un flag ,voir plus bas)
*/
const r1 = /ou/;
/* 
    "regex.test(string)" retourne un boulean indiquant si la regex a ete toruver dans le string 

    Plusieur fonction JS peuvent utiliser les regex
    r1 recherche la presence de "ou"
*/
console.log(r1,r1.test("Bonjour"),r1.test("Salut"));
// r2 recherche la presence d'un "o" ou "u" 
const r2 = /[ou]/;
console.log(r2,r2.test("Bonjour"),r2.test("Salut"));
// r3 recherche si sa comence par "ou"
const r3 =/^ou/;
console.log(r3,r3.test("Bonjour"),r3.test("outre"));
// r4 recherche si le string fini par "ou"
const r4 =/ou$/;
console.log(r4,r4.test("Bonjour"),r4.test("mou"));
// r5 recherche la presence de "ou" ou "oi"
const r5 = /ou|oi/;
console.log(r5,r5.test("Bonjour"),r5.test("Bonsoir"));
// r6 recherche la presence d'au moin une lelttre entre "a" et "z"
const r6 = /[a-z]/;
console.log(r6,r6.test("Bonjour"),r6.test("0987456321"));
// r7 recherche la presence d'un caractere qui n'est pas entre "a" et "z"
const r7 = /[^a-z]/;
console.log(r7,r7.test("Bonjour"),r7.test("0987456321"));
// r8 recherche la presence ou non de "o" et optionellement "u"
const r8 = /ou?/;
console.log(r8,r8.test("Bonjour"),r8.test("pizza"));
// r9 recherche la presence de "ou" au moin une fois que voulu
const r9 = /(ou)+/;
console.log(r9,r9.test("Bonjour"),r9.test("Bonsoir"));

// r10 rcherche la presence de "ou"autand de fois que f=que voulue
const r10 = /(ou)*/;
console.log(r10,r10.test("Bonjour"),r10.test("Bonsoir"));
// r11 recherche la presence de de ou 2x
const r11 = /(cou){2}/;
console.log(r11,r11.test("coup"),r11.test("coucou les gens"));
// r12 recherche la presence de cou entre une et deux fois
const r12 = /(ou){1,2}/;
console.log(r12,r12.test("coup"),r12.test("coucou les gens"));





