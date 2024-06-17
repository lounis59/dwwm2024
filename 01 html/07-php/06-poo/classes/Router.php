<?php 
class Router
{
    public static function routing(){
        $url = filter_var($_SERVER["REQUEST_URI"],FILTER_SANITIZE_URL);
        $url = explode("?",$url)[0];
        $url = trim($url,"/");

        if(array_key_exists($url, ROUTES))
        {
            // Je require le fichier contenant mon controller
            require "./controller/". ROUTES[$url]["controller"].".php";
            // Je cree une nouvelle instence de ma classe controller 
            $controller = new (ROUTES[$url]["controller"])();
            // j'appelle la methode associe a ma route :
            $controller->{ROUTES[$url]["fonction"]}();
        }else
        {
            require "./view/404.php";
        }
    }
}
?>