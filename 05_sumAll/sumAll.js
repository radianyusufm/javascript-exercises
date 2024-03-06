const sumAll = function(a, b) {
    
    if (typeof(a) != 'number' || typeof(b) != 'number') {
        return 'ERROR'
    }

    if ( a < 0 || b < 0) {
        return 'ERROR'
    }

    let c = 0
    if (b < a){
        c = b
        b = a
        a = c

    }

    let total = 0
    for (let i = a; i <= b; i++){
        total += i
    } 
    return total
};

// Do not edit below this line
module.exports = sumAll;
