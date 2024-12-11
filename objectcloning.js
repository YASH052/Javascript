console.log("object cloning");

let obj = {
    age : 22,
    time : 3,
    wt : 50,
    ht : 172,
};

console.log(obj);

obj.color = "orange";

console.log(obj);

//object cloning

let src = {
    age: 22,
    time: 3,
    wt: 50,
    ht: 172,
}

let dest = {...src};
console.log(dest);
dest.timee ="3"
console.log(src);
console.log(dest);
// src = dest
// console.log(dest);

// cloning using iteration

let pro = {};

for(let key in src) {
    let newkey = key;
    let newvalue = src[key];
    pro[newkey] = newvalue;
}

console.log("Pro ->", pro);
console.log("Src ->", src);
