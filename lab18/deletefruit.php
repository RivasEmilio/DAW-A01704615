<?php 
    require_once ('util.php');

    $_POST["nfd"]=htmlspecialchars($_POST["nfd"]);
    
    $name = $_POST["nfd"];

    if(isset($_POST["nfd"]) && !empty($_POST["nfd"] ) ){
 
        deleteFruit($name);
        
    }else{
        echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
    }
    



?>