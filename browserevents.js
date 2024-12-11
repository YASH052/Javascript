
function changetext() {
    let buttoncontent = document.getElementById('buttoncontent');
    if (buttoncontent.textContent != 'clicked!  !!')
    buttoncontent.textContent = 'clicked!  !!';
    else
    buttoncontent.textContent = 'click here!    ';


}
let buttoncontent = document.getElementById('buttoncontent');
buttoncontent.addEventListener('click', changetext);

let anchorElement = document.getElementById('anchor');
anchorElement.addEventListener('click', function(e) {
    event.preventDefault();
    anchorElement.textContent="cliked"
});

let paras = document.querySelectorAll('p');
function change(event) {
    alert("You have clicked on para: "+ event.target.textContent);
}
for(let i=0; i<paras.length; i++) {
        let para = paras[i];
        para.addEventListener('click',change);
}

let fragment = document.createDocumentFragment();

for(let i=1;i<=100;i++)
{
    let para2 = document.createElement('p')
    para2.textContent = "this is para "+i;
    fragment.appendChild(para2);
}

document.body.appendChild(fragment);