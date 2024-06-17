<?php 
namespace Model;

use Classes\AbstractModel;

class UserModel extends AbstractModel
{
    /**
     * Recupere la liste de tous les utilisateur
     *
     * @return Array|false
     */
    function getAllUsers(): array|false
    {
        $sql = $this->pdo->query("SELECT idUser, username FROM users");
        return $sql->fetchAll();
    }
    /**
     * Selectionne un utilisateur par son email
     *
     * @param string $email
     * @return array|false
     */
    function getOneUserByEmail(string $email): array|false
    {
        $sql = $this->pdo->prepare("SELECT * FROM users WHERE email = ?");
        $sql->execute([$email]);
        return $sql->fetch();
    }
    /**
     * Selectionne un utilisateur par son id
     *
     * @param string|integer $id
     * @return array|false
     */
    function getOneUserById(string|int $id): array|false
    {
        $sql = $this->pdo->prepare("SELECT * FROM users WHERE idUser = ?");
        $sql->execute([$id]);
        return $sql->fetch();
    }
    /**
     * Ajoute un utilisateur en BDD
     *
     * @param string $username
     * @param string $email
     * @param string $password
     * @return void
     */
    function addUser(string $username,string $email, string $password): void
    {
        $sql = $this->pdo->prepare("INSERT INTO users(username,email,password) VALUES(?,?,?)") ;
        $sql->execute([$username,$email,$password]);
    }
    /**
     * Mettre a jour les donnees d'un utilisateur par son ID
     *
     * @param string $username
     * @param string $email
     * @param string $password
     * @param string|integer $id
     * @return void
     */
    function updateUserById(string $username,string $email,string $password,string|int $id):void
    {
        $sql = $this->pdo->prepare("UPDATE users set username=?,email=?,password=? where idUser=?") ;
        $sql->execute([$username,$email,$password,$id]);
    }
    /**
     * Supprimer un utilisateur par son ID
     *
     * @param string|integer $id
     * @return void
     */
    function deleteUser(string|int $id): void
    {
        $sql = $this->pdo->prepare("DELETE FROM users WHERE idUser=? ") ;
        $sql->execute([$id]);
    }
}
?>