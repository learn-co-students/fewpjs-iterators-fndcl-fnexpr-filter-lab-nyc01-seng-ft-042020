// Code your solution here
// function findMatching(drivers, driver){
//     return drivers.filter(function(item){
//         item.toLowerCase() === driver.toLowerCase()
//     })
// };

function findMatching(drivers, driver){
    return drivers.filter(item => 
        item.toLowerCase() === driver.toLowerCase()
    )
};

function fuzzyMatch(drivers, letter){
    return drivers.filter(info =>
        info.toLowerCase().indexOf(letter.toLowerCase()) === 0
    )
}

function matchName(drivers, name){
    return drivers.filter(match =>
        match.name === name
    )
}