<?php
//  On recupere nos routes
require "./routes.php";
//  J'utilise filter_var pour retirer tous le caractere qui n'ont rien a faire dans notre url
$url = filter_var($_SERVER["REQUEST_URI"], FILTER_SANITIZE_URL);
// Je supprime les possibles parametres en get de l'url
$url = explode("?",$url)[0];
// Je retire de l'url les "/" au debut et a la fin de celui ci
$url = trim($url,"/");

if(array_key_exists($url , ROUTES))
{
    require "./pages/".ROUTES[$url];
}
else
{
    require "./pages/404.php";
}
?>