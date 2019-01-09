function hi(){
    console.log('hi');
    return "hey";
}

hi; 
hi();
console.log(hi);
console.log(hi());

function list(){
    for (var x = 1; x <= 10; x ++)
    console.log(x)
}

list()


let arr = ["This", "is", "really", "cool?"];

function values(){
    for(values of arr){
        console.log(values)
    }
}

values()