
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

       echo "mediana : ".$p1." - ".$p2;
   }else
        echo "mediana : ".$largo;
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
</h3>

<?php include("_footer.html"); ?>

