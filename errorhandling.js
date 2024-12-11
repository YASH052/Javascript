console.log("error handling");

//Compile time error syntax
//Runtime error

console.log("xyz '")

try{
    console.log("try block starts")
    console.log('c');
}
catch{
    console.log("I am inside catch error");
}
finally{
    console.log("compulsory")
}

try{
    console.log(x);
}
catch(error){
    throw new Error("bhai declared kro x ko");
}