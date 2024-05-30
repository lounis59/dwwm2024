<?php
use MongoDB\BSON\ObjectId;
use MongoDB\Driver\Query;
use MongoDB\Driver\Manager;
/**
 * Retourne un manage de connexion a une bdd mongo
 * 
 * @return Manager
 */
function connexionManager():Manager{
    $config = require __DIR__."/../config/_mongoConfig.php";
    /* 
        Le dsn de mongo prend la forme suivante :
            driver://username:password@host:port
    */
    $dsn = "mongodb://{$config['user']}:{$config['password']}@{$config['host']}:{$config['port']}";

    try
    {
        $mongo = new Manager($dsn);
        return $mongo;
    }catch(Exception $e)
    {
        echo "Exeption reçue : {$e->getMessage()}";
    }
}
?>