<?php 
    require_once ('util.php');

    $_POST["submit-name1"]=htmlspecialchars($_POST["submit-name1"]);
    $name = $_POST["submit-name1"];

    $_POST["submit-estado2"]=htmlspecialchars($_POST["submit-estado2"]);
    $estado = $_POST["submit-estado2"];


    if(isset($_POST["submit-estado2"]) && !empty($_POST["submit-estado2"]) && isset($_POST["submit-name1"]) && !empty($_POST["submit-name1"]) ){
        
        updateState( $name, $estado);
        return printZombies();
        
    }
    

?>