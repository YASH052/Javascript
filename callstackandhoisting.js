//Hoisting process to move the variable and function at the top of their scope

{

function saymynameyash(findname) {//function hoisting
    console.log(findname );
}
    saymynameyash("billionaire");
}

value = 35
console.log(value);
var value;//var hoisting
// var value = 24;//undefined bcz only declaration moved to the top not its value
    
// constt = 90;
// console.log(constt);
// let constt;

sayhello();
// let sayhello = function(){
//     console.log("hello bhai how r u");
// }

function sayhello(){
    console.log("hello bhai how r u");
}


class car{

}
const object1 = new car();

greetme("yash");
function greetme (fullname){
    console.log("hello", fullname);
    greeting();
}

// function call stack  LIFO
function greeting (){
    console.log("greet for the day, Bye!");
}
// greeting();

function solve(number){
 return function(number){
    return number*number;
 };
}
let ans = solve(5);
console.log(ans(10))

const arr = [
    function(a,b){
        return a +b;
    }
    ,
    function (a, b) {
        return a - b;
    }
    ,
    function (a, b) {
        return a * b;
    }
]

let first = arr[0];
let anss = first(3,4);
console.log(anss);

let obj ={
    age:23,
    name:"yash",
    address:"noida",
    ht: 170,
    greeting: ()=>{
        console.log("helo");
    }

}

console.log(obj.ht)
obj.greeting();