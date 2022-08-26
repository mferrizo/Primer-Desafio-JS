//Login para ir a la tabla de multiplicar
let ComienzaEn = true
let intentos = 0
do{
    let usuario = prompt("Ingrese su usuario para poder multiplicar, solo tiene  3 una chances")
    if(usuario.toLowerCase() == "admin"){
        console.log("Su respuesta es correcta, puede multiplicar")
        ComienzaEn = false
        setTimeout( function() { window.location.href = "multiplicar.html"; }, 2000 );
    }else{
        intentos=intentos + 1
        console.log("Su respuesa no es correcta, vuelva a intentar. Intento n° " + intentos)
        setTimeout( function() { window.location.href = "error.html"; }, 100 );     
    }
}while((ComienzaEn) && (intentos < 3))2
console.log (intentos)


