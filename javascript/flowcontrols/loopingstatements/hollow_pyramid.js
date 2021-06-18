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


//or


for(let row=1;row<=5;row++)
{
  let str="";
  for(let col=1;col<=9;col++){
    if((row==5)||(row+col==6)||(col-row==4))
    str+="*";
    else
    str+=" ";
  }
  console.log(str);
}