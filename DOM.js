var elem = document.getElementById('elem');
let myFunc = (()=>alert('Handled ! '));
let weatherFunc = (()=>alert('so cold tonight !'));
elem.addEventListener("click" , myFunc,alert('Hello World ! '));
elem.addEventListener("click" , weatherFunc,alert('Hello World ! '));


