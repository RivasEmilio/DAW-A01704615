<?php 
    require_once ('util.php');

    $_POST["submit-name"]=htmlspecialchars($_POST["submit-name"]);
    $name = $_POST["submit-name"];

    $_POST["submit-estado1"]=htmlspecialchars($_POST["submit-estado1"]);
    $estado = $_POST["submit-estado1"];

    $_POST["submit-id"]=htmlspecialchars($_POST["submit-id"]);
    $id = $_POST["submit-id"];

    if(isset($_POST["submit-estado1"]) && !empty($_POST["submit-estado1"]) && isset($_POST["submit-name"]) && !empty($_POST["submit-name"]) && isset($_POST["submit-id"]) && !empty($_POST["submit-id"]) ){
        
        addZombie($name, $id, $estado);
        return printZombies();
        
    }
    

?>