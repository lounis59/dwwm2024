<?php
session_start();
?>
<!-- 
    ----------------------------Exercice D1-----------------------------
    écrire une fonction "frenchDate" qui retournera la date du jour 
    en français, puis l'afficher (exemple : jeudi 25 août 2022);
-->

<!-- 
    ----------------------------Exercice D2-----------------------------
    Utiliser la fonction précédement créé pour afficher la date 
    puis l'heure depuis laquelle l'utilisateur visite le site.
    On utilisera les sessions.
-->

<!-- 
    ----------------------------Exercice D3-----------------------------
    Afficher depuis combien de seconde l'utilisateur est présent sur le site.
-->

<?php
function frenchDate()
{
    // $date = new DateTime();

    // Tableau de conversion des jours de la semaine et des mois en français
    $jours_fr = array(
        'Monday' => 'Lundi',
        'Tuesday' => 'Mardi',
        'Wednesday' => 'Mercredi',
        'Thursday' => 'Jeudi',
        'Friday' => 'Vendredi',
        'Saturday' => 'Samedi',
        'Sunday' => 'Dimanche'
    );

    $mois_fr = array(
        'January' => 'Janvier',
        'February' => 'Février',
        'March' => 'Mars',
        'April' => 'Avril',
        'May' => 'Mai',
        'June' => 'Juin',
        'July' => 'Juillet',
        'August' => 'Août',
        'September' => 'Septembre',
        'October' => 'Octobre',
        'November' => 'Novembre',
        'December' => 'Décembre'
    );

    // Obtenez les noms en français
    // $jour_fr = $jours_fr[$date->format('l')];
    // $mois_fr = $mois_fr[$date->format('F')];
    $jour_fr = $jours_fr[date("l")];
    $mois_fr = $mois_fr[date("F")];
    // Formater la date en français
    // $date_fr = ucfirst($jour_fr) . ' ' . $date->format('d') . ' ' . $mois_fr . ' ' . $date->format('Y');
    $date_fr = ucfirst($jour_fr) . ' ' . date('d') . ' ' . $mois_fr . ' ' . date('Y');

    // Vérifier si la session de timestamp existe
    if (isset($_SESSION["timestamp"])) {
        // Calculer le nombre de secondes écoulées depuis le début de la session
        $temps_ecoule = time() - $_SESSION["timestamp"];
        // $heure = date("h:i:s")-$_SESSION["timestamp"];
        echo "Vous êtes connecté depuis $temps_ecoule secondes.", "<br>";
        echo "Vous ete conecter depuis le {$_SESSION["date"]} <br>"/* ."$heure" */;
    } else {
        // Si c'est la première visite, enregistrer le timestamp de connexion dans la session
        $_SESSION["timestamp"] = time();
        $_SESSION["date"] = $date_fr . " " . date("h:i:s");
        echo "C'est votre première visite sur le site.", "<br>";
    }

    echo "Nous sommes le $date_fr", "<br>";
}
frenchDate();
// unset($_SESSION);session_destroy();
?>