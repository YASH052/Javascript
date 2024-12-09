//Rules for variables: starts from number, _,$;
// no space
//camelCase: ageOfStudent
//name should be meaningful
//don't use reserved keywords

var age = 23;
if(true)
{
    console.log(age);
}

function solve(){
    var age=23;
    console.log(age); //function scoped, redeclaration
}
// console.log(age);
solve();

{let a =25; // bloacked scoped
console.log(a);}

let a = 23;
a="yash";
// let a=34; not possible

 console.log(a);

const b =24;
console.log(b);

// b="yash"; not possible
// b=20; not possible  

let undefineddd;
console.log(undefineddd);

let nulll = null;
console.log(nulll);

let marks = 29.89;
marks = 49;
console.log(typeof(nulll));
console.log(marks);