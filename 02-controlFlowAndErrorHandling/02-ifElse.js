// If Else Statement

let money = false

if(money) {
    console.log('Starbucks')
} else {
    console.log('Make coffee at home')
}

let weather = 75

if (weather < 70){
    console.log('Wear a jacket!')
} else {
    console.log('No jacket necessary')
}

let myName = 'Connor'

if (myName) {
    console.log('Hello, my name is ', myName)
} else {
    console.log('Hello, What is your name?')
}

let str = 'sebAstion'

if(str[0] === str[0].toUpperCase()) {
    let firstletter = str[0] + str.slice(1).toLowerCase()
console.log(firstletter)

} else {
let otherLetters = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
console.log(otherLetters)
}


//Else If Statement

let weather = 40

if(weather > 70){
    console.log('wear a t-shirt')
} else if (weather <= 70 && weather > 50) {
console.log('Wear a light jacket')
} else {
    console.log('Stay inside')
} 


//challenge

let age = 19

if(age <= 17) {
    console.log('Sorry, you\'re too young to do anything.')
} else if(age >= 18 && age <= 21){
    console.log('Yay! You can vote!')
} else if(age >= 21 && age < 24) {
    console.log('Yay! You can drink!')
} else {
    console.log('Yay! You can rent a car')
}


let age = 999
let young = 'Sorry, you\'re too young to do anything.'
let vote = 'Yay! You can vote!'
let drink = 'Yay! You can drink!'
let rent = 'Yay! You can rent a car!'

if (age >= 0 && age < 120){
if (age >= 25) {
    console.log(rent, drink, vote)
} else if (age >= 21){
    console.log(drink, vote)
} else if (age >= 18){
    console.log(vote)
} else {
    console.log(young)
}
} else{
    console.log('Please pick a real human age...dummy')
}

