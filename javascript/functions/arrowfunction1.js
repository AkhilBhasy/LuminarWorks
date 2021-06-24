let add=(num1,num2)=>num1+num2;
let sub=(num1,num2)=>num1-num2;
let cube=num=>num**3;

console.log(add(10,20));
console.log(sub(50,30));
console.log(cube(3));

//arrow fn to check odd or even
var num_check=num=>num%2==0?"even":"odd";
console.log(num_check(8));


//sum of n numbers

let sum=(...args)=>args.reduce((num1,num2)=>num1+num2);
console.log(sum(10,20,30,100));