// var arr = [1, 2, 3, 4];
// var num = 6, count = 1;

// for (let i = 0; i <arr.length; i++) {
//     for (let j = i + 1; j <arr.length; j++) {
//         if (arr[i] + arr[j] == num)
//             console.log("Pairs: " + arr[i] + " " + arr[j])
//             count++;
//     }
// }
// console.log(count);


//or

var arr=[1,2,3,4];
var low=0,up=arr.length-1;
var element=6,count=1;
while(low<up)
{
    let total=arr[low]+arr[up];

    if(element==total){
        console.log(arr[low],arr[up]);
        low++;
    }
    else if(element>total){
low++;
    }
    else if(element<total){
        up--;
    }
   count++;
}
console.log(count);