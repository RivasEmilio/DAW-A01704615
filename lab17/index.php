<?php
    //Despliega las funciones hechas anteriormente en algunas vistas.
    require_once ('util.php');
    
    if(isset($_POST["submit"]) && !empty($_POST["submit"])){
        $_POST["user_name"]=htmlspecialchars($_POST["user_name"]);
        $_POST["password"]=htmlspecialchars($_POST["password"]);
        $usuario = $_POST["user_name"];
        $contra = $_POST["password"];

        if(isset($_POST["user_name"]) && !empty($_POST["user_name"]) && isset($_POST["password"]) && !empty($_POST["password"])){
            $pass = getPass($usuario);
            
            if ($pass == $contra) {
                echo '<script>alert("Contraseña correcta");</script>';
            }else
                echo '<script>alert("Contraseña incorrecta '.$pass.'");</script>';
        }else
        echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
    }

    
?>