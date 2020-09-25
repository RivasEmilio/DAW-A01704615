<?php
    session_start();
    include("main2.html");
    echo "<br /><br /><div class=container>";
    echo "<div class=center-align>";
    echo "<h4>Sesion de: ". $_SESSION['user']. "<br />";
    echo "Este es tu codigo: ". $_SESSION['code']. "</h4>"; 
    if(isset($_SESSION["image"])){
        echo '<br><img class="circle responsive-img" src=" ' . $_SESSION["image"] . '" >';
    }

    echo "<div/>";
    echo "<div/>";

    session_unset();
    session_destroy();
?>