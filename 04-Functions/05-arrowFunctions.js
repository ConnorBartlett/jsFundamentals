//nickname : FAT ARROW FUNCTIONS

function coffee() {
    console.log("Coffee is life!");
}

let coffee = () => {
    console.log("coffee is cool");
}

coffee();


var cats = (kitten, puppy) => {
    console.log(`I have ${kitten} cat(s) and ${puppy} dog(s)`);
}

cats(1, 35)

let fatArrows = (x) => console.log(x)

fatArrows("This is a funcation, nothing to see")



let score = "winner";

function upperCase(big) {
    return big.toUpperCase();
}

function lowerCase(small){
    return small.toLowerCase();
}


console.log(upperCase(lowerCase(score)))