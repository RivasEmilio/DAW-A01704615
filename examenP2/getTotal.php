<?php 
    require_once ('util.php');

    $_POST["submit-estado"]=htmlspecialchars($_POST["submit-estado"]);
    $name = $_POST["submit-estado"];
  

    if(isset($_POST["submit-estado"]) && !empty($_POST["submit-estado"] ) ){
        
        $rs = getZombieNum($name);
        //here you can echo the result of query
        $result = mysqli_fetch_array($rs);
        //here you can echo the result of query
        echo "<p>Zombies con $name: ".$result[0]."</p>";
       
        
    }
    

?>