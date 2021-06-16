var expenses=[30000,25000,27000,25000,25000,32000];
for(let exp of expenses)
console.log(exp);


var tot_exp=0;
for(let exp of expenses)
tot_exp+=exp;
console.log("Total expense: "+tot_exp);

var count=0;
console.log("Expenses above 25000")
for(let exp of expenses){
    if(exp>25000)
    {
    console.log(exp);
    count++;
}
}
console.log("above 250000: "+count)

console.log("Highest Expense");
var max_exp=0;
for(let exp of expenses){
   
    if(exp>max_exp)
    max_exp=exp;
}
console.log(max_exp);
