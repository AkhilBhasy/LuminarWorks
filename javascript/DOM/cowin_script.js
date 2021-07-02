function checkAge(){
    let age=document.querySelector("#age").value;
   let html_data="";
   if(age>=18)
       html_data=`<p style="color: seagreen;">Eligible</p>`
   else
   html_data=`<p style="color: red;"> Not Eligible</p>`
   
    result.innerHTML=html_data;
}