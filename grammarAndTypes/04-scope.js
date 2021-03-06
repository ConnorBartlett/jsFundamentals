/*
What is scope?

JS has both LOCAL and GLOBAL scope

Local = like Indianapolis
Global = like Earth

Can still be on the world when you are in Indy, but you are not necessarily in Indy when you are on the planet
*/

var x = 12

function scope() {
  var x = 33
  console.log(x);
}
scope()//33
console.log(x); //12
 

var x = 12

function scope() {
  x = 33 // HERE
  console.log(x);
}

scope() 
console.log(x);

function constTest() {
    const scope = 1;
    if (true) {
        const scope = 2;
        console.log(scope);
    }
    console.log(scope);

}

constTest();

/*constant is changed within the scope*/


/*
Why is this happening?

This is a question of BLOCK SCOPE.  

What is block scope?  A BLOCK, simply put, is the part between {} in a function or conditional; inside a block is local scope.

Var does NOT have block scope built in.  It is not locked into only operating within those curly brackets, 

and can therefore bleed into a parent scope.  

Notice, here, we are nested within two blocks: varTest() or letTest() and the if statement.  

If var is run, it can bleed from the if block into the varTest() block.  In effect, we cannot be too sure where var has access--elusive. 

Let DOES have block scope.  It is locked into which block it is located and cannot escape from those curly brackets.  This is particularly helpful when you want to run the variable only in that particular block without the danger of having it affect any other code.

Let's try with const:
*/

function constTest() {
    const scope = 1;
    if (true) {
      const scope = 2;
      console.log(scope); // 2
    }
    console.log(scope); // 1
  }
  
  constTest();
  
  