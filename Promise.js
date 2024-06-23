// function walkDog(callback){
//     setTimeout(()=>{
//         console.log('You Walk The Dog 🐕');
//         callback();

//     },1500);
// }

// function cleanKitchen(callback){
//     setTimeout(()=>{
//         console.log('You Clean The Kitchen 🧹');
//         callback();

//     },2500);
// }

// function takeOutTrash(callback){
//     setTimeout(()=>{
//         console.log('You Take Out The Trash 🗑️');
//         callback();

//     },500);
// }

// walkDog(()=>{
//     cleanKitchen(()=>{
//         takeOutTrash(()=>console.log('You Finished !'));
//     });
// });

// That's a callback hell

function walkDog(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            let dog = true;
            if (dog) {
                resolve('You Walk The Dog 🐕');
            }
            else{
                reject('There is Nothing 🚫');
            }
        },1500);
    })
}

function cleanKitchen(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('You Clean The Kitchen 🧹');
        },2500);
    })
}

function takeOutTrash(){
    return new Promise((resolve , reject)=>{
        setTimeout(()=>{
            resolve('You Take Out The Trash 🗑️');
        },500)
    })
}

walkDog().then(result => {console.log(result); return cleanKitchen()})
.then(result=>{console.log(result); return takeOutTrash()})
.then(result=>{console.log(result); console.log('You Finished !')});



