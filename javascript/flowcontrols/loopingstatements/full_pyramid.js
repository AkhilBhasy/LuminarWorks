let n=5;
for(let row=1;row<=n;row++){
    var str="";
    for(let space=n-row;space>=1;space--)
        str+=" ";
    for(let star=1;star<=row;star++)
    str+="* ";
    console.log(str);
}