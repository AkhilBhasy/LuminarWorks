var arr=[4,5,3];
var count=1;
for(let i=2;i>=0;i--)
{
    for(let j=i-1;j>=0;j--){
    count++;
    console.log(arr[i]+arr[j]);
    } 
}
console.log(count);
