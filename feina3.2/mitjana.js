
function mitjana (llista) {
    let suma = 0
    let total = 0
    for (let i = 0; i < llista.length; i++) {
        suma=suma+llista[i]
        total = suma/llista.length
    }
    return total
}

console.log(mitjana([7, 4.5, 9, 6]));
console.log(mitjana([10]));
console.log(mitjana([]));



