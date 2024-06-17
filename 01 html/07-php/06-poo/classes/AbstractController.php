<?php 
namespace Classes;

abstract class AbstractController
{
    /**
     * Affiche les message flash 
     *
     * @return void
     */
    protected function getFlash(): void
    {
        if(isset($_SESSION["flash"]))
        {
            echo "<div class='flash'>{$_SESSION['flash']}</div>";
            unset($_SESSION["flash"]);
        }
    }
    /**
     * Enregistre un message en session
     *
     * @param string $message
     * @return void
     */
    protected function setFlash(string $message): void
    {
        $_SESSION["flash"] = $message;
    }
    /**
     * Affiche la vue demander en premier parametre
     *
     * En option le tableau peut acceuillir des variables a transmettre a la vue
     * 
     * @param string $view
     * @param array $options Doit etre un tableau associatif
     * @return void
     */ 
    protected function render(string $view,array $options = []): void
    {
        foreach($options as $name=>$value)
        {
            $$name = $value;
        }

        require __DIR__."/../../ressources/template/_header.php";
        require __DIR__."/../view/".$view;
        require __DIR__."/../../ressources/template/_footer.php";
    }

}
?>