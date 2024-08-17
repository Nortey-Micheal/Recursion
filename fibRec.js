let array = []

function fib (num) {
    let digit;
    if (num < 2) {
        digit = num;
        if ( (digit == 1 && (array.indexOf(digit)) != (array.lastIndexOf(digit)))) {

        } else if (digit == 0 && array.includes(digit)) {

        } else {
            array.push(digit)
        }
        // array.push(digit)
        return digit;
    } else {
        digit = fib(num - 1) + fib(num - 2)
        if (array.includes(digit)) {

        } else {
            array.push(digit)
        }
        return digit;
    }
}


console.log(fib(19))
console.log(array)