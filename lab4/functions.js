function tabla(){

    var numero = prompt("Ingresa un numero!","0");

    while(isNaN(numero)){
        numero = prompt("Asegurate que es un numero");
    }

    let table = "";
    table = table.concat("<table>");


    for (let i = 1; i <= numero; i++) {

        table = table.concat("<tr>");
        table = table.concat("<td>"+i+"</td>");
        table = table.concat("<td>"+i**2+"</td>");
        table = table.concat("<td>"+i**3+"</td>");
        table = table.concat("</tr>"); 
    }

    table = table.concat("</table>");
    document.getElementById("p1").innerHTML = table; 
    alert(numero);

}