const findTheOldest = function(people) {
       
    let max = 0

    person_index = 0 
    people.forEach((element, index) => {
        people_age = age(element.yearOfBirth, element.yearOfDeath)
        if ( people_age > max){
            person_index = index
            max = people_age
        }
    })

    return people[person_index]
};


function age(birth, death=2024){
    return death - birth
}


// Do not edit below this line
module.exports = findTheOldest;
