

function test_str() { 
    var strongPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/;
    var str = document.getElementById("Password").value; 
    var rep = document.getElementById("p2").value; 
 

    if (strongPass.test(str)){
        validator(str,rep);
    }      
    else 
        alert("La contraseña requiere 1 minuscula, 1 mayuscula, 1 numero, un caracter y debe ser de 8 caracteres");

}

function validator(Password, passCheck) {

    if(Password === passCheck){
        alert("La contraseña es correcta!");
    }else
        alert("La contraseña es incorrecta");
    
}

let total=0, v1=0, v2=0, v3=0;

function carrito(p1, p2){

    switch (p1) {
        case 0:

            if (p2 == 1) {
                total+=80;
                v1+=1;
                document.getElementById('num0').innerHTML = v1;
            }else if (total>=0 && p2==0 && v1>0) {
                total-=80;
                v1-=1;
                document.getElementById('num0').innerHTML = v1;
            }
            
        break;

        case 1:

            if (p2 == 1) {
                total+=10;
                v2+=1;
                document.getElementById('num1').innerHTML = v2;
            }else if ( total>=0 && p2==0 && v2>0) {
                total-=10;
                v2-=1;
                document.getElementById('num1').innerHTML = v2;
            }

            
        break;

        case 2:
            if (p2 == 1) {
                total+=30000;
                v3+=1;
                document.getElementById('num2').innerHTML = v3;
            }else if ( total>=0 && p2==0 && v3>0) {
                total-=30000;
                v3-=1;
                document.getElementById('num2').innerHTML = v3;
            }
            
        break;
    }

    document.getElementById('tot').innerHTML = total;
    console.log(total);

}

function checkout() {

    alert("Tu total es $"+Math.floor(total*1.16)+" con iva\n"+v1+" fotos de patas\n"+v2+" barras de jabon Zote\n"+v3+" liquidos de rodilla");
    
}


function test(pregunta, respuesta) {

    switch (pregunta) {
        case 0:
            if (respuesta == 1) {
                
                alert("CORRECTO");
            }else
                alert("INCORRECTO");
    
        break;

        case 1:

            if (respuesta == 1) {
                
                alert("CORRECTO");
            }else
                alert("INCORRECTO");

        break;

        case 2:

            if (respuesta == 1) {
                
                alert("CORRECTO");
            }else
                alert("INCORRECTO");
            
        break;
    }
    
}

