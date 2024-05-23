<?php
session_start();
$title = "Securite";
require "../ressources/template/_header.php";
/* 
    Nous parlerons ici des 4 principale faille de securiter auxquels faire attention en developpement web.
        -XSS
        -CSRF
        -Injection SQL
        -Brute Force
    Le XSS ou "Cross Site Scripting" est le fait pour un utilisateur malveillant de pouvoir integrer des balise HTML ou du code JS directement dans votre page 
    Tout entrer de l'utilisateur doit etre filtrer soit avant la mise en bdd soit au moment de l'affichage 
    Deux fonction sont principalement utilise pour cela :
        - htmlspecialchars()
        ou
        -htmlentities()

*/
$messageUtilisateur = "<script>alert('vous avez ete hacke')</script>";

// echo $messageUtilisateur,"<br>";
echo htmlspecialchars($messageUtilisateur), "<br>";
echo htmlentities($messageUtilisateur), "<br>";

/* 
    CSRF ou "Cross Site Request Forgery" 
    Le principe est de creer un formulaire qui semble anodin mais qui en fait rediriger vers la page de traitement de formulaire d'un autre site (souvent un site ou vous avez un compte voir des droit specifiques)
    et valider via des input de type hidden une requete que vous n'avez pas valide

    La solution classique pour sens protege est l'utilisation de token 
    L'orsqu'on arrive sur la page du formulaire on genere un token (une suite de carctere) aleatoire que l'on sauvegarde en session 
    On placera un input de type hidden dans nore formulaire avec en value ce meme token 
    Et lorsque l'on traitera les donne du formulaire on verifira que le token corespond a la value envoye 
    Si cela vient d'un autre formulaire on n'aura pas de correspondance 
*/
function setCSRF(int $time = 0): void
{
    // Optionellement on peut donner un temps limite pour valider un formulaire 
    if ($time > 0) {
        $_SESSION["tokenExpire"] = time() + 60 * $time;
    }
    $_SESSION["token"] = bin2hex(random_bytes(50));
    echo '<input type="hidden" name="token" value="' . $_SESSION["token"] . '">';
}
function isCSRFValid(): bool
{
    // Si le jeton existe en session et en post et qu'il sont egaux 
    if (!isset($_SESSION["tokenExpire"]) || $_SESSION["tokenExpire"] > time()) {
        if (isset($_SESSION["token"], $_POST["token"]) && $_SESSION["token"] === $_POST["token"]) {
            return true;
        }
    }
    http_response_code(405);
    return false;
}
/* 
    L'injection SQL
    Le principe est de taper une rquete SQL dans n'importe quel champ d'un formulaire 
    Et que celle ci soit execute 

    Pour eviter cela toute requete faite a la Bdd qui inclu des donnees utilisateurs doit etre "une requete prepare"

    Nous allons voir plus tard qu'il y a 2 facon d'envoyer une requete a la bdd 
    La premiere avec la methode "query()" ou l'on se contente de taper la requte sous forme de string  (aucune securite)
    La seconde avec la methode "prepare()" ou l'on remplacera toute les donne utilisateur dans le string par "?" ou ":unMot"

    Dans ce seconde cas la requete est lu separement des donnee 
    Et les donees sont envoyer par la suite
    
    Plus de detail dans les cours suivant ou l'on se connectera a la bdd
 */
$username = "Maurice";
$passeword = "Pizza";
// Non securise :
"INSERT INTO users(username, password) VALUES($username, $passeword)";
// Securise :
"INSERT INTO users(username, password) VALUES(?, ?)";
// Les donnees sont fournie apres

/* 
    Le brute force 
    Il consiste en l'envoie de millier de requete a un formulaire de connexion afin d'essayer toute les combinaison possible de mot de passe
    
    Pour celui ci il existe des tas de reponce possible 
    bloquer un compte aprer X echec pendant une duree limite ou jusqua validation d'un email
    Limite le nombre de requete a 1 par seconde (ou plus lent ) afin de ralentire le bot 
    La double authentification en plus du mot de passe demander a l'utilisatuer de rentrer un code envoyer par "email" , "sms", "application"
    Valider un CAPTCHA !

*/
$error = $pass = $hash = "";
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['password'])) {
    if (empty($_POST["password"])) {
        $error = "Veuillez entrer un mot de passe ";
    } else {
        $pass = trim($_POST["password"]);
        /* 
            password_hash permet de hacher un mot de passe afin de la rendre illisible
            Il est important de toujour hacher le mot de passe sauvegarder en BDD
            
            Le premier parametre est le mot de passe a hacher et le second une constente au choix entre :
                -PASSWORD_DEFAULT
                -PASSWORD_BCRYPT
                -PASSWORD_ARGON2I
                -PASSWORD_ARGON2ID
        */
        $hash = password_hash($pass, PASSWORD_DEFAULT);

        /* 
            Ce formulaire n'est pas tres pro et affiche le mot de passe en clair sur la page 
            Donc il faut le proteger des attaques XSS
        */
        $pass = htmlspecialchars($pass);
    }
    if (!isCSRFValid()) {
        $error = "La methode utiliser n'est pas permise";
    }
}
?>
<?php
require "../ressources/autoload.php";
if (isset($_POST["ok"])) {
    $recaptcha = new \ReCaptcha\ReCaptcha("6LfS8uUpAAAAAEPJLHClWKuHf479-JIOZNGQK0FK");

    $gRecaptchaResponse = $_POST['g-recaptcha-response'];

    $resp = $recaptcha->setExpectedHostname('localhost')
        ->verify($gRecaptchaResponse);
    if ($resp->isSuccess()) {
        echo "Success!";
    } else {
        $errors = $resp->getErrorCodes();
        $error = "Cocher le captcha";
    }
}
?>
<h2>Hacher un mot de passe :</h2>
<form action="" method="post">
    <input type="text" name="password" placeholder="Mot de passe a Hacher " required>
    <!-- CRSRF -->
    <?php setCSRF(); ?>
    <!-- Fin CSRF -->
    <div class="g-recaptcha" data-sitekey="6LfS8uUpAAAAAKCvTQ4gpAoOp7gZ9NJhHgGI32ma"></div>
    <input type="submit" name="ok" value="Hacher">
    <span class="error"><?php echo $error ?></span>
</form>
<?php if (empty($error) && !empty($passeword)) : ?>
    <p>
        Votre mot de passe "<?= $passeword ?>" a ete hacher en "<?= $hash ?>"
    </p>
<?php
endif;
require "../ressources/template/_footer.php";
?>