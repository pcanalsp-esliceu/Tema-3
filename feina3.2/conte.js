const compra = ['pa', 'llet', 'ous'];

function conte (igual) {
   
    if (compra === igual){
        return true
    }else{
        return false
    }
}

console.log(conte(compra, 'llet'));
console.log(conte(compra, 'cafè'));
console.log(conte([], 'pa'));
