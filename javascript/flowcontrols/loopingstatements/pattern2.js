let n=3;
for(let i=1;i<=n;i++){
    var str="";
    for(let j=1;j<=n-i;j++)
        str+=" ";
    for(let k=0;k<2*i-1;k++)
    str+="*";
    console.log(str);
}