var arr=[10,7,11,8,12,9], element=8;
arr.sort((num1,num2)=>num1-num2);
console.log("Sorted Array");
console.log(arr);
var low=0,up=arr.length-1,flag=0;
while(low<=up){
    let  mid=Math.floor((low+up)/2);
    if(element>arr[mid])
    low=mid+1;
    else if(element<arr[mid])
    up=mid-1;
    else if(element==arr[mid]){
        flag=1;
        break;
    }
    
}
if(flag==1)
console.log("Element Found");
else
console.log("Element Not Found");