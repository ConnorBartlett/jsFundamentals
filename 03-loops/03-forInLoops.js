var student = { name: "Harry", awesome: true, degree: "Javascript", week: 1};

for(item in student){
    console.log(item);
    console.log(student[item])
}

var pieArray = ['cherry', 'apple', 'chocolate peanut butter', 'chicken pot'];
for(pie in pieArray){
    console.log(pie)
}

var studentName = 'hArry';
var capName;
for (var n in studentName){
    if (n == 0) {
        capName = studentName[n].toUpperCase();
    } else {
        capName += studentName[n].toLowerCase();
    }
}
console.log(capName)