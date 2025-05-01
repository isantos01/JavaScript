// 1. Crea una variable para cada operación aritmética
let addition = 10 + 5
let substract = 5 - 5
let multiply = 5 * 6
let power = 2 ** 4
let divide = 4 / 2
let module = 4 % 2
module++
console.log(module)
divide--
console.log(divide)

// 2. Crea una variable para cada tipo de operación de asignación,
//    que haga uso de las variables utilizadas para las operaciones aritméticas

addition += 2
console.log(addition)
multiply -= 5
console.log(multiply)

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(addition < multiply)
console.log(module == divide)
console.log(power > substract)
let number1 = 1
console.log(module === number1)
console.log(module != power)

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(addition > multiply)
console.log(module == substract)
console.log(power < substract)
let number2 = "1"
console.log(module === number2)
console.log(module != divide)

// 5. Utiliza el operador lógico and

// 6. Utiliza el operador lógico or

// 7. Combina ambos operadores lógicos

// 8. Añade alguna negación

// 9. Utiliza el operador ternario

// 10. Combina operadores aritméticos, de comparáción y lógicas