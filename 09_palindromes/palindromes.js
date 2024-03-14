const palindromes = function (s) {
    str = clearString(s)
    index_end = str.length-1
    looping = Math.floor(str.length / 2)
    for (let i = 0; i <= looping; i++){
        if (str[i] !== str[index_end]){
            return false
        } else {
            index_end -= 1
        }
    }
    return true
};


function clearString(str){
    temp = ''
    for(let i = 0; i < str.length; i ++){
        const char = str.charAt(i)
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z') || (char >= '0' && char <= '9')){
            temp += char
        }
    }

    return temp.toLowerCase()
}


// Do not edit below this line
module.exports = palindromes;
