let randomCountryElement = document.querySelector('#random-country')
let userAnswerElement = document.querySelector('#user-answer')
let submitButton = document.querySelector('#submit-answer')
let resultTextElement = document.querySelector('#result')

// TODO finish the script to challenge the user about their knowledge of capital cities.
// An array country names and two-letter country codes is provided in the countries.js file. 
// Your browser treats all JavaScript files included with script elements as one big file,
// organized in the order of the script tags. So the countriesAndCodes array from countries.js
// is available to this script.

// console.log(countriesAndCodes)  // You don't need to log countriesAndCodes - just proving it is available


// TODO when the page loads, select an element at random from the countriesAndCodes array

//https://www.w3schools.com/js/js_random.asp

let url = '' // initiates variable

let randomCountryName = '' // initiates vairable

function random() { // turned into function for reusability
    let randomIndex = Math.floor(Math.random() * 209); // found this at the link above. 209 is the number of different countries in countriesAndCodes

    randomCountryName = countriesAndCodes[randomIndex].name // name of the country at the random index in countriesAndCodes

    randomCountryElement.innerHTML = randomCountryName // displays the random country

    let randomCountryCode = countriesAndCodes[randomIndex]['alpha-2'] // sets variable for country code from json

    url = `https://api.worldbank.org/v2/country/${randomCountryCode}?format=json` // uses format string to change url variable to be for the selected random country
}

random() // runs the random function

// TODO display the country's name in the randomCountryElement


// TODO add a click event handler to the submitButton.  When the user clicks the button,
//  * read the text from the userAnswerElement 
//  * Use fetch() to make a call to the World Bank API with the two-letter country code (from countriesAndCodes, example 'CN' or 'AF')
//  * Verify no errors were encountered in the API call. If an error occurs, display an alert message. 
//  * If the API call was successful, extract the capital city from the World Bank API response.
//  * Compare the actual capital city to the user's answer. 
//      You can decide how correct you require the user to be. At the minimum, the user's answer should be the same
//      as the World Bank data - make the comparison case insensitive.
//      If you want to be more flexible, include and use a string similarity library such as https://github.com/hiddentao/fast-levenshtein 
//  * Finally, display an appropriate message in the resultTextElement to tell the user if they are right or wrong. 
//      For example 'Correct! The capital of Germany is Berlin' or 'Wrong - the capital of Germany is not G, it is Berlin'

submitButton.addEventListener('click', function() { // when button is clicked
    let answer = userAnswerElement.value // new variable for the value of the user input
    fetch(url).then((response) => { // fetches from url random provided
        return response.json() // turns response into json
    })
        .then((info) => {
            let capital = info[1][0].capitalCity // creates variable for the name of the capital
            let lowerCaseCapital = capital.toLowerCase() // new variable set to all lower case version to make comparison simpler
            if (lowerCaseCapital === answer.toLowerCase()) { // if user input is equal (case ignored)
                resultTextElement.innerHTML = `Correct! The capital of ${randomCountryName} is ${capital}!` // correct message is displayed
            }
            else {
                resultTextElement.innerHTML = `Wrong - the capital of ${randomCountryName} is ${capital}.` // if wrong, wrong message displayed
            }
        })

        .catch((err) => { // catches errors
            console.log(err) // logs error- very helpful for troubleshooting
            alert('Error- something went wrong') // provides alert for user
        })
})


// TODO finally, connect the play again button. Clear the user's answer, select a new random country, 
// display the country's name, handle the user's guess. If you didn't use functions in the code you've 
// already written, you should refactor your code to use functions to avoid writing very similar code twice.

let playAgainButton = document.querySelector('#play-again') // new variable set to the play again button

playAgainButton.addEventListener('click', function() { // when new button is clicked
    userAnswerElement.value = '' // clears input
    random() // runs random
    resultTextElement.innerHTML = 'Result will show here' // resets result message
})
