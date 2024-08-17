let array = []
function fibs (num) {
    let a = 0;
    let b = 1;
    array.push(a,b)
    if (num == 0) {
        array.pop()
    }
    for (let i = 1; i < num; i++) {
        let c;
        c = a + b;
        a = b 
        b = c
        array.push(b)
    }
}

fibs(19)
console.log(array)