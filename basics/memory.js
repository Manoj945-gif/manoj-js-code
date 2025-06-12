console.log('use of memory');


/*
 mainly do types ka memory hota hai 
 1.Stack Memory
 2.Heap Memory

 1.Stack Memory:-
   It stores the primitive types of value .
   
   stack memory jo hota hai vah value ka copy bnata hai (call by value )

   age hum uska value change krenga tho oringal value mai koi change nhii hoga 

   let example:-
*/

let accountName="Manoj kr saw";


let customerName=accountName;

customerName="Sunil kr saw"

console.log(accountName);
console.log(customerName);



/* 
  HEAP MEMORY :-
   YA  NON-Primitive Data Types ka value ko store krta hai 
   ya koi data ka copy nhii banta hai while ya data ka reference pe kaam krta hai 

   let example
*/

let user={
    id:"manoj kr saw",
    password:12345,
    captch:"34x32"
}

let user2=user;

user2.password=34213;

console.log(user);
console.log(user2);