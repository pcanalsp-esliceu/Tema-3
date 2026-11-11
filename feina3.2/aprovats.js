const notes = [7, 3.5, 9, 4, 5];

function aprovats (notes){
    const bones =[]
    for (const n of notes){
        if ( n >= 5){
            bones.push(n)
        }
    }
    return bones
}


console.log(aprovats(notes));
console.log(notes);
console.log(aprovats([1, 2]));