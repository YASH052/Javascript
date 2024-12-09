
const functionname = (value1 , value2) =>{
return value1+value2;
}

console.log(functionname(8,9)); 

let squarenumber = function(num) {
    return num*num;
}

let ans = squarenumber(7);
console.log(ans);

// function getexpo(x,y){
//     let ans = x**y;
//     return ans;
// }



//arrow function
const getexpo = (x,y) =>{
    let ans = x**y;
    return ans;
}
console.log(getexpo(4, 5));