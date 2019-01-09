function pet(animal) {
    console.log(`I have a ${animal} for a pet`);
}

pet("dog");


function name(first,Last){
    console.log(`${first}  ${Last}`)

}
name( "Connor" ,"Bartlett")



function calcTax(bill) {
    let total = bill * 1.07;
    return total;
}

var dinner = 150;
var myTotal = calcTax(dinner)
console.log(myTotal)