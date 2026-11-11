const numeros = [4, 8, 15, 16, 23, 42];

function quantsMesGrans (numeros) {
    if (numeros > quantsMesGrans){
        numeros++
    }
    return numeros
}

console.log(quantsMesGrans(numeros, 10));
console.log(quantsMesGrans(numeros, 50));
console.log(quantsMesGrans(numeros, 0));