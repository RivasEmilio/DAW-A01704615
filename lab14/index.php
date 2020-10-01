<?php
    //Despliega las funciones hechas anteriormente en algunas vistas.
    require_once "util.php";

    $result = getFruits();

    if(mysqli_num_rows($result) > 0)
    {
        //output data of each row
        while($row = mysqli_fetch_assoc($result))
        {
            echo "<tr>";
            echo "<td>" . $row["name"] . "</td>";
            echo "<td>" . $row["units"] . "</td>";
            echo "<td>$" . $row["price"] . "</td>";
            echo "</tr>";
        }
    }
?>