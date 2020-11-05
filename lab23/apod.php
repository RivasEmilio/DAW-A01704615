<?php 
       $_POST["fecha"]=htmlspecialchars($_POST["fecha"]);
      
   
       if(isset($_POST["fecha"]) && !empty($_POST["fecha"]) ){

        $cURLConnection = curl_init();

        curl_setopt($cURLConnection, CURLOPT_URL, 'https://api.nasa.gov/planetary/apod?date='.$_POST["fecha"].'&api_key=DEMO_KEY');
        curl_setopt($cURLConnection, CURLOPT_RETURNTRANSFER, true);

        $phoneList = curl_exec($cURLConnection);
        curl_close($cURLConnection);

        $jsonArrayResponse = json_decode($phoneList);

        echo "<h4>".$jsonArrayResponse->title."</h4>";
        echo "<p>".$jsonArrayResponse->explanation."</p>";

        $link = $jsonArrayResponse->url;

        echo "<img src='".$link."'  width='500' height='600'>";
                
       }else{
           echo '<script>alert("Asegurate de ingresar todos los datos");</script>';
           printFruits();
       }

?>