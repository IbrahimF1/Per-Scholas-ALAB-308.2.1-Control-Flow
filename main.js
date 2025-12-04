// Part 1: Growing Pains

    // Your task is to create a program that advises a group of environmental scientists how to handle the
    // growth and spread of a unique plant species under their supervision. You must develop a growth
    // control system that will monitor and predict the plant growth, making decisions based on the available
    // space and potential growth.

    // Here is the information you have been given:
    // The area in which the plants are contained is circular, with a radius of 5 meters.
    // The formula for calculating the area of a circle is PI multiplied by the radius, squared:
    // const PI = 3.1415;
    // const area = PI * radius * radius;


console.log("Part 1: Growing Pains")

const gardenRadius = 5;



function areaOfGarden(radius) {
    const PI = 3.1415;
    return PI * radius * radius;
}

const gardenArea = areaOfGarden(gardenRadius);

console.log(`Area of Garden: ${gardenArea}`);

    // Each plant requires a minimum space of 0.8 square meters.
    // The area is starting with 20 plants.
    // The plants double in number every week.

    // Using this information, your objectives are to:
        // Predict the plant growth after a specific number of weeks.
        // Implement control flow to make decisions on whether the plants should be:
        // Pruned, to stop them from exceeding the capacity of the garden.
            // This condition should be met if the plant count after the given number of weeks is greater
            // than 80% of the maximum capacity of the garden.
        // Monitored, if they are growing at an acceptable rate.
            // This condition should be met if the plant count is between 50% and 80% of the maximum
            // capacity of the garden after the given number of weeks.
        // Planted, if there is room to plant more plants.
            // This condition should be met if the plant count after the given number of weeks is less
            // than 50% of the maximum capacity of the garden.

function totalPlantArea(week, startingPlants, singlePlantArea){
    return singlePlantArea*(startingPlants*(2**week))
}

function controlFlow(week, startingPlants, singlePlantArea, gardenArea) {
    let currPlantArea = totalPlantArea(week, startingPlants, singlePlantArea)

    if (currPlantArea > 0.8*gardenArea)
        return "Pruned"
    else if (currPlantArea <=  0.8*gardenArea && currPlantArea >= 0.5*gardenArea)
        return "Monitored"
    else if (currPlantArea)
        return "Planted"
}

const singlePlantArea = 0.8;
const startingPlants = 20;

// Within your submission, include the results for 1, 2, and 3 weeks of growth as inputs.

for (let i = 1; i <4; i++)
    console.log(`During week ${i} the plants should be ${controlFlow(i, startingPlants, singlePlantArea, gardenArea)}.`);



// Part 2: Thinking Bigger
    // The conservation area in which the garden is located has multiple other gardens. 
    // Using the logic you have already created, determine:
    // The amount of additional space that would be required if the scientists were to start with 100 plants, and did not prune them for 10 weeks.
    // If the space remained circular, what would be the radius of this expanded garden?

function getRadius(area) {
    const PI = 3.1415;
    return Math.sqrt(area/PI)
}

let numberOfPlants = 100;
let numberOfWeeks = 10;

console.log(`
Part 2:Thinking Bigger
If the scientist were to start with ${numberOfPlants} plants, and didn't prune them for ${numberOfWeeks} weeks, then the area of the space would be ${totalPlantArea(numberOfWeeks, numberOfPlants, singlePlantArea)} with a radius of ${getRadius(totalPlantArea(numberOfWeeks, numberOfPlants, singlePlantArea))}.`)


// Part 3: Errors in Judgement

// The scientists decided not to listen to your recommendations, and have instead started with 100 plants in the original 5-meter-radius garden.

// Use try and catch to wrap your work in an error-handling block. If the amount of space required to hold the originally provided number of plants exceeds the amount of space available, throw a new error and log an appropriate message.

try{
    if (totalPlantArea(numberOfWeeks, numberOfPlants, singlePlantArea) > gardenArea)
        throw "Error: Not enough space"
}
catch(error){
    console.log(error)
}
