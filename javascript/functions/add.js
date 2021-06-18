function add(...args){
    let sum=0;
    console.log(args);
    for(let num of args)
    sum+=num;
    return sum;
}

console.log(add(10,20,30,40,50));