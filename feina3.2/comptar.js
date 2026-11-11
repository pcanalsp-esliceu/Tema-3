const numeros = [4, 8, 15, 16, 23, 42];

function quantsMesGrans (numeros,limit) {
    let quants=0;
    for (const n of numeros){
        if (n > limit){
            quants++
        }
        
    }
    return quants
}

console.log(quantsMesGrans(numeros, 10));
console.log(quantsMesGrans(numeros, 50));
console.log(quantsMesGrans(numeros, 0));