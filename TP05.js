let input = document.querySelector('input');
let btn = document.querySelector('button');
let div = document.querySelector('#div');

let username = input.value;
function f1(){
    div.textContent = `Welcome to the site ${input.value}`;
}

btn.addEventListener('click' , f1);


let object = {voltage: 250,current: 12};
let jsonObject = JSON.stringify(object);

let x='[{"type" : "dog" , "age" : 3} , {"type" : "cat" , "age" : 2}]';
let xx = JSON.parse(x);

xx.forEach(element => {
    console.log(`The type is : ${element.type}`);
    console.log(`The age is : ${element.age}`);
});