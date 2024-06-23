
(function(){
    let me = 'Wassim';
    console.log(`Hello my name is ${me}`);
}) ();

let double = n =>n*2;
console.log(double(2));

let triple = (number)=>number*3;
console.log(triple(3));

// CALLBACK FUNCTION

function hello(callback){
    setTimeout(()=>{
        console.log('Hello');
        callback();
    },3000);
}
function bye(){
    console.log('bye');
}

hello(bye);