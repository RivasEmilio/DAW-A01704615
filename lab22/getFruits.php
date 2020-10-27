<?php
    //Despliega las funciones hechas anteriormente en algunas vistas.
    require_once ('util.php');
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
    
?>