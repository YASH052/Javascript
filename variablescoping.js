// variable scoping -> global, functional, block scoping

var age = 18;//global scope access from anywhere in a file. 

function sayhelo(){
    let fullname = "yash"
    console.log("sayhelo", fullname);
}
sayhelo();
{
    let namehai = "umesh";
    var namehaig = "umeshj"
    console.log(namehai);
}
console.log(namehaig);

// console.log(namehai);


//temporal deadzone 22-25

// console.log(marks);
// console.log("yash")
// console.log("24")
let marks = 90;
console.log(marks)

