// var num=123,rev=0;
// while(num>0){
//   let dig=num%10;
//     rev=rev*10+dig;
//     num=Math.floor(num/10);
// }
// console.log(rev);


// var num=123;
// while(num!=0){
//   let dig=num%10;
//     console.log(dig);
//     num=Math.floor(num/10);
// }


var num=121,rev="",num1;
num1=num;
while(num>0){
  let dig=num%10;
    rev+=dig;
    num=Math.floor(num/10);
}
console.log(rev);

if(num1==rev)
    console.log("Pallindrome");
else
console.log("Not Pallindrome");
