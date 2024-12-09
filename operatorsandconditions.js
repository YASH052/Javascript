// console.log("operatorsandconditions");


//arithmetic operator -> + - / % ** *

console.log(2 + 3); // 2 and 3 are operand 
console.log(2**4)
console.log(2*5);
console.log(2/5);
console.log(5%2);


//unary operator -> -- ++
let a =2;
console.log(++a); //pre increment
console.log(a++); //post increment
console.log(a);

console.log(a--);
console.log(--a);
console.log(a);

//assignment operator -> = += -+ *= 

let c=9;
c+=9;
c-=9
c*=2;
c = 8;
console.log(c);

//comparison operator -> > < >= <= != == ans will bwe true or false

console.log(c==8);
console.log(c>9);

//strict and loose equality -> === == !== !=

console.log (c=="8");
console.log(c ==="8");
console.log(c===8);

//ternary operator  consitional operator

let billionare = 840000000;
let status = (billionare >= 840000000) ? "you are a billionaire" : "you will be a billionaire";
console.log (status);

// logical operator -> && || !

let a1 = 10;
let b1 = 20;
let c1 = 30;
let d1 = 40;
console.log(a1 > b1 && b1 > c1 && c1 > d1);
//logical OR
console.log(a1 > b1 || b1 > c1 || c1 > d1);
// let ans = (false || true || fale);
let ans = (true && true && true);
console.log(ans);


//short circuiting  in or || condition if one true then no need to check further same in && and one false ans wiil bee false


//Bitwise operator 0 and 1, AND & OR | << >> XOR NOT

console.log(2 & 5);
console.log(2 | 5);
console.log(2 ^ 5);
console.log(2 ^ 2);
console.log(2 << 2);
console.log(3 >>1);

//conditionals -> if else switch if else-if else
 
let hundreds = 100;
if(hundreds===100)
{
    console.log("true")
}
else{
    console.log("false");
}
let num =3;
switch(num) {
    case 1:console.log('A')
    break;
    case 2 : console.log('B')
    break;
    case 3: console.log('C')
    break;
    default: console.log('default')
    
}