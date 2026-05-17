const selectDiasProduccion =document.getElementById("id-select-dias")//variable referenciada no va a cambiar
const btnCargarProduccion =document.getElementById("id-btn-cargar-produccion")
const btnPresentar =document.getElementById("id-btn-presentar-produccion")
const txtPresentarProduccion = document.getElementById("id-listado-produccion")
const btnTotalProduccion = document.getElementById("id-btn-total-produccion")
const txtTotalProduccion = document.getElementById("id-txt-total-produccion")
const btnMayorProduccion = document.getElementById("id-btn-mayor-produccion")
const txtMayorProduccion = document.getElementById("id-txt-mayor-produccion")
const btnMenorProduccion = document.getElementById("id-btn-menor-produccion")
const txtMenorProduccion = document.getElementById("id-txt-menor-produccion")
const btnPromedioSemanal = document.getElementById("id-btn-promedio-semanal")
const txtPromedioSemanal = document.getElementById("id-txt-promedio-semanal")
const btnMayorPromedio = document.getElementById("id-btn-mayor-promedio")
const txtMayorPromedio = document.getElementById("id-txt-mayor-promedio")
const btnMenorPromedio = document.getElementById("id-btn-menor-promedio")
const txtMenorPromedio = document.getElementById("id-txt-menor-promedio")
const btnValoresRepetidos = document.getElementById("id-btn-valores-repetidos")
const txtValoresRepetidos = document.getElementById("id-txt-valores-repetidos")

let vectorProduccion = []
const diasSemana = ["lunes","Martes","Miercoles", "Jueves","Viernes","Sabado","Domingo"]//2do vector

btnCargarProduccion.addEventListener("click" , function (e){
    const dimension = selectDiasProduccion.value //.value toma el valor del elemento
    vectorProduccion = []
    cargarProduccion(dimension) //llamar a la funcion
    console.log(vectorProduccion)
})

btnPresentar.addEventListener("click" , function (e){
    txtPresentarProduccion.value = vectorProduccion.join(" , ")
})

btnTotalProduccion.addEventListener("click", function(e){
    const total = produccionTotal()
    txtTotalProduccion.value = total

})

btnMayorProduccion.addEventListener("click" , function (e){
    const indice = mayorProduccion()
    const mayor = vectorProduccion[indice]
    const dia = diasSemana[indice]

    txtMayorProduccion.value = "Dia: "+ dia +" valor: " + mayor
})

function cargarProduccion(dimension){
    for (let i=0; i < dimension; i++){ //La variable let va incrementar
        const numAleatorio = Math.ceil(Math.random() *1000)
        vectorProduccion[i] =numAleatorio
    }

}

btnMenorProduccion.addEventListener("click", function(e) {
    const indiceMenor = menorProduccion()
    const menor = vectorProduccion[indiceMenor]
    const dia = diasSemana[indiceMenor]

    txtMenorProduccion.value = "Dia: "+ dia + " valor:" + menor
})

btnPromedioSemanal.addEventListener("click", function(e){
    const promedio = promedioSemanal()
    txtPromedioSemanal.value = promedio.toFixed(2)

})

btnMayorPromedio.addEventListener("click", function(e){
    const cantidad = ProduccionMayorPromedio()
    txtMayorPromedio.value = "Días superiores al promedio: " + cantidad
})

btnMenorPromedio.addEventListener("click", function(e){
    const cantidadCritica = produccionCritica()
    txtMenorPromedio.value = "Días con producción crítica: " + cantidadCritica
})

btnValoresRepetidos.addEventListener("click", function(e){
    const resultado = ValoresRepetidos()
    txtValoresRepetidos.value = resultado
})
//Ejercicio 1

//1. Calcular la producción total semanal

function produccionTotal(){
    let VectorTotalProduccion = 0

    for (let i=0 ; i < vectorProduccion.length; i++ ){
    VectorTotalProduccion = VectorTotalProduccion + vectorProduccion[i]
   }
   return VectorTotalProduccion
}

//Actividad 2
function mayorProduccion() {
    let mayor = 0;
    let index = 0

    for (let i=0; i< vectorProduccion.length; i++ ){
        const produccion = vectorProduccion[i]
        if (produccion > mayor){
            mayor = produccion
            index = i
        }
    }
    return index
}

//Ejercicio 3
function menorProduccion() {
    let menor = vectorProduccion[0]
    let indexMenor = 0

    for (let i=0; i< vectorProduccion.length; i++ ){
        const produccionMenor = vectorProduccion[i]
        if (produccionMenor < menor){
            menor = produccionMenor
            indexMenor = i
        }
    }
    return indexMenor
}

//Ejercicio 4

function promedioSemanal(){
    let total = 0

    for(let i = 0; i < vectorProduccion.length; i++){
        total = total + vectorProduccion[i]
    }
    const promedio = total / vectorProduccion.length
    return promedio
}

//Ejercicio 5

function ProduccionMayorPromedio(){
    const promedio = promedioSemanal()
    let contador = 0

    for(let i = 0; i < vectorProduccion.length; i++){
        const produccion = vectorProduccion[i]
        if(produccion > promedio){
            contador++
        }
    }
    return contador
}

//Ejercicio 6
function produccionCritica(){
    let contador = 0

    for(let i = 0; i < vectorProduccion.length; i++){
        const produccion = vectorProduccion[i]
        if(produccion < 100){
            contador++
        }
    }
    return contador
}

//Ejercicio 7
function ValoresRepetidos(){
    for(let i = 0; i < vectorProduccion.length; i++){
        for(let index2 = i + 1; index2 < vectorProduccion.length; index2++){
            if(vectorProduccion[i] == vectorProduccion[index2]){
                return "Existen valores repetidos"
            }
        }
    }
    return "No existen valores repetidos"
}