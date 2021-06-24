var products=[
    [100,"ricepowder",30,10],
    [101,"oreo",35,100],
    [102,"darkfantacy",40,50],
    [103,"fifty",20,5],
    [104,"horlicks",200,5],
    [105,"complan",190,0],
    [106,"boost",250,10],
    [107,"item1",5,10]
];


console.log("Total no:of products");
console.log(products.length);



console.log("No:of products in stock");
let cnt=0;
for(let pro of products)
{
    if(pro[3]!=0)
    cnt++;
}
console.log(cnt);


console.log("Costly Product");
let costly=0,pname;
for(let pro of products)
{
    if(pro[2]>costly){
    costly=pro[2];
    pname=pro[1];
    }
}
console.log(pname);



console.log("Low cost Product");
let l_costly=products[0][2],pna;
for(let pro of products)
{
    if(pro[2]<l_costly){
    l_costly=pro[2];
    pna=pro[1];
    }
}
console.log(pna);



console.log("Is there any item available under rs 10");
let flag=0;
for(let pro of products){
    if(pro[2]<10)
    flag=1
}
console.log(flag==1?true:false);



console.log("Details of boost");
console.log(products[6]);