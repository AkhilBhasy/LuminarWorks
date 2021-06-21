var expenses={jan:10000,feb:15000,march:22000,april:23000,may:20000};


//print expense of march
console.log(expenses.march);
console.log(expenses["march"]);

//adding a new property:value
//june:25000
//expenses["june"]=25000;
expenses.june=25000;
console.log(expenses);

//updating expenses of march
expenses.march+=3000;
console.log(expenses);

//check whether july expense here
console.log("july" in expenses);


//check for july is present if not add july:25000
if(!("july" in expenses)){
    expenses.july=25000;
}

console.log(expenses);