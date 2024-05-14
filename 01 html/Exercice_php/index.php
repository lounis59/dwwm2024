<?php session_start()?>
<?php
    function saveList(){
        $element = $error = "";
        if($_SERVER["REQUEST_METHOD"]==="POST" && isset($_POST["envoyer"]))
        {
            if(empty($_POST['element'])){
                $error = "Vous avez pas entrer d'element ";
                echo $error;
            }else{
                $element = $_POST["element"];
                if(!isset($_SESSION["elementListe"])){
                    $_SESSION["elementListe"] = [];

                }
                $_SESSION["elementListe"] []= $element;
                var_dump($_SESSION);
                $elementList = $_SESSION["elementListe"];
                foreach($elementList as $elem ){
                    echo "<p> $elem </p>";
                }
            }
        }
    }
    saveList()
?>

<form action="" method="post">
<input type="text" name="element" id="liste" placeholder="Ecrire ici">
<button type="submit" name="envoyer">envoyer</button>

</form>