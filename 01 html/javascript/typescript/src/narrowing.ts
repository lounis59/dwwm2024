/* 
    Le narrowing c'est le fait de retrecire (supprimer) des possibilites de type pour nos variables et arguments :
*/
function birthday(age: string|number): string
{
    // age peut etre un string donc cela provoque une erreur
    // age++;
    if(typeof age === "number")
    {
        age++;
    }
    else
    {
        age = parseInt(age)+1;
    }
    /* 
        Dans le if typescript comprend que age est forcement un nombre et dans le else forcement un string

        Si je concatene mon nombre , ts comprend que c'est un string.
    */
    return age+ " ans";
}

function chaussette(droite: string|boolean,gauche:string|number): void
{
    if(droite === gauche)
    {
        console.log("Vous avez la paire !",gauche,droite);
    }
    /* 
        Dans cette condition nos deux element sont forcement des string 
        car c'est la seul facon qu'ils ont d'etre stictement egale
    */
}

function planning(date: Date|string,days:string[]|number)
{
    // date.getDate()
    if(date instanceof Date)
    {
        date.getDate();
    }
    if(!Array.isArray(days))
    {
        days++
    }
}

function clavier(e:KeyboardEvent|HTMLElement)
{
    if(typeof e === "number")
    {
        console.log(e);
    }
    /* 
        Le type "never" indique que selon TS, c'est impossible d'avoir un type valide ici
    */
}
/* 
    "variable is objet" permet d'indiquer a typescript que la fonction retourne un boolean indiquant le type du parametre 

    ici en indiquant "a is Date" typescript comprend que le boolean de retour
    Indique si le parametre "a" est une "Date" ou non.
*/
// function isDate(a:any):boolean
function isDate(a:any): a is Date
{
    return a instanceof Date;
}

function check(a:Date|HTMLElement)
{
    if(isDate(a))
    {
        console.log(a.getDate());
        
    }
}