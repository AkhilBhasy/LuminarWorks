var employees=[
    [1000,"ajay","developer",20000,2],
    [1001,"ram","developer",22000,2],
    [1002,"ravi","qa",25000,3],
    [1003,"raju","qa",20000,1],
    [1000,"nikil","mrkt",30000,2]
]

// full employee details
for(let emp of employees){
    console.log(emp);
}


// print employee names only
for(let emp of employees){
    console.log(emp[1]);
}


// print employee salaries only
for(let emp of employees){
    console.log(emp[3]);
}

//print employee details whose designation is developer
console.log("employee details whose designation is developer");
for(let emp of employees){
    if(emp[2]=="developer")
    console.log(emp);
}

//print employee details whose salary<22000
console.log("employee details whose salary<22000");
for(let emp of employees){
    if(emp[3]<22000)
    console.log(emp);
}