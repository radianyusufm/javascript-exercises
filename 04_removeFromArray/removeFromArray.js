
const removeFromArray = function(arr_n, ...n) {
    
    let new_arr = arr_n.filter((element) => {
        // console.log(!n.includes(element))
        return !n.includes(element)
    })
    
    return new_arr
};

// Do not edit below this line
module.exports = removeFromArray;
