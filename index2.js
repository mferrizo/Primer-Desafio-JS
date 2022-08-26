//Tabla de multiplicar Con For, Alert y  Console

let tablasMultiplicar = parseInt(prompt("Ingrese la Tabla de Multiplicar que desea  saber"))
let hastaDonde = parseInt(prompt("Ingrese hasta donde quiere multiplicar"))

for(let lasTablas = 1; lasTablas <= hastaDonde;lasTablas++){
    let resultado = tablasMultiplicar * lasTablas
    alert(`${tablasMultiplicar} x ${lasTablas} = ${resultado}`)
    console.log (`${tablasMultiplicar} x ${lasTablas} = ${resultado} --- Aprende Las Tablas`)  
}

setTimeout( function() { window.location.href = "index.html"; }, 2000 );