// alternate method
//for(f in food){
//    console.log(food[f])
//}


let food = ['Pecan pie', 'Shrimp', 'Quesadilla', 'Cheese cake', 'Hotdog'];


for(f of food){
    console.log(f)
}

//push adds an object to the end of an array
food.push('Pizza');


//splice can replace specific places in arrays
//first number refers to position, second number refers to how many things we want to cut
food.splice(1,1, 'Bananas');  

console.log(food)

//removes the last index in the array
food.pop();
food.toString()


let test = {
    func: function() {
        console.log('test')
    }
}
test.func()

