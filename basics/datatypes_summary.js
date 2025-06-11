console.log("Datatypes summary ");

/*
  age hume data or value memory mai store krna ya access krna uska according 

  Datatypes divided into two categories 
  1.Primitive Datatypes
  2.Non-Primitive Datatypes

  1.Primitve Datatypes:-Call by value
    There are seven types of data types.
    1.String
    2.Number
    3.Boolean 
    4.null
    5.Undefined
    6.Symbol 
    7.BigInt


    2.Non-Primitive Datatypes :-call by reference
    i.Array
    ii.Objects
    iii.functions 

*/


// String

let name ="manoj ";
console.log(name);
console.log(typeof name);

//number
let num=234;
console.log(num);
console.log(typeof num);

// Boolean
let answer=false;
console.log(answer);
console.log(typeof answer);


//null
let outsideTemp=null;
console.log(outsideTemp);
console.log(typeof outsideTemp);

//undefined
let age;
console.log(age);
console.log(typeof age);


//symbol:- give the unique number 
let id=Symbol('123');
let customerId=Symbol('123');

// both id are different 

console.log(id==customerId);

console.log(id);
console.log(typeof id);


let BigNumber=12243243532439n;
console.log(BigNumber);
console.log(typeof BigNumber);



// Non primitive Datatypes

// Array

console.log("non primitive datatypes")

let heroes=["sharukkhan","sunny","govinda"]
console.log(heroes);
console.log(typeof heroes);


let student ={
    name:"manoj kr saw",
    age:21,
    class:"B.Tech"
}
console.log(student);
console.log(typeof student);


let  myFunction=function(){
    console.log("hello world");
}
console.log(myFunction);
console.log(typeof myFunction);
