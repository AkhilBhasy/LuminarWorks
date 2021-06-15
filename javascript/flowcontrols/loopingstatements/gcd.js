var num1=14,num2=63,i=1,gcd;
while(i<=num1 && i<=num2){
if((num1%i==0)&&(num2%i==0))
gcd=i;
i++;
}
console.log("GCD: "+gcd);
