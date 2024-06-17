<?php 
/* 
    Un autoloader est fait pour require les classe que l'on appele dans notre code automatiquement 
    Cela nous evitera de devoir de multiple require a chaque fichier
*/
class Autoloader
{
    public static function register()
    {
        spl_autoload_register(function($class){

            $file = str_replace("\\", DIRECTORY_SEPARATOR, $class).".php";
            if(file_exists($file))
            {
                require $file;
                return true;
            }
            return false;
        });
    }
}
?>