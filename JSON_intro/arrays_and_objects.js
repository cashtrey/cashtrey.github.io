/* Lab: write the code requested by lines marked //TODO
You should NOT modify any of the code that's here already. Add the code requested.   */

console.log('For this lab, please write the code requested at the //TODO markers.')

/* a. Use this JavaScript object. This represents the current position of the International Space Station
at 1pm on January 12th 2018, fetched from http://api.open-notify.org/iss-now.json.
 */

let iss_location = {
    "timestamp": 1515784140,
    "iss_position":
        {
            "latitude": "49.2167",
            "longitude": "100.5363"
        },
    "message": "success"
}

let latitude = iss_location.iss_position.latitude // each level is another object, use periods to dive deeper and set latitude variable to correct string
console.log(latitude) // logs

let longitude = iss_location.iss_position.longitude // each level is another object, use periods to dive deeper and set longitude variable to correct string
console.log(longitude)

// TODO Extract the latitude value, and log it to the console.
// TODO Extract the longitude value, and log it to the console.




/* b. Use this JavaScript object of exchange rates relative to Euros.
The properties are currency symbols, the values are the exchange rates.
Data source: http://fixer.io/
* */


let rates = {
    "AUD": 1.5417,
    "BGN": 1.9558,
    "BRL": 3.8959,
    "CAD": 1.5194
}

rates.CHF = 1.1787 // new property for Swiss Francs

let aussieDollar = rates["AUD"] // creates variable for the rate to AUD
let hundredEurosToAUD = 100 * aussieDollar // does conversion for 100 euros
console.log(hundredEurosToAUD.toFixed(2)) // logs answer, rounds to 2 decimals


let ratesArray = Object.entries(rates) // turns object into nested arrays, easier to work with
// https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/

let currentHighestRate = ratesArray[0][1] // sets a starting counter for the highest rate. First array, second string in array (rate)
let currentHighestRateSymbol = ratesArray[0][0] // sets a corresponding counter so the symbol is easy to find

for (let x = 1; x < ratesArray.length; x++) { // for loop going the length of the array
    if (ratesArray[x][1] > currentHighestRate) { // if the rates is greater than the current highest, it is set as the new current highest (with corresponding symbol)
        currentHighestRate = ratesArray[x][1]
        currentHighestRateSymbol = ratesArray[x][0]
    }
}
console.log(currentHighestRateSymbol + ': ' + currentHighestRate) // logs

// TODO write code to add a new property for Swiss Francs. Symbol is CHF, value is 1.1787.
// TODO if you had 100 Euros, write code to get the exchange rate from the object, then calculate
//      the equivalent value in Australian Dollars (AUD)
// TODO write code to identify the currency symbol that has the highest exchange rate compared to Euros.
//    In other words, identify the property with the largest value. the answer is BRL (Brazilian Real) at 3.8959 BRL to 1 Euro.




/* c. Use this JavaScript array of objects of cat owners, and their cats. Source, moderncat.com
 */

let cats_and_owners = [
    { name: "Bill Clinton", cat: "Socks" },
    { name: "Gary Oldman", cat: "Soymilk" },
    { name: "Katy Perry", cat: "Kitty Purry" },
    { name: "Snoop Dogg", cat: "Miles Davis" }
]

let garysCat = cats_and_owners[1].cat // gary is at index 1, sets new variable equal to the name of his cat
console.log(garysCat)

cats_and_owners.push({name: "Taylor Swift", cat : "Meredith"}) // adds taylor and her cat to the array
console.log(cats_and_owners)

cats_and_owners.forEach(function(catAndOwner) { // loops through array
    console.log(catAndOwner.name + " owned cat " + catAndOwner.cat) // prints out each owner and cat. Didn't see the need to do a format string
})

// TODO print Gary Oldman's cat's name
// TODO Taylor Swift's cat is called 'Meredith'. Write code to add this data to the array.
// TODO write a loop to print each cat owner, and their cat's name, one per line. Use the forEach style.
//   Each line should have a message like "Snoop Dogg's cat is called Miles Davis"



/* d. Use the following JSON object, describing the Nobel Prize winners in 2017.
Source http://api.nobelprize.org/v1/prize.json?year=2017
* */

// TODO print the full name of the Literature Nobel laureate.
// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.
// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).
// TODO write code to print the total number of prize categories
// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.




