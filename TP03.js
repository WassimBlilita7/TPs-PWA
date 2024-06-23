let numbers = [11,22,33,46,75,86,97,98];

// Even Number
let even = numbers.filter(function(element){return element % 2 == 0});
//console.log(even);
let plusFour = numbers.map(four);
function four(index){return index+4};
//console.log(plusFour);

let sum = numbers.reduce((accumulator , current)=>{
    return accumulator + current;
},0);
//console.log(sum);

let avg = sum/numbers.length;
//console.log(avg);

let three = numbers.filter(index=>index%3==0);
//console.log(three);
let square = three.map(index =>Math.pow(index,2));
//console.log(square);

const weeklyForecast = [
    { day: 'monday', hi: 24, lo: 7 },
    { day: 'tuesday', hi: 23, lo: 6 },
    { day: 'wednesday', hi: 28, lo: 14 },
    { day: 'thursday', hi: 29, lo: 16 },
    { day: 'friday', hi: 22, lo: 11 },
    { day: 'saturday', hi: 21, lo: 8 },
    { day: 'sunday', hi: 26, lo: 14 },
    ];

let high = weeklyForecast.filter(i=>i.hi >=23
    );


function specialMultiply(x){
    return function(y){
        return x*y;
    }
}

console.log(specialMultiply(2)(2))