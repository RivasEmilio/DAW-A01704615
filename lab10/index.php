<?php
    include("main.html");
  
    $_GET["name"]=htmlspecialchars($_GET["name"]);

    $_GET["age"]=htmlspecialchars($_GET["age"]);

    if( $_GET["name"] && $_GET["age"] ) {
        echo "<br /><br /><div class=container>";
        echo "<div class=center-align>";
        echo "<h4>Bienvenido ". $_GET['name']. "<br />";
        $edad=$_GET['age']*365;
        echo "Has vivido ". $edad. " Dias.</h4>";     
        echo "<div/>";
        echo "<div/>";
        exit();
    }else
        echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        

?>