let nobel_prize_winners_2017 = {
    "prizes":[
        {
            "year":"2017",
            "category":"physics",
            "laureates":[
                {
                    "id":"941",
                    "firstname":"Rainer",
                    "surname":"Weiss",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"2"
                },
                {
                    "id":"942",
                    "firstname":"Barry C.",
                    "surname":"Barish",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                },
                {
                    "id":"943",
                    "firstname":"Kip S.",
                    "surname":"Thorne",
                    "motivation":"\"for decisive contributions to the LIGO detector and the observation of gravitational waves\"",
                    "share":"4"
                }
            ]
        },
        {
            "year":"2017",
            "category":"chemistry",
            "laureates":[
                {
                    "id":"944",
                    "firstname":"Jacques",
                    "surname":"Dubochet",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"945",
                    "firstname":"Joachim",
                    "surname":"Frank",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                },
                {
                    "id":"946",
                    "firstname":"Richard",
                    "surname":"Henderson",
                    "motivation":"\"for developing cryo-electron microscopy for the high-resolution structure determination of biomolecules in solution\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"medicine",
            "laureates":[
                {
                    "id":"938",
                    "firstname":"Jeffrey C.",
                    "surname":"Hall",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"939",
                    "firstname":"Michael",
                    "surname":"Rosbash",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                },
                {
                    "id":"940",
                    "firstname":"Michael W.",
                    "surname":"Young",
                    "motivation":"\"for their discoveries of molecular mechanisms controlling the circadian rhythm\"",
                    "share":"3"
                }
            ]
        },
        {
            "year":"2017",
            "category":"literature",
            "laureates":[
                {
                    "id":"947",
                    "firstname":"Kazuo",
                    "surname":"Ishiguro",
                    "motivation":"\"who, in novels of great emotional force, has uncovered the abyss beneath our illusory sense of connection with the world\"",
                    "share":"1"
                }
            ]
        },
        {
            "year":"2017",
            "category":"peace",
            "laureates":[
                {
                    "id":"948",
                    "firstname":"International Campaign to Abolish Nuclear Weapons (ICAN)",
                    "motivation":"\"for its work to draw attention to the catastrophic humanitarian consequences of any use of nuclear weapons and for its ground-breaking efforts to achieve a treaty-based prohibition of such weapons\"",
                    "share":"1",
                    "surname":""
                }
            ]
        },
        {
            "year":"2017",
            "category":"economics",
            "laureates":[
                {
                    "id":"949",
                    "firstname":"Richard H.",
                    "surname":"Thaler",
                    "motivation":"\"for his contributions to behavioural economics\"",
                    "share":"1"
                }
            ]
        }
    ]
}

// TODO print the full name of the Literature Nobel laureate.

let literatureFullWinnerName = nobel_prize_winners_2017.prizes[3].laureates[0].firstname + ' ' + nobel_prize_winners_2017.prizes[3].laureates[0].surname
// sets variable equal to the correct first name and surname, added together, that were skillfully extracted from the JSON object
console.log(literatureFullWinnerName)

// TODO print the ids of each of the Physics Nobel laureates. Your code should still work without modification if a laureate was added, or removed.

let physicsLaureates = nobel_prize_winners_2017.prizes[0].laureates // sets variable equal to all the laureates
physicsLaureates.forEach(function(laureate) { // for each winner, their id is logged
    console.log(laureate.id)
})

// TODO write code to print the names of all of the prize categories (So your output would start physics, chemistry, medicine... ).

let prizesCategories = nobel_prize_winners_2017.prizes // set variable equal to array of prizes
prizesCategories.forEach(function(category) {
    console.log(category.category) // not sure if I was supposed to join these together, but I like this way and I think it achieves what you are asking for
})

// TODO write code to print the total number of prize categories

let categoryCounter = 0 // counter for prizes
prizesCategories.forEach(function(category) { // same loop as above
    categoryCounter++ // increases counter for each category
})
console.log(categoryCounter)

// TODO write code to count the total number of laureates from 2017.
//   have a good look at how the JSON is structured, and think about what loop(s) you'll need to write.

let laureateCounter = 0 // new counter
let currentLaureates = prizesCategories[0].laureates // creates variable, equal to the first laureate
prizesCategories.forEach(function(category) { // loops through each category
    currentLaureates = category.laureates // sets currentLaureates variable to the current laureates
    currentLaureates.forEach(function(laureate) { // loops through laureates
        laureateCounter++ // counter is increased with each laureate
    })
})
console.log(laureateCounter)