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

    const numAr = [];

    let negative=0, positive=0, zero=0;

    for (let index = 0; index < 20; index++) {

        const num1 = Math.floor(Math.random() * 100); 

        const num2 = Math.floor(Math.random() * 100);

        numAr[index]= num1-num2;
 
        if(numAr[index]>0){
            negative++;
        }

        if(numAr[index]==0){
            zero++;
        }

        if(numAr[index]<0){
            positive++;
        }   
    }

    alert("Los numeros son: " + numAr +"\n\nHay "+negative+" numero negativos, "+positive+" numeros positivos y "+zero+" numeros son iguales a cero");
    
}

function promedios(){

    const matrix = [];
    const length = 4;

    for (let i = 0; i < length; i++) {

        matrix[i] = new Array(length);

        for(let j = 0; j<length; j++){

            matrix[i][j]= Math.floor(Math.random() * 11);
        }
    }

    let table = "";

    table = table.concat("<table>");

    let promedio, proFin =0;

    for (let i = 0; i < length; i++) {
        promedio=0;
        table = table.concat("<tr>");
        for (let j = 0; j <length; j++) {
            promedio += matrix[i][j];
            table = table.concat("<td>"+matrix[i][j]+"<td>");
        }

        table = table.concat("<td>"+(promedio/length)+"<td>");
        table = table.concat("<tr>");
        proFin += promedio/length;
    }

   document.getElementById("p4").innerHTML =table;

   alert("el promedio de la tabla es "+proFin);

}

function inversion(){

    var numero = prompt("Ingresa un numero!","0");

    while(isNaN(numero)){
        numero = prompt("Asegurate que ingresaste un numero");
    }

    numero = numero + "";

    alert("Tu numero invertido es "+numero.split("").reverse("").join(""));

}

function porqueMeHacesEstoRicardo(){

    let BMI = 0;
    var numero = prompt("Ingresa tu estatura en centimetros!","0");

    while(isNaN(numero)){
        numero = prompt("Asegurate que ingresaste un numero");
    }

    var numero2 = prompt("Ingresa tu peso en kilos!","0");

    while(isNaN(numero2)){
        numero2 = prompt("Asegurate que ingresaste un numero");
    }

    numero = numero/100;
    var persona ={
        peso: numero2,
        estatura: numero
    };

    BMI = ((persona.peso)/(persona.estatura**2));

    console.log(persona);
    console.log(BMI);

    if (BMI<18.5) {
        alert("Estas bajo de peso con un BMI de: "+BMI);
    }
    if(BMI>18.5 && BMI<25){
        alert("Tu peso es normal! con un BMI de: "+BMI);
    }

    if(BMI>25 && BMI<30){
        alert("Tienes sobrepeso con un BMI de: "+BMI);
    }

    if(BMI>30 && BMI<40){
        alert("Eres OBESO con un BMI de: "+BMI);
    }

    if(BMI>40){
        alert("Eres MORBIDAMENTE OBESO con un BMI de: "+BMI);
    }
}

setInterval(function(){ alert("Paso 1 minuto"); }, 60000);

setTimeout(function(){ 

    var audio = new Audio('xue.mp3');
    audio.play();

 }, 30000);

 function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }
