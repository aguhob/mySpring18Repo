///NOTES 3/1/18 -- addition to portfolio!
//console.log("Testing")

//Creating a form 

var clients = [];


//put function at bottom, though written first. Order doesn't matter bc functions are always done last
function submitForm() {
    //    console.log("hi");
    var email = document.getElementById("email").value;
    var pass = document.getElementById("password").value;
    
    //create an object
    var temp = {
        email: email,
        password: pass 
    };
    
    //push object into array called clients
    clients.push(temp);
    
    //create a for loop. Remove later after testing -- don't iterate a loop or it creates extra lists every time you append.
    
//    for (var i = 0; i < clients.length; i++) {
//        console.log( clients[i].email )
        
        //create p elements
        var emailHTML = document.createElement("p");
        var passwordHTML = document.createElement("p");

        //add values of objects stored in clients to p tag
        emailHTML.innerHTML = clients[clients.length - 1].email;
        passwordHTML.innerHTML = clients[clients.length - 1].password;
    
        //grab body tag and put DOM object 
        document.getElementById("content").appendChild(emailHTML);
        document.getElementById("content").appendChild(passwordHTML);
    
    }
    
    
//    var test = document.createElement("p");
//    test.innerHTML = clients;
//    
////    document.getElementById("content").innerHTML = clients;
//  OR
//    document.getElementById("content").appendChild(test);
//    //appendChild can only apply to DOM objects or Nodes eg HTML elements (you'll see them selectable in the console after hitting submit: script, head, body, <form> from the DOM)   






