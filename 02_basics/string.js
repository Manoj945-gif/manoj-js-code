console.log("Use of string ");

/*  
string defined krna ka do trika hai 


*/
 //first trika 
let name="manoj kr saw";


//second trika 
let name2=new String ("manoj kr saw ");


console.log(name.length);
console.log(name2.length);

// console.log(name.indexof('m'));
console.log(name2.indexOf('m'));
console.log(name2.charAt(3));


console.log(name2.toUpperCase());



// some important method of String;

let myName='SohanKumar';


 //substring Method

console.log(myName.substring(0,5));

//Slice method 
console.log(myName.slice(0,5));

/*dono method same hai both method takes first input index number and last index number 

and print (n-1) index number value 

But slice method also takes negative index number as a arguments while substring method ignore 
negatie index number 

let's Example:-
*/


console.log("comparision of substring and slice");
console.log(myName.substring(-4,1));
console.log(myName.slice(-10,3));



console.log("another method trim");

//TRIM METHOD
 /*
  In this method remove the first and last extra backspace from the string .
 */

  let word="     cause    ";
 
  console.log(word);
  //use of trim method 
  console.log(word.trim());


  

  console.log("use of replace method");
  //Replace Method 
  /*
  In this method replace the one string to another string fistly write whose string replace as a argument 
  and second argument pass which types of string to replace.



  */
  let url="https://manojgoogle.com%20tubes";

  console.log(url.replace("manoj","sunil"));


  //Include method 

  /*
  if hume pta krna ho ki word  avaliable hai ya nhii string toh include ka use krenge

  */

  console.log(url.includes('manoj'));
  



  console.log("use of seprate method");
  
  //Split Method

  /*
 Hume jis bases pe seprate krna hai usko as a argument ka jaisa pass krta hai or hume
 Array ka from mai bna ka deta hai.
  */

  let sperateSentence ="my name is manoj kumar saw";
  let dashSeprate="rohan-eats-a-mango";
  console.log(sperateSentence.split(" "));

  console.log(dashSeprate.split("-"));