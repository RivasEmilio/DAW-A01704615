<?php
    //Haz una función llamada connectDb la cual validará que la conexión sea correcta.
    function connectDb()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "rbac";

        $con = mysqli_connect($servername, $username, $password, $dbname);

        //check connection
        if(!$con)
        {
            die("Connection faled: " . mysqli_connect_error());
        }

        return $con;
    }
    //Haz una función llamada closeDB que recibirá como parámetro una conexión establecida previamente.
    //La variable $mysql es una conexión establecida anteriormente
    //tomando de ejemplo la maigen anterior, podría mandar a llamar la función
    //mandando como parámetro $con
    function closeDb($mysql)
    {
        mysqli_close($mysql);
    }

    function getPass($username)
    {
        $conn = connectDb();
        $sql = "SELECT Contrasena, FROM usuario WHERE Id_usuario = \"". $username ."\"";
        $result = mysqli_query($conn, $sql);

        closeDb($conn);

        return $result;
    }

    //Haz por lo menos dos funciones que hagan una consulta a la base de datos con algunos parametros.
    //funcion que regresará los datos de una fruta que tenga en su nombre el parámetros
    //Ejemplo, si pongo manzana, me puede regresar manzana roja, manzana whashington, etc.accent-1
    function getRol($idusuario)
    {
        $conn = connectDb();
        $sql = "SELECT Id_Rol FROM roles_usuario WHERE Id_usuario = '$idusuario'";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);
        return $result;
    }

?>

