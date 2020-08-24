function test_str() { 
    var res; 
    var str = document.getElementById("Password").value; 
    var rep = document.getElementById("p2").value; 

    if (str == rep) 
        alert("contraseña correcta"); 
    else 
        alert("contraseña incorrecta");

} 