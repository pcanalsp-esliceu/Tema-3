const compra = ['pa', 'llet', 'ous'];

function conte (compra,igual) {
    for(let i = 0; i < compra.length; i++) {
        if (compra[i] === igual)
            return true
    }
    return false
}

console.log(conte(compra, 'llet'));
console.log(conte(compra, 'cafè'));
console.log(conte([], 'pa'));