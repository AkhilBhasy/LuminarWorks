var num=123,temp,rem,sum=0;
temp=num;
while(num>0){
    rem=num%10;
    sum+=rem**3;
    num=Math.floor(num/10);
}
console.log(sum);
if(temp==sum)
console.log("Amstrong Number");
else
console.log("Not Amstrong Number");