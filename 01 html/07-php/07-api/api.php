<?php 
// J'indique quel site ont acces a mon API
header("Access-Control-Allow-Origin: *");
// J'indique lke format des donnees retournees par l'API
header("Content-Type: application/json; charset=UTF-8");
// La duree maximal de la requete
header("Access-Control-Max-Age: 3600");
// On indique la possibilite d'echanger des identifiants avec l'API
header("Access-Control-Allow-Credentials: true");
// Quels sont les entetes acceptees venant d'une requete exterieur
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

/**
 * Affiche la reponse de l'API
 *
 * @param array $data donnees a afficher
 * @param integer $status code de status http
 * @param string $message message de status
 * @return void
 */
function sendResponse(array $data,int $status,string $message)
{
    http_response_code($status);
    echo json_encode([
        "data"=>$data,
        "status"=>$status,
        "message"=>$message
    ]);
    exit;
}
/**
 * Sauvegarde un message d'erreur
 * Ou retourne la totaliter des erreur
 *
 * @param boolean $property nom du message d'erreur
 * @param boolean $massege contenue du message d'erreur
 * @return array|void
 */
function setError($property = false,$message = false)
{
    static $error = [];
    if(!$property || !$message)return ["violations"=>$error];
    $error[] = [
        "propertyPath"=>$property,
        "message"=>$message
    ]; 
}
?>