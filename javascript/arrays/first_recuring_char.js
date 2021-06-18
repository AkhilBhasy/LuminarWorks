var str="BACAC",flag=0;
for(let i=0;i<str.length;i++)
{
    for(let j=i+1;j<str.length;j++){

     if(str[i]==str[j])
     {
         console.log(str[i]);
         flag=1;
     }
}
if(flag==1)
break;
}