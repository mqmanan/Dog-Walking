import { getWalkers } from "./database.js"
import { getCities } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cities = getCities()
const walkerCities = getWalkerCities()

export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const city of cities) {
        citiesHTML += `<li>${city.name}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

// This function needs the walker information, so define a parameter
// Define an empty array to store all of the assignment objects
// Iterate the array value of walkerCities
// Check if the primary key of the walker equals the foreign key on the assignment
// walker.id  (PK) === walkerCities.walkerId (FK)
// If it does, add the current object to the array of assignments
// After the loop is done, return the assignments array

export const filterWalkCitiesByWalker = (walker) => {
    let updatedWalkerCities = []

    for (const walkerCity of walkerCities) {
        if (walkerCity.walkerId === walker.id)
            updatedWalkerCities.push(walkerCity)
    } 
    return updatedWalkerCities
}



// Define a function that builds a string of city names; needs a paramter
// Define an empty string that will get appended with matching cities
// Iterate the array of parameter objects
// For each parameter, iterate the cities array to find the match
// Add the name of the matching city to the string of city names
// After the loop is done, return the string

export const assignedCityNames = (updatedWalkerCities) => {
    let cityNames = ""

    for (const updatedWalkerCity of updatedWalkerCities) {
        for (const city of cities) {
            if (city.id === updatedWalkerCity.cityId) {
                cityNames += ` -- ${city.name}`
            }
        }
    }
    return cityNames
}