function createUser() {
    let account_number = ac_no.value
    let password = pwd.value
    let balance = bal.value
    let user = {
        account_number: account_number,
        password: password,
        balance: balance
    }
    localStorage.setItem(user.account_number, JSON.stringify(user))
    alert("User Created")
    location.reload(true)
    //localStorage.clear();
}

function populate(users) {
    let htmldata = "";
    for (let user of users) {
        htmldata += `<p> account_number: ${user.account_number} password: ${user.password} Balance: ${user.balance}</p>`
    }
    resultarea.innerHTML = htmldata
}


function listAllUsers() {
    let users = [];
    for (i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i);
        let user = JSON.parse(localStorage.getItem(key));
        users.push(user);
    }
    //console.log(users);
    populate(users);
}


function login() {
    let username = uname.value;
    let password = pwd.value;
    if (username in localStorage) {
        let user = JSON.parse(localStorage.getItem(username));
        if (password == user.password){
            //sessionStorage.setItem("user",username);
            sessionStorage.setItem("user",username)
            alert("Login Successfull");
            window.location.href="home.html";
        }
        else
            alert("Incorrect Password");

    }
    else {
        alert("User Not found");
    }
}



function displayBalance(){
    let user=sessionStorage.getItem("user");
    let data=JSON.parse(localStorage.getItem(user));
    alert(data.balance);
    console.log(data);

}