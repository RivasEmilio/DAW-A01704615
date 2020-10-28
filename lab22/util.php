<?php
    //Haz una función llamada connectDb la cual validará que la conexión sea correcta.
    function connectDb()
    {
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "dbname";

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

    /*
    Haz una función que te permita obtener todos los objetos de una base de datos.
    En esta ocasión, siguiendo con mi tabla "fruit", regresaré todo lo que se encuentra ahí.
    */
    function getFruits()
    {
        $conn = connectDb();
        $sql = "EXECUTE getFruits";//stored procedure
        $result = mysqli_query($conn, $sql);

        closeDb($conn);

        return $result;
    }

    //Haz por lo menos dos funciones que hagan una consulta a la base de datos con algunos parametros.
    //funcion que regresará los datos de una fruta que tenga en su nombre el parámetros
    //Ejemplo, si pongo manzana, me puede regresar manzana roja, manzana whashington, etc.accent-1
    function getFruitsByName($fruit_name)
    {
        $conn = connectDb();
        $sql = "SELECT name, quantity, price FROM Fruit WHERE name LIKE '%".$fruit_name."%'";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);
        return $result;
    }

    function insertFruit($name,$quantity,$price){

        $conn = connectDb();

        $sql = "SET @p0='$name'; SET @p1='$quantity'; SET @p2='$price'; CALL `addFruit`(@p0, @p1, @p2);";//stored procedure

        if(mysqli_query($conn, $sql)){
            echo '<script>alert("'.$name.' created succesfully");</script>';
            printFruits();
            closeDb($conn);
            return true;
        }else {
            echo "error: ".$sql. "<br>" . mysqli_error($conn);
            printFruits();
            return false;
        }
        closeDb($conn);
    }

    function deleteFruit($name){

        $conn = connectDb();

        $sql = "EXECUTE deleteFruit '$name'";//stored procedure

        if(mysqli_query($conn, $sql)) {
            echo '<script>alert("'.$name.' deleted succesfully");</script>';
            printFruits();
            closeDb($conn);
            return true;
        }else {
            echo "error: ".$sql."<br>". mysqli_error($conn);
            printFruits();
            return false;
        }

        closeDb($conn);
    }

    function updateDB($name,$quantity,$price){

        $con = connectDb();
        $sql = "UPDATE Fruit SET name='$name',quantity='$quantity',price='$price' WHERE name = '$name'";
        if(mysqli_query($con, $sql)){
            echo '<script>alert("'.$name.' updated succesfully");</script>';
            printFruits();
            closeDB($con);
            return true;
        }
        else{
            echo "error: ".$sql."<br>". mysqli_error($conn);
            printFruits();
            return false;
        }
        closeDB($con);
    }

    function printFruits(){
        $result = getFruits();

        if(mysqli_num_rows($result) > 0)
        {
        
            echo "<div class='row'>";
    
            //output data of each row
            echo "<table>";
            echo "<thead>";
            echo "<tr>";
            echo "<th> Nombre </th>";
            echo "<th> Cantidad </th>";
            echo "<th> Precio </th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            while($row = mysqli_fetch_assoc($result))
            {
            
                echo "<tr>";
                echo "<td>" . $row["name"] . "</td>";
        
                echo "<td>" . $row["quantity"] . "</td>";
        
                echo "<td>$" . $row["price"] . "</td>";
                echo "</tr>";
            }
            echo "</tbody>";
            echo "</table>";
            echo "</div>";
        
        
        }
    }


?>

