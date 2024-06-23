function fetchFast(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Fast Done ! ');
        }, 2000);
    })
}

function fetchSlow(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve('Slow Done ! ');
        }, 6000);
    })
}

console.log('Program Starting');

async function getUserData(){
    const [fastData, slowData] = await Promise.all([fetchFast(), fetchSlow()]);
    console.log(fastData);
    console.log(slowData);
}

getUserData();

console.log('Program Completed');

function goGetCandies(){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve({Candy : 'sour keys' , quantity : 10});
        }, 2000);
    })
}

function sellCandies(Candy){
    return new Promise((resolve)=>{
        setTimeout(() => {
            resolve(Candy.quantity * 25);
        }, 3000);
    });

}

async function process(){
    let candyObject = await goGetCandies();
    console.log(candyObject);
    let totalPrice = await sellCandies(candyObject);
}
