///NOTES 2/26/18 -- addition to portfolio! Mult-Div-Add-Subtract
//console.log("Testing")

//function printHello() {
//    
//    console.log("hello");
//    
//}
//
//    printHello();
//won't work if you call var "1stname" or start with # or symbol!

function multiply() {

    var firstNum = document.getElementById("num1").value;
    var secNum = document.getElementById("num2").value;

    console.log(firstNum, secNum);
    
    var product = Number.parseInt(firstNum) * Number.parseInt(secNum);
    
    console.log(product);
    
    document.getElementById("submit").value = product;
    
}


//
//function divide() {
//    
//    var firstNum = document.getElementById("num1").value;
//    var secNum = document.getElementById("num2").value;
//
//    var quotient = Number.parseInt(firstNum) / Number.parseInt(secNum);
//
//    console.log(quotient);
//
//    document.getElementById("thing").value = quotient;
//
//}
//    
//
//function add() {
//    
//    var firstNum = document.getElementById("num1").value;
//    var secNum = document.getElementById("num2").value;
//    var sum = Number.parseInt(firstNum) + Number.parseInt(secNum);
//
//    console.log(sum);
//
//    document.getElementById("thing").value = sum;
//    
//}
//    
//
//function subtract() {
//    
//    var firstNum = document.getElementById("num1").value;
//    var secNum = document.getElementById("num2").value;
//
//    var difference = Number.parseInt(firstNum) - Number.parseInt(secNum);
//
//    console.log(difference);
//
//    document.getElementById("thing").value = difference;
//    
//}

 





