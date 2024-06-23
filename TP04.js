const fruitList = ["apple" , "banana" , "tomato"];
let ulElement = document.querySelector('ul');
fruitList.forEach((fruit)=>{
    var li = document.createElement('li');
    li.textContent = fruit;
    ulElement.appendChild(li);
});

let tomato = ulElement.lastChild;
const avocado = document.createElement('li');
avocado.textContent = 'Avocado';
ulElement.insertBefore(avocado , ulElement.lastElementChild);
console.log(ulElement);


ulElement.firstElementChild.style.color = 'red';
const h1 = document.createElement('h1');
h1.innerHTML = 'List of Fruits';
document.body.insertBefore(h1 , document.body.firstElementChild);