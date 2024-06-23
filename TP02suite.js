let facto = (n)=>{
    if(n==1 || n==0){
        return 1;
    }
    else{
        return n*facto(n-1);
    }
}

let sumTwo = (x,y)=>x+y;

let f1 =(x)=>{
    let i=10;
    x(i); //10
    x(i+1); //11
    x(i+2);//12
}
let f2 = (i)=> console.log(i);


(function(i){sum(callback,i);})(1);
function sum(x,j){
    let t=[];
    for(let i =1; i<4 ; i++){
        t[i]=x(i+j);
        console.log(t[i]);
    }
}
function callback(i){
    return i*i;
}

var FuncX = (x1,x2)=>{x2++;
    return x1(x2,1);
};

var FuncY = (y,z)=>{++y;
return ()=>{z+y;}
}