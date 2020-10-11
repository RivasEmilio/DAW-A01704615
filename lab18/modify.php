<?php 

    require_once ('util.php');
   
    
    $_POST["nfm"]=htmlspecialchars($_POST["nfm"]);
    $name = $_POST["nfm"];
    $quantity = $_POST["qfm"];
    $price = $_POST["pfm"];
   

    if(isset($_POST["nfm"]) && !empty($_POST["nfm"]) && isset($_POST["qfm"]) && !empty($_POST["qfm"]) && isset($_POST["pfm"]) && !empty($_POST["pfm"])){
        
        updateDB($name,$quantity,$price);
        
    }else{
        echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
    }
    


?>