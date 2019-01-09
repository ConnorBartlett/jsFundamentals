// Ternaries

let x = 6

if (x > 0){
console.log('yes')
} else {
console.log('no')
}

(x > 0) ? console.log('yes') : console.log('no')

//challenge 

let age = 999;
let young = 'Sorry, you\'re too young to do anything.';
let vote = 'Yay! You can vote!';
let drink = 'Yay! You can drink!';
let rent = 'Yay! You can rent a car!';

(age >= 25) ? console.log(rent, drink, vote) : (age >= 21) ? console.log(drink, vote) : (age >= 18) ? console.log(vote) : console.log(young) 