// functions 

// syntex

function one(parameter){
    console.log("hello");
    
}

one();


// how to use parameter


function two(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c)
    
    
}

two("naveen",22,true)


// code reusable


let a = 10

let b = 20

console.log(a + b);

let c = 20 

let d = 20 

console.log(c + d);


function add(a,b){

    console.log(a + b);
    
}

add(10,20)
add(20,20)



// return


function returnVal(){
    return 100
}


let re = returnVal()

console.log(re);

function reuse(){
    console.log(re);
    
}

reuse()


// function types 

// 1. named function 

named()

function named(parameter){
    console.log("named function");
    
}


// 2. annonymous function

var annonymous = function(parameter){
    console.log("annonymous function");
    
}

annonymous()



// 3. arrow function


var arrow = (parameter)=>{
    console.log("Arrow function");
    
}

arrow()





// scopes


// var - global scope , function scope

// let - block scope

// const - block scope


function scopesCheck(){
    if(true){

        var a1 = "global scope"
        let b1 = "block scope"
        const c1 = "block scope1"

        console.log(b1);
        console.log(c1);
    }

    console.log(a1);
    
    
    
}

scopesCheck()


// hoisting

// console.log(random);

// let random = "hello"

console.log(a2);

var a2 = 10



let b2 = 12

console.log(b2);


const c2 = 14

console.log(c2);





