// // // // let seas = ['Black Sea' , 'Caribbean Sea' , 'North Sea' , 'Baltic Sea'];
// // // // seas.forEach((item,index,arr)=>{
// // // //     arr[index]= 'Hello '+item;
// // // // })


// // // // let numbers = [1,2,3,4,5,6,7,8,9];
// // // // let even =numbers.filter(
// // // //     function(index)  {
// // // //         return index % 2 == 0;
// // // //     }
// // // // )
// // // // console.log(even);


// // // function createCounter(){
// // //     let count = 0;
// // //     function increment(){
// // //         count++;
// // //         console.log(`Count Increased to ${count}`);
// // //     }
// // //     function getCount(){
// // //         return count;
// // //     }
// // //     return{increment , count};
// // // }
// // // const counter = createCounter();
// // // counter.increment();
// // // counter.increment();
// // // counter.increment();
// // // counter.getCount();

// // function createGame(){
// //     let score = 0;
// // function increaseScore(points){
// //     score += points;
// //     console.log(`+${points} pts`);

// // }
// // function decreaseScore(points){
// //     score -= points;
// //     console.log(`-${points} pts`);

// // }
// // function getScore(){
// //     return score;
// // }
// //     return {increaseScore,decreaseScore,getScore};
// // }


// // let game = createGame();
// // game.increaseScore(5);
// // game.decreaseScore(1);
// // console.log(`The Final Score is ${game.getScore()}`);


// function create(){
//     var nom = 'Wassim';
//     function display(){
//         console.log(nom);
//     }
//     return {display};
// }

// var cree = create();
// cree.display();


// function addition(x){
//     return function(y){
//         return x+y;
//     }

// }

// var ajout1 = addition(1);
// var ajout2 = addition(2);

// console.log(ajout2(4));

function add1(x){
    return function add2(y){
        return x+y;
    }
}
let sum = add1(2)(5);
console.log(sum);