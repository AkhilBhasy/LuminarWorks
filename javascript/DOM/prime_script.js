function primeNumbers() {
    let low = document.querySelector("#num1").value;
    let up = document.querySelector("#num2").value;
    let html_data="";
    for (let num = low; num <= up; num++) {
        let flag = 0;
        for (let i = 2; i < num; i++) {
            if (num % i == 0) {
                flag = 1;
                break;
            }
        }
        if (flag == 0)
        html_data=`<p style="color: red;">${num}</p>`
        result.innerHTML=html_data;
    }
}