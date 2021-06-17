var rows=5,str="";
for(let i=1;i<=rows;i++)
{
    str=""
    for(let j=i;j<rows;j++)
    str+=" ";
    for(let k=1;k<=(2*i-1);k++)
    {
      if(i==rows||k==1||k==(2*i-1))
      str+="*";
      else
      str+=" ";  
    }
    console.log(str);
}



