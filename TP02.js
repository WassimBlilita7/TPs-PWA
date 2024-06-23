// let e;
// function five(){
//     const x=3;
//     function two(){
//         let y = 2;
//         e=x+y;
//     }
//     two();
// }
// five();


// function six(){
//     if(true){
//         let f = 50;
//     }
// }
// six();

// let x=4;
// {
//     let x=7;
//     z=(x%2==0)? 'Even' : 'Odd';
// }

// let firstName = 'Wassim' , lastName = 'Blilita';
// let greeting = `Hi ${firstName} , ${lastName}`;
// //console.log(greeting);

// const moy = 15;
// //console.log(`You Have ${moy > 10 ? 'Passed' : 'Failed'}`);

// let person = {
//     firstName : 'Wassim',
//     lastName : 'Blilita',
//     age : 22,
//     getPerson : function(){return `The Age of ${this.firstName} ${this.lastName} is ${this.age}`}
// };


(function(){
    var x=1;
    var y=1;
    for(var i =2 ; i<=4 ; i++){
        var x=0;
        x=i+x;
        let y=x;
        console.log(x);
        console.log(y);
    }
    console.log(x);
    console.log(y);
    console.log(i);
})();