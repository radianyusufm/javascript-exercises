const getTheTitles = function(books) {
    temp = []
    books.forEach((element) => {
    temp.push(element.title)
    })

    return temp
};

// Do not edit below this line
module.exports = getTheTitles;
