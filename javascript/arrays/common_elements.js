var arr1 = [10, 40, 30, 20,60];
var arr2 = [10, 11, 12, 20,60];
arr1.sort((num1,num2)=>num1-num2);
arr2.sort((num1,num2)=>num1-num2);
var i=0, j=0;
while (i < arr1.length) {
    if (arr1[i] == arr2[j]) {
        console.log(arr1[i]);
        i++;
    }
    else if(arr1[i]>arr2[j]){
        j++;
    }
    else
    i++;

}