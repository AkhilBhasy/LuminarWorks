var num=11,flag=0;
for(let i=2;i<num;i++){
    if(num%i==0)
    {
    flag=1;
    break;
    }
}
console.log(flag==0?"Prime Number":"Not Prime Number");