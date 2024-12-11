class Human {
    age;
    weight = 50;
    #ht = 180; // Private field (using # makes it private to the class)

constructor(newAge, newht){
    this.age = newAge;
    this.#ht= newht;
}

    // Behavior
    walking() {
        console.log("walking", this.#ht); // Accessing private field within the class
    }

    #running() {
        console.log("running");
    }

    // Getter to access private field
    get fetchht() {
        return this.#ht;
    }
    set setht(value){
        this.#ht= value;
    }
}

let obj = new Human(50,810);
console.log(obj.age)
// console.log(obj.#ht)
obj.walking();
// obj.running();
console.log(obj.fetchht); // Accessing private field via getter


// we acces the value outside the class getter setter


//default parameter; allow to use functiona with default name;

function saymynameumesh(myname="billionaire") {
    console.log("saymynameumesh",myname);
}

console.log(saymynameumesh());


function aage(){
    return 170;
}

function utility(name="yash", age=aage()){
console.log(name , " ", age);
}

utility();




