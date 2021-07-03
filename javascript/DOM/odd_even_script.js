function checkOddEven(){
    let num=document.querySelector("#num").value;
    let html_data="";
    if(num%2==0)
    html_data=`<p style="color: red;">Even Number</p>`
    else
    html_data=`<p style="color: red;">Odd Number</p>`
    result.innerHTML=html_data;
}