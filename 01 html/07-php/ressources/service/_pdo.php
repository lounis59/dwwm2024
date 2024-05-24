<?php
/* 
    PHP a deux principaux outils de connexion a la bdd
    PDO et MySQLi
    MySQLi est adapter au bdd de type MySQL
    PDO lui est adapte a tout type de bdd SQL

*/
/**
 * retourne une instance de connexion PDO a la BDD
 * 
 * @return \PDO
 */
function connexionPDO(): \PDO
{

    /* 
        Grae au return dans mon fichier config 
        je peux recuperer le tableau de ce dernier dans une variable  
    */
    $config = require __DIR__ . "/../config/_blogConfig.php";
    /* 
        Nous devons maintenant construire un "DSN", "Data Source Name"
        C'est un string qui contiendra toute les information pour localiser la BDD
        Elle prendra la forme suivante :
            pilote:hosteadresseHote;port=numeroPort;dbname=nomBDD;charset=charsetChoisi
        Par exemple :
            mysql:host=localhost;port=2206;dbname=blog;charset=utf8mb4
    */

    $dsn =
            "mysql:host=".$config["host"].";port=".$config["port"].";dbname=".$config["database"].";charset=".$config["charset"];

    try{
        /* 
            On creer une nouvelle instance de pdo en lui donnant en parametre :
                1. DSN
                2. Le nom d'utilisateur 
                3. Le mot de passe 
                4.Les option de PDO

            Le "\" dont je fais preceder certaine classe est ici completement optionelle 
            Il sera utile quand on fera de la POO
        */
        $pdo = new \PDO(
            $dsn,
            $config["user"],
            $config["password"],
            $config["option"]
        );
    }catch(\PDOException $e){
        /* 
            Pour les erreur de type "exception"
            L'activation de celle ci se fait avec le mot clef "throw"
            On parle de "lancer" une exception
        */
        throw new \PDOException($e->getMessage(),(int)$e->getCode());
    }
}
?>