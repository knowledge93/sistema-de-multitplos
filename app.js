//Escribe un programa que calcule la suma de los números enteros del 1 al 1000 que son múltiplos de 3 o 5. javascript

//ese 3 o 5 puede varia ya que sera ingresador por un input

//OBTENER NUESTRAS ID DE CADA INPUT Y TEXTAREA Y BOTONES
let inputEntrada = document.getElementById("numEntrada");
let textSalidaNumeros = document.getElementById("resultadoNum");
let resultado = document.getElementById("resultadoFinal");

let btnResetear = document.getElementById("resetear");
let btnGenerar = document.getElementById("generar");

//FUNCIONES
function limpiarCampos() {
  inputEntrada.value = "";
  textSalidaNumeros.value = "";
  resultado.value = "";
  inputEntrada.focus();
}

function sumaMultiplosCadena(numEntrada) {
    let arreglo = numEntrada.split(",");
    let cadena = "";
  
    for (let i = 1; i <= 1000; i++) {
      let esMultiplo = false;
      for (let j = 0; j <arreglo.length; j++) {
          if (i % arreglo[j] === 0) {
            esMultiplo = true;
            break;
          }
        }
        if (esMultiplo) {
          cadena += i+", ";
        }
    }

    let res=cadena.substring(0,cadena.length-2)

    return res;
  }

function sumaMultiplosResultado(numEntrada) {
  let arreglo = numEntrada.split(",");
  let suma = 0;

  for (let i = 1; i <= 1000; i++) {
    let esMultiplo = false;
    for (let j = 0; j <arreglo.length; j++) {
        if (i % arreglo[j] === 0) {
          esMultiplo = true;
          break;
        }
      }
      if (esMultiplo) {
        suma += i;
      }
  }
  return suma;
}

//EVENTOS
window.addEventListener("load",()=>{
    inputEntrada.focus()
})

btnResetear.addEventListener("click", () => {
  limpiarCampos();
});

btnGenerar.addEventListener("click", () => {
  textSalidaNumeros.value = sumaMultiplosCadena(inputEntrada.value);
  resultado.value = sumaMultiplosResultado(inputEntrada.value);
});

document.addEventListener("keyup",(e)=>{
    if(e.key==="Enter"){
        textSalidaNumeros.value = sumaMultiplosCadena(inputEntrada.value)
        resultado.value = sumaMultiplosResultado(inputEntrada.value)
    }
    if(e.key==="Escape"){
        limpiarCampos()
    }
})
