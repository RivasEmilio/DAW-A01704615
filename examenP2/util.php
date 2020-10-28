<?php
    //Haz una función llamada connectDb la cual validará que la conexión sea correcta.
    function connectDb()
    {
        $servername = "localhost";
        $username = "id15254856_emilioadmin";
        $password = "4=FgVAp_sc)OBYrc";
        $dbname = "id15254856_db";

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

   
    function getEstados()
    {
        $conn = connectDb();
        $sql = "CALL `getEstados`();";
        $result = mysqli_query($conn, $sql);

        closeDb($conn);

        return $result;
    }

    function createZombie($name,$id)
    {
        $conn = connectDb();
        $sql = "CALL `createZombie`($name,$id);";
        $result = mysqli_query($conn, $sql);

        closeDb($conn);

        return $result;
    }

    function getZombieNum($estado)
    {
        $conn = connectDb();
        $sql = "CALL `getZombienum`($estado);";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);

        return $result;
    }

    function getEstadoNum($estado)
    {
        $conn = connectDb();
        $sql = "CALL `getZombienum`($estado);";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);

        return $result;
    }

    function getZombie($estado)
    {
        $conn = connectDb();
        $sql = "CALL `getZombienum`($estado);";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);

        return $result;
    }

    function getDateZ()
    {
        $conn = connectDb();
        $sql = "CALL `getDate`();";
        $result = mysqli_query($conn, $sql);
        closeDb($conn);

        return $result;
    }


    function printZombies(){
        $result = getDateZ();

        if(mysqli_num_rows($result) > 0)
        {
        
            echo "<div class='row'>";
    
            //output data of each row
            echo "<table>";
            echo "<thead>";
            echo "<tr>";
            echo "<th> Nombre </th>";
            echo "<th> estado </th>";
            echo "<th> fecha </th>";
            echo "</tr>";
            echo "</thead>";
            echo "<tbody>";
            while($row = mysqli_fetch_assoc($result))
            {
            
                echo "<tr>";
                echo "<td>" . $row["id"] . "</td>";
        
                echo "<td>" . $row["nestado"] . "</td>";
        
                echo "<td>$" . $row["fecha"] . "</td>";
                echo "</tr>";
            }
            echo "</tbody>";
            echo "</table>";
            echo "</div>";
        
        
        }
    }


?>

