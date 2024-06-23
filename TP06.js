console.log('Program Started');
let p = new Promise((resolve,reject)=>{
    setTimeout(() => {
        resolve('Program Complete');
    }, 3000);
    setTimeout(() => {
        reject('Program Failure');
    }, 2000);
});
p.then(r=>console.log(r)).catch(e=>console.log(e));
console.log('Program in Progress');

function calculateSquare(n){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(n*n);
        }, 3000);
    });
}
calculateSquare(5).then(n=>console.log(`The Square is ${n}`));


let cube = n => new Promise((resolve)=>{
    setTimeout(() => {
        resolve(Math.pow(n,3));
    }, 1000);
});

cube(3).then(r=>console.log(`The Cube is ${r}`));


function job(data){
    return new Promise((resolve,reject)=>{
        if (isNaN(data)) {
            reject('Error');
            
        }else if(data % 2 !=0){
            resolve('Odd');
        }else{
            reject('Even');
        }
    });
}
