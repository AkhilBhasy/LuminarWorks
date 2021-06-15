var low = 3, up = 40;
for (let num = low; num <= up; num++) {
    let flag = 0;
    for (let i = 2; i < num; i++) {
        if (num % i == 0) {
            flag = 1;
            break;
        }
    }
    if (flag == 0)
        console.log(num);
}