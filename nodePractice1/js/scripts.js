/* https://www.sitepoint.com/beginners-guide-to-javascript-date-and-time/ */

function print(text) {
    console.log(text)
}

function getDate() { 

    var date = new Date();
//    console.log(date)

    return date;

    };



function getSumProduct(x, y) {
    
    var sum = x + y;
    var product = x * y;
    
//    console.log("The sum is " + sum + " and the product is " + product);
                
    return "The sum is " + sum + " and the product is " + product;

}
                

function namer(z) {
    
    name = z    
                
    return "The programmer's name is " + z; 

}

module.exports = {
    print: print,
    getSumProduct: getSumProduct,
    getNamer: namer,
    getDate: getDate
}