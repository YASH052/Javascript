function saymyname(){
    console.log("hello settimeout");
}

setTimeout(() => {
    saymyname();
}, 4000);