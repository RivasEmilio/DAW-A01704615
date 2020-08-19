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
}

function dosNumeros(){

    const num1 = Math.floor(Math.random() * 100); 

    const num2 = Math.floor(Math.random() * 100);

    let resultado = num1+num2;

    let startTime = new Date();

    let entrada;

    while (isNaN(entrada)) {
        entrada = prompt("Ingresa caul es el resultado de: " + num1 +" + " + num2,"0");

        if(entrada == resultado){
            alert("Es correcto!");
            continue;
        }
        else{
            alert("ese no es el resultado correcto");
        }
    }

    let final = (new Date()-startTime)/1000;
    alert("Te tardaste: " + final +" segundos en responder");
}

function contador(){

    
}


