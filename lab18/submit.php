<?php 
    require_once ('util.php');


    $_POST["namefruit"]=htmlspecialchars($_POST["namefruit"]);
    $name = $_POST["namefruit"];
    $quantity = $_POST["quantityfruit"];
    $price = $_POST["pricefruit"];

    if(isset($_POST["namefruit"]) && !empty($_POST["namefruit"]) && isset($_POST["quantityfruit"]) && !empty($_POST["quantityfruit"]) && isset($_POST["pricefruit"]) && !empty($_POST["pricefruit"]) && ctype_alpha($name)){
       
        insertFruit($name, $quantity, $price);

    }else{
        echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        printFruits();
    }

?>