const fibonacci = function(n) {
    let fib = [0,1]

    if (n == 0){
        return 0
    } else if (n == 1){
        return 1
    } else if (n < 0 ){
        return 'OOPS';
    } else {
        for (let i = 2; i <= n; i++){
            fib.push(fib[fib.length-2] + fib[fib.length-1])
        }
    }

    return fib[fib.length-1]
};

// Do not edit below this line
module.exports = fibonacci;
