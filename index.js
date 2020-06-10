// Code your solution here

function findMatching(drivers, string) {
    const regexp = new RegExp(string, 'i')
    // return drivers.filter(driver => regexp.test(driver))
    return drivers.filter(driver => driver.match(regexp))
}

function fuzzyMatch(drivers, string){
    const x = 0
    const y = 2

    return drivers.filter(driver => driver.slice(x, y) === string.slice(x, y))

}

function matchName(drivers, string) {
    return drivers.filter(driver => driver.name === string)
}

findMatching()
fuzzyMatch()