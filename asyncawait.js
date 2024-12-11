console.log("asyn await");//sequential behaviour

async function getdata() {
    setTimeout(() => {
        console.log("asyn getdata");
    }, 3000);
}
getdata();

//fetch api

  async function getdata(params) {
    let response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    console.log(response);
    let data = await response.json();
    console.log(data);
  }
