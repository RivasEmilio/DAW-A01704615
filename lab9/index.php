
<?php
include("_header.html");
function arPromedio(array $coso){

    $total = 0;

    foreach ($coso as $numero) {
      
        $total+=$numero;

    }
    return $total/count($coso);

}

function mediana(array $coso2){
    
   sort($coso2);
   $largo = floor(count($coso2)/2);

   if ($largo%2>0) {
       $p1= $largo;
       $p2= $largo + 1;

       echo "mediana : ".$coso2[$p1]." - ".$coso2[$p2];
   }else
        echo "mediana : ".$largo;
}


function acomodo(array $coso3){

    echo "<div class=center-align>";
    echo "<ul class=collection col s4>";
    echo "Array: ". implode(', ', $coso3) . "<br>";
    echo "<li class=collection-item>";
    echo "Promedio: ".arPromedio($coso3);
    echo "</li><li class=collection-item>";
    sort($coso3);
    echo implode(', ', $coso3) . "<br>";
    echo "</li><li class=collection-item>";
    rsort($coso3);
    echo implode(', ', $coso3) . "<br>";
    echo "</li></ul>";
    echo "</div><br><br>";
}

function tableG($coso4){

    echo "<table>";
    for ($i=0; $i <= $coso4; $i++) { 
        echo "<tr class=center-align>";
        echo "<td>". $i ."</td>";
        echo "<td>". $i**2 ."</td>";
        echo "<td>". $i**3 ."</td>";
        echo "</tr>"; 
    }
    echo "</table>";
}

function invertirNum($coso5){
    echo "<h3 class=center-align >Tu numero es: ".$coso5."</h3>";
    $inver = strrev($coso5);
    echo "<h3 class=center-align>Invertido es: ". $inver."</h3>";
}



?>


<h3 class="center-align"> Array = [7,9,12,6,5] <br><br> Promedio =
<?php

echo arPromedio([7,9,12,6,5]);

?>
</h3><br><br>

<h3 class="center-align"> Array = [13,9,1,62,15,3,8]<br><br>
<?php

    mediana([13,9,1,62,15,3,8]);

?>
</h3><br><br>
 
<?php
    acomodo([11,7,6,2,8,9,13,55,85,1,4]);
    $max = rand(1,20);
    tableG( $max );
    $max = rand(1,99999);
    invertirNum($max);
?>




<?php include("_footer.html"); ?>

