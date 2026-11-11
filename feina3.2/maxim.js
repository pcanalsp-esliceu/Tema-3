function maxim (llista){
    let maxim=llista[0]
    for (const n of llista){
        if(n>maxim){
            maxim=n
        }
    }
    return maxim
}

console.log(maxim([3, 9, 2]));
console.log(maxim([-5, -2, -8]));
console.log(maxim([7]));