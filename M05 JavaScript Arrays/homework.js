/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   const firstElement = array.shift()
   return firstElement
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   const lastElement = array.pop()
   return lastElement
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   const arrayLength = array.length
   return arrayLength
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   const newArr = array.map(num => ++num)
   return newArr
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const newArray = [...array]
   newArray.push(elemento)
   return newArray
   
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   const newArray = [...array]
   newArray.unshift(elemento);
   return newArray; 
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   const strCompleted = palabras.join(" ")
   return strCompleted
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   const isIncludes = array.includes(elemento)
   return isIncludes
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   
   /* 
   //Otra Solución

   let acumNum = 0
   for(let i = 0; i < arrayOfNums.length ; i++){
      acumNum += arrayOfNums[i]
   }   

   return acumNum
   */

   const sumResult = arrayOfNums.reduce((acum,num) => acum + num,0)
   return sumResult
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let acumNote = 0
   for( let i = 0 ; i < resultadosTest.length; i++){
      acumNote += resultadosTest[i]
   }
   const prom = acumNote / resultadosTest.length
   return prom
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   /* 
   //Otra solución:
   let numeroMayor = 0
    for(let i = 0; i < arrayOfNums.length ; i++){

        if(numeroMayor < arrayOfNums[i]){
            numeroMayor = arrayOfNums[i]   
        }
    }

    return numeroMayor
   */
   const sortedNum = arrayOfNums.sort((a,b)=>a-b)
   const largerNum = sortedNum.pop()
   return largerNum
   
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   /* 
   //Otra solución
  let product = arguments[0];
   for( let i = 1; i < arguments.length; i++){
      product *= arguments[i]
   }
   if(!product){
      product = 0
      return product
   }

   return product  
   */
   if(!arguments.length){
      return 0
   }

   const newArrArguments = [...arguments]
   const product = newArrArguments.reduce((acum,argument) => acum * argument,1)
   return product
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   /* 
   //Otra solución:
   const threshold = 18
   let countNumsAboveThreshold = 0
   for(let i = 0; i < array.length ; i++){
      if( array[i] > threshold){
         countNumsAboveThreshold++
      }
   }

   return countNumsAboveThreshold
   */
   const threshold = 18 
   const newArray = array.filter(num => num > threshold)
   const numberItems = newArray.length
   return numberItems
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana"
   }
   return "Es dia laboral"
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   /* 
   Otra solución
   const numeroString = numero.toString();
   return numeroString.startsWith('9');
   */
   const arrNumbers = String(num).split("")
   const firstItem = arrNumbers[0]
   if(firstItem === "9"){
      return true;
   }
   return false
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   const firstItem = array[0]
   const areSame = array.every(item => firstItem === item)
   return areSame
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   /* 
   //Otra solución
   const strNotFound = "No se encontraron los meses pedidos"
   const arrMonthFind = ["Enero","Marzo","Noviembre"]
   const arrMonthsFiltered = []

   for(let i = 0; i < array.length ; i++){
      const monthActual = array[i] 
      if(arrMonthFind.includes(monthActual)){
         arrMonthsFiltered.push(monthActual)
      }
   }

   for(let i  = 0; i < arrMonthFind.length ; i++){
      const monthActual = arrMonthFind[i] 
      if(!arrMonthsFiltered.includes(monthActual)){
         return strNotFound 
      }
   }

   return arrMonthsFiltered 
   */

   const strNotFound = "No se encontraron los meses pedidos"
   const arrMonthFind = ["Enero","Marzo","Noviembre"]
   
   const monthsFiltered = array.filter( month => arrMonthFind.includes(month))
   
   const areAllMonths = arrMonthFind.every(month => monthsFiltered.includes(month))

   if(!areAllMonths){
      return strNotFound
   }

   return monthsFiltered
}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   const numbers = [0,1,2,3,4,5,6,7,8,9,10]
   const productsResults = numbers.map(num => num * 6)
   return productsResults
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   /* 
   // Otra solución 
   const numbersGreater100 = []

   for(let i = 0; i < array.length ; i++){
      const numActual = array[i]
      if(numActual > 100 ){
         numbersGreater100.push(numActual)
      }
   }

   return numbersGreater100
   */
   const numbersGreater100 = array.filter( num => num > 100)
   return numbersGreater100
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   const arrNumbers = []
   const strInterruption = "Se interrumpió la ejecución"
   const topLimitIteration = 10 
   let suma = num 
   for( let i = 0 ; i < topLimitIteration ; i++){
      suma += 2
      arrNumbers.push(suma)

      if(arrNumbers[i] === i){
         break;
      }
   }

   if(arrNumbers.length !== 10){
      return strInterruption
   }
   
   return arrNumbers
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:

   const arrNumbers = []
   const topLimitIteration = 10
   let suma = num
   for(let i = 0 ; i < topLimitIteration ; i++){
      if(i === 5){
         continue
      }
      suma += 2
      arrNumbers.push(suma)

   }

   return arrNumbers
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
