<?php
/* 
    On va voir comment televerser un fichier (upload)
    meme si nous ferons pas ici l'enregistrement en BDD

    Il est important de retenir que dans le cas d'un envoie de fichier 
    Tout ce qui est enregistrer en BDD c'est le nom voir le chemin vers le fichier 

    Le fichier en lui meme est juste enregistrer sur notre serveur 
*/
$error = $target_file = $target_name = $mime_type =$oldName = "";
// chemin vers le dossier ou seront enregistre mes fichier 
$target_dir = "./upload/";
// Liste des type mime acceptes :
$typePermis = ["image/png","image/jpeg","image/gif","application/pdf"];

if($_SERVER["REQUEST_METHOD"]==="POST"&& isset($_POST["upload"]))
{
    /* 
        Lorsque l'on upload un fichier le serveur va le sauvegarder dans un dossier temporaire 
        une fois le script effectuer le contenue du dossier temporaire est efface

        Notre role va etre de verifier si le fichier est valide et si c'est le cas le deplacer dans un dossier choisi

        La premiere etape va etre de verifier si l'upload s'est bien passer 
        Le serveur a des parametre bloquant les fichier trop lourd 
        il peut aussi avoir un probleme de connexion 
        on va donc verifier que le fichier est bien arrive

        is_upload_file indique si le chemin donner en parametre est bien un fichier televerse
        Les information des fichier se trouvant dans les superglobal $_FILES
        a laquelle on donnera la clef qui corespond au name de l'input type file
        On trouvera alor un autre tableau associatif qui aura entre autre chose le nom temporaire de notre fichier :
    */
    if(!is_uploaded_file($_FILES["fichier"]["tmp_name"]))
    {
        $error = "Veulliez selectionner un fichier";
    }else{
        /* 
            On trouvera le nom du fichier a la clef "name" et on utilisera basename pour se debarasser d'eventuel "/nomDossier/" qui pourait poser probleme 
        */
        $oldName = basename($_FILES["fichier"]["name"]);
        /* 
            Si unsecond fichier est upload avec le meme nom il le remplacera

            Pour eviter cela on va renommer le fichier 
            Une facon classique est d'utiliser uniqid()
            celui ci produira 13 caractere se voulant unique 

            Opptionellement on peut lui ajouter un premei parametr pour ajouter un prefixe
            Et un second parametre qui est un boolean qui fera passer le nombre de caractere a 23
        */
        $target_name = uniqid(time()."-",true)."-".$oldName;
        // Je concatene le chemin vers le dossier d'upload et le nom du fichier 
        $target_file = $target_dir . $target_name;
        // Je recupere le type mine du fichier
        $mime_type = mime_content_type($_FILES["fichier"]["tmp_name"]);

        if(file_exists($target_file))
        {
            $error = "Ce fichier existe dejat";
        }
        /* 
            Ensuite il est bon d'interdire les upload bien trop lourd 
            Attention le poid du fichier est donne en ectot
            5 000 000 octet = 5mo
        */
        if($_FILES["fichier"]["size"]>5000000)
        {
            $error = "Ce fichier est trop lourd";
        }
        // Je verifie que le type mime du fichier est dans ma liste de type accepte
        if(!in_array($mime_type,$typePermis))
        {
            $error = " Ce type de fichier ";
        }
        //  si on a pas d'erreu
        if(empty($error))
        {
            /* 
                move_uploaded_file va deplacer le fichier depuis sa zone temporaire 
                jusqu'au dossier d'upload prevu a cet effet 
                elle retournera un boolean indiquant si le deplacement c'est bien passe
            */
            if(move_uploaded_file($_FILES["fichier"]["tmp_name"],$target_file))
            {
                /* 
                    On pourait alors ici enregistrer le nom du fichier en bdd
                */
            }
            else
            {
                $error = "Erreur lors de l'upload";
            }
        }
    }
}

require("../ressources/template/_header.php");
?>
<!-- Notre formulaire est assez classique, on oublie juste pas l'attribut :
    "enctype" lorsque l'on veut uploader un fichier. -->
<form action="" method="post" enctype="multipart/form-data">
    <label for="fichier">Choisir un fichier :</label>
    <input type="file" name="fichier" id="fichier">
    <input type="submit" value="Envoyer" name="upload">
    <span class="error"><?php echo $error??""; ?></span>   
</form>
<!-- On affiche cette partie que is on a envoyé notre formulaire et qu'il n'y a aucune erreur. -->
<?php if(isset($_POST["upload"]) && empty($error)): ?>
    <p>Votre fichier a bien ete televerse sous le nom "<?= $target_name ?>". <br>
Vous pouvez le telecharger <br>
<a href="<?= $target_file?>" download="<?= $oldName ?>">ICI</a></p>
<?php
endif;
require("../ressources/template/_footer.php");
?>