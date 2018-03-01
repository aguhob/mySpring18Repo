///NOTES 2/26/18 -- addition to portfolio! Mult-Div-Add-Subtract    //console.log("Testing")
//
//function printHello() {
//    
//    console.log("hello");
//    

//Global scope -- explaining nesting functions. Var is global. Nothing else outside of the brackets can access the function.

//var test = 100;
//
//function someFunction() {
//    
//    console.log = "hello";
//    
//}

//return a function!

function add(no1, no2) {
    
    var sum = (no1 + no2);
    
    return(sum);  //include return
}

var sum = add(3, 3);  //call the function, store in a variable so you can console log it.
console.log(sum);

//nested functions!

function addManyTimes(num, times) {
    var total =0;
    
    for (var i=0; i < times; i==) {
         total = add(total, num);
    }
    
    return total;

}

console.log(addManyTimes(10,10));


// HOMEWORK. 3 example functions. Fx 1

function add(sum, no3) {
    
    var sum2 = (sum + no3);
    
    return(sum);  //include return
}

var sum = add(3, 3);  //call the function, store in a variable so you can console log it.
console.log(sum);



// HOMEWORK. 3 example functions. Fx 2
function add(sum, no3) {
    
    var sum = (no1 + no2);
    
    return(sum);  //include return
}

var sum = add(3, 3);  //call the function, store in a variable so you can console log it.
console.log(sum);

// HOMEWORK. 3 example functions. Fx 3
function add(no1, no2) {
    
    var sum = (no1 + no2);
    
    return(sum);  //include return
}

var sum = add(3, 3);  //call the function, store in a variable so you can console log it.
console.log(sum);
