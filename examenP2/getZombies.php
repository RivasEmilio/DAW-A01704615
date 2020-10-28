<?php
    require_once ('util.php');

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
   
?>