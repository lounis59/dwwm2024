class Truc
{
    /* 
        Les accesseurs public, protected et private ne son pas compiler en JS
    */
    public prenom = "Maurice";
    protected nom = "Dupont";
    private age = 54;
}
const t = new Truc();
t.prenom;
// Les proprietes protected et private ne sont pas accessible a l'exterieur de la classe
// t.nom;
// t.age;
class Machin extends Truc
{
    constructor()
    {
        super();
        this.prenom;
        this.nom;
        // La proprieter protected est heriter mais pas la private 
        // this.age;
    }
    faireUnTruc(this : HTMLElement)
    {
        /* 
            par defaut this vaut l'objet englodent (ici sa classe)
            Mais si une methode est cree dans le but d'etre utilise dans un addEventListener  ou d'etre bind 
            la valeur this peut etre changer 
            Afin de l'indiquer a TS on peut placer les parametre :
            "this:nouveauType"
            Cela ne compte pas comme un parametre a donner a la fonction
        */
        this
    }
}

class Collection<T>
{
    /* 
        Placer un accesseur (public,protected ou private) directement dans les parametre du constructeur 
        est un racourcie qui signifie : 
            -declarer ma propriete dans ma class 
            -recoit un parametre dans le construteur 
            -donne la valeur de ce parametre en proprieter  
    */
    constructor(private items:T[]){}

    addOne(arg:T):this
    {
        this.items.push(arg)
        return this;
    }
    addMore(arg : T[]):this
    {
        this.items.push(...arg);
        return this
    }
}
/* 
    En utilisant un generic sur ma classe
    une fois le type definie dans le constructor 
    Mon objet n'accepte plus que ce type
    Ici j'ai donne un tableau de chiffre 
    seul des chiffre peuvent etre utiliser dans mes methodes 
*/
const c = new Collection([5,4,8,9]);
c.addOne(42).addMore([9,76]).addOne(21);

class Triangle{c1=5;c2=8;c3=2;}
class Rectangle{c1=12;c2=20;}
function getC1(arg: Rectangle)
{
    return arg.c1
}
/* 
    Lorsque TS verifie si le type d'une classe est bon il ne verifie pas le nom de la classe
    Mais si l'objet fournie contient au moins toute les prprieter de la classe atendue 

    Ici il atend un objet avec les proprieter "c1" et "c2"
    Triangle a a au moin ces deux proprieter il est donc accepte
*/
getC1(new Rectangle());
getC1(new Triangle());
/* 
    Une classe abstraite est une classe qui ne peut pas etre instencier

    Elle sert de modele a d'autre classe afin d'etre herite

    Elle peut contenir des proprieter et des methode classique Mais aussi des methodes abstraite
    Elle sont declarer mais pas definie

    Les classe qui herite doivent definir elle meme la methode fonctionne
*/
abstract class Polygone
{
    sides: {[key:string]: number}= {};

    abstract surface():number;

    countSide():number
    {
        return Object.keys(this.sides).length;
    }
}

class Carre extends Polygone
{
    constructor(c:number)
    {
        super()
        this.sides.c1 = c;
        this.sides.c2 = c;
        this.sides.c3 = c;
        this.sides.c4 = c;
    }
    surface():number
    {
        return this.sides.c1 * this.sides.c2
    }
}
const square = new Carre(5);
console.log(square.surface());
console.log(square.countSide());

