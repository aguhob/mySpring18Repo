// 2/22/18 Mission Techies
// NOTES 
// (delete slashes or press command+"?" to remove comments)

//make variables
//
var a = 1;
var b = 2;
var c = '1';
var s = "a";
var bl = true;

// print separately
//console.log(a);
////console.log(b);
//
//// concatenate
//console.log(a, b);
//
//// add
//console.log(a + b);
//
//// if statement.
//if (a == '1') {
//    console.log(a + " < is indeed '1'");
//}
//// double '==' compares value. '===' also compares type.
//
//if (a == c) {
//    console.log( a + " & (str)" + c + " < are equal value for '=='");
//}
//
//// compare 
//
//if (a > b) {
//    console.log( a + " is less than " + b + " whee!");
//}
//
//// loop 10x
//for ( var i = 0; i < 10; i++ )  {
//    console.log("10x loops, whee!");
//} 
//
//// 10x loop only if comparison is true. Watch your brackets, parentheses and semicolons.
//
//if (a > b) {
//    
//    for ( var i = 0; i < 10; i++ )  {
//        console.log( a + " is less than " + b + " whee!");
//    }
//        
//} else      {
//    
//    for ( var i = 0; i < 10; i++ )  {
//        console.log( a + " is NOT less than " + b + " whee!");
//    }
//    
//}

// Write nested if statements "multidimensional" and compare 2 different conditions. 10x loop only if comparison if false. If false, ignores whatever's next and goes to next.
//
//
//if (a > b) {
//    
//    if (!(a > b));     {
//        
//        if ( (a == c) );
//   
//            for ( var i = 0; i < 10; i++ )  {
//            
//                console.log( a + " is NOT less than " + b + " and IS equal to (str)" + c + " -- whee!");
//        
//        } 
//    }        
//}    

// make an array using the variables. 
//
//var array1 = [ a, b, c, s, bl ];
//    console.log(array1);

// HOMEWORK(ECredit, tomorrow): use a for loop to print each item in array. then try while + for each loops

var array1 = [ a, b, c, s, bl ];

for ( var i = 0, i < 10; i++ ) {
    
    console.log(array1[i]);
}


//Writing a function -- go to scripts4.js

