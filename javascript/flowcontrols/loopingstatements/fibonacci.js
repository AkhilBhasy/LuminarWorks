console.log("Fibonacci series");
var a,b,c;
a=0;
b=1;
c=a+b;
console.log(a);
console.log(b);
while(c<=25)
{
    console.log(c);
    a=b;
    b=c;
    c=a+b;
}
