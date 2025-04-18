// Code your solution here
function findMatching(drivers, nameToMatch) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase() === nameToMatch.toLowerCase();
    });
}


function fuzzyMatch(drivers, nameToMatch) {
    return drivers.filter(function(driver) {
        return driver.toLowerCase().startsWith(nameToMatch.toLowerCase());
    })
}

function matchName(drivers, nameToMatch) {
    return drivers.filter(function(driver) {
        return driver.name === nameToMatch;
    });
}
