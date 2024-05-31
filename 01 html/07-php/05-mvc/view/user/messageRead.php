
<?php 
if(!empty($allMessage)){
        foreach($allMessage as $mess){
            echo "<p>". htmlspecialchars($mess["message"])."</p>".' <a href="/05-mvc/user/messageUpdate?id='. $mess["idMessage"].'">update</a> '.' <a href="./delete.php?id='. $mess["idMessage"].'">delete</a>';
        }
    }else
    {
        echo "Vous n'avez pas de message enregistrer";
    }