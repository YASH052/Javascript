console.log("promises");

let firstpromise = new Promise((resolve, reject) =>{
  setTimeout( function saymyname(){
    console.log("yash here!")
  },
  3000
  )
})