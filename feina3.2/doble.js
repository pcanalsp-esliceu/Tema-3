

const doble = (n) => n*2

function dobleDeTots (llista){
    const llistadoble = []
    for (const n of llista){
        let n_doble=doble(n)
        llistadoble.push(n_doble)
    }
    return llistadoble
}



console.log(doble(21));
console.log(dobleDeTots([1, 2, 3]));
console.log(dobleDeTots([]));