<?php 
    require_once ('util.php');

    $_POST["submit-estado"]=htmlspecialchars($_POST["submit-estado"]);
    
    $name = $_POST["submit-estado"];

    if(isset($_POST["submit-estado"]) && !empty($_POST["submit-estado"] ) ){
 
       echo getZombieNum($name);;
    }
    

?>