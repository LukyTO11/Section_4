/* lesson 1 */

// let person = {
//     name: "Luky",
//     age: 20,
//     country: "France"
// }

// function logData() {
//     console.log(person.name + " is " + person.age + " years old and lives in " + person.country)
// }

// logData()


/* lesson 2 */

// let age = 70

// if (age < 6) {
//     console.log("free")
// } else if (age < 18) {
//     console.log("child discount")
// } else if (age < 27) {
//     console.log("student discount")
// } else if (age < 67) {
//     console.log("full price")
// } else {
//     console.log("senior citizen discount")
// }


/* lesson 3 */

// console.log("The 5 largest countries in the world:")
// let largeCountries = ["China", "India", "USA", "Indonesia", "Pakistan"]
// for (let i = 0; i < largeCountries.length; i++) {
//     console.log("- " + largeCountries[i])
// }


/* lesson 4 */

// let largeCountries = ["Tuvalu", "India", "USA", "Indonesia", "Monaco"]

// largeCountries.pop()
// largeCountries.push("Pakistan")
// largeCountries.shift()
// largeCountries.unshift("China")
// console.log(largeCountries)


/* lesson 5 */

// let dayOfMonth = 31
// let weekday = "Friday"

// if (dayOfMonth === 13 && weekday === "Friday"){
//     console.log("😱")
// }


/* lesson 6 */

// let hands = ["rock", "paper", "scissor"]

// function getHand() {
//     let randomIndex = Math.floor(Math.random() * 3) 
//     return hands[randomIndex] 
// }
// console.log( getHand() )


/* lesson 7 */

let fruit = ["🍎", "🍊", "🍎", "🍎", "🍊"]
let appleShelf = document.getElementById("apple-shelf")
let orangeShelf = document.getElementById("orange-shelf")

function sortFruit() {
    for (let i = 0; i < fruit.length; i++) {
        if (fruit[i] === "🍎") {
            appleShelf.textContent += "🍎"
        } else if (fruit[i] === "🍊") {
            orangeShelf.textContent += "🍊"
        }
    }
}

sortFruit()
