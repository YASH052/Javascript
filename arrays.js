let obj = {
    "name": "Yash",
    "full name" : "Yash Sharma",
    age : 23,
    weight : 50,
    height : "5ft 8inch",

    greet:function(){
        console.log("Greeting to the page");
    }
};
console.log(obj.greet()); 
let arr = [1, true, "yash", 23.5];
console.log(arr);
let brr = new Array("yash", 1, true);
arr.push(90);
arr.push("90");
arr.push(90);
arr.push(90);
console.log(arr);
arr.splice(1,2,'umesh')   
console.log(arr);
//map
let arrr = [10,20,30,23,33,50];
let brrr = arrr.map((number,index)=>{
    console.log(index + " -> " +number);
    
})
//filter
console.log(arrr.filter((number)=>{
    if(number % 2 === 0)
    {
        return true;
    }
    else{
        return false;
    }
}))

//reduce

console.log(arrr.reduce((number,acc)=>{
    acc+=number;
    return acc;
}))

arrr.sort().reverse();
console.log(arrr);

const users = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' }
];

const user = users.find(u => u.name === "Charlie");
console.log(user.id); // Outpu

arrr.forEach((value, index) => {
    console.log("Number: ", value, "Index ", index);
});

// function getsum(arrr) {
//     let sum=0;
// for(let i = 0; i < arrr.length; i++) {
//     sum += arrr[i];
// }
// return sum;
// }

// let getsum =(arr) =>{
//     let sum =0;
//     arr.forEach((value)=>{
//         sum += value;
//     })
//     return sum;
// }

let getsum = function(arr){
    let sum = 0;
    arr.forEach((value) => {
        sum += value;
    })
    return sum;
}

let totalsum = getsum(arrr);
console.log(totalsum);