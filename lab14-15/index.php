<?php
    //Despliega las funciones hechas anteriormente en algunas vistas.
    require_once ('util.php');
    include("index.html");
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
      
       
    }

    if(isset($_POST["submit-fruit"]) && !empty($_POST["submit-fruit"])){

        $_POST["namefruit"]=htmlspecialchars($_POST["namefruit"]);
        $name = $_POST["namefruit"];
        $quantity = $_POST["quantityfruit"];
        $price = $_POST["pricefruit"];

        if(isset($_POST["namefruit"]) && !empty($_POST["namefruit"]) && isset($_POST["quantityfruit"]) && !empty($_POST["quantityfruit"]) && isset($_POST["pricefruit"]) && !empty($_POST["pricefruit"]) && ctype_alpha($name)){
           
            insertFruit($name, $quantity, $price);
            header('Location: '.$_SERVER['REQUEST_URI']);
        }else{
            echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        }

    }

    if(isset($_POST["delete-fruit"]) && !empty($_POST["delete-fruit"])){

        $_POST["nfd"]=htmlspecialchars($_POST["nfd"]);
        $name = $_POST["nfd"];

        if(isset($_POST["nfd"]) && !empty($_POST["nfd"] && ctype_alpha($name)) ){
     
            echo "eliminado de base de datos";
            deleteFruit($name);
            header('Location: '.$_SERVER['REQUEST_URI']);
            
        }else{
            echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        }
        
    }

    if(isset($_POST["mod-fruit"]) && !empty($_POST["mod-fruit"])){

        $_POST["nfm"]=htmlspecialchars($_POST["nfm"]);
        $name = $_POST["nfm"];
        $quantity = $_POST["qfm"];
        $price = $_POST["pfm"];
       

        if(isset($_POST["nfm"]) && !empty($_POST["nfm"]) && isset($_POST["qfm"]) && !empty($_POST["qfm"]) && isset($_POST["pfm"]) && !empty($_POST["pfm"]) && ctype_alpha($name)){
            
            
            updateDB($name,$quantity,$price);
            header('Location: '.$_SERVER['REQUEST_URI']);
            
        }else{
            echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
        }
        
    }

    include("footer.html");


    
?>