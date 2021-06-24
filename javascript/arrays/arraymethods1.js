//map(),filter(),reduce(),sort(),find(),some(),forEach()


//if no condition use map(),no:of input=no:of output,,  eg square, uppercase... 1 param.... return array
//if condition use filter, no:of input  !=  no:of output... eg names starting with A, check even or odd... 1 param.... return object
//reduce():....process array to single value... eg max,min,sum.... 2 params... return single value
// sort an array... 2 params needed
//find() search for an element
// find will return only one object while filter will return multiple objects
//some():  return true or false




//squares
var arr=[1,5,6,7,3,4];
var squares=arr.map(num=>num**2);
console.log(squares);


//cubes
var cubes=arr.map(num=>num**3);
console.log(cubes);


//print all even numbers

var evens=arr.filter(num=>num%2==0);
console.log(evens);


//sum of array elements
console.log("sum of array elements");
var sum=arr.reduce((num1,num2)=>num1+num2);
console.log(sum);

//max of array elements
console.log("max of array elements");
var max=arr.reduce((num1,num2)=>num1>num2?num1:num2);
console.log(max);

//min of array elements
console.log("min of array elements");
var min=arr.reduce((num1,num2)=>num1<num2?num1:num2);
console.log(min);









