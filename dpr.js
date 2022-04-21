// 1. Create one function with zero parameter having a console statement;
function show(){
    console.log();
}

// 2.Create one function which takes two values as a parameter and print the sum of them as "Sum of 3, 4 is 7"

function Sum(x,y){
    let sum = x+y;
    console.log(sum);;
}
Sum(3,4);

// 3.Create one arrow function
const arrowfunction = ()=>{
    console.log("arrow function");
}

//4.

var x =21;
var girl =function(){
    var x =20;
    console.log(x);
   
};
girl();

//5
var x =21;
girl();
console.log(x);
function girl(){
    console.log(x);
    var x =20;
};

//6
var x =21;
a = function(){
    x =20;
    console.log(x);
};
console.log(a);

 b = function(){
     x =40;
     console.log(x);
 };
 a();
 b();

 
//factorial

function factorial(n){

    f =1;
    for(i=1;i<=n; i++){
        f *= i;
    }
    return f;
}
console.log(factorial(5));