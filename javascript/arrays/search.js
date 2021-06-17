var arr=[10,11,12,13,14,15];
var element=18,flag=0;
for(let num of arr)
{
    if(num==element)
    {
    flag=1;
    break;
    }
}

if(flag==1)
console.log("Element found");
else
console.log("Element Not found");