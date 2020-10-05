<?php
    //Despliega las funciones hechas anteriormente en algunas vistas.
    require_once ('util.php');
    include("index.html");
    $result = getFruits();

    if(mysqli_num_rows($result) > 0)
    {
        echo "<div class='container'>";
        echo "<div class='row'>";
        echo "<div class='col s12 m4 l8 offset-l2'>";
        //output data of each row
        echo "<table>";
        echo "<thead>";
        echo "<tr>";
        echo "<th> Nombre </th>";
        echo "<th> Cantidad </th>";
        echo "<th> Cantidad </th>";
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
        echo "</div>";
        echo "</div>";
    }

    if(isset($_POST["submit-fruit"]) && !empty($_POST["submit-fruit"])){

        $name = $_POST["namefruit"];
        $quantity = $_POST["quantityfruit"];
        $price = $_POST["pricefruit"];

        if(isset($_POST["namefruit"]) && !empty($_POST["namefruit"]) && isset($_POST["quantityfruit"]) && !empty($_POST["quantityfruit"]) && isset($_POST["pricefruit"]) && !empty($_POST["pricefruit"])){
            
            insertFruit($name, $quantity, $price);
            header('Location: '.$_SERVER['REQUEST_URI']);
        }else{
            echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        }

    }


    
?>