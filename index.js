// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver["revenue"] > revenue
    })
}

function driverNamesWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver["revenue"] > revenue
    }).map(function(driver){
        return driver["name"]
    })
}

function exactMatch(drivers, attributes){
    return drivers.filter(driver => driver[Object.keys(attributes)[0]] === Object.values(attributes)[0])
}

function exactMatchToList(drivers, attributes){
    return drivers.filter(driver => driver[Object.keys(attributes)[0]] === Object.values(attributes)[0]).map(driver => driver["name"])
}