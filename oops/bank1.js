class Bank {
    status = 0;
     accounts = {
        1000: { account_number: 1000, name: "ram", balance: 4000, username: 1000, password: "userone" },
        1001: { account_number: 1001, name: "ravi", balance: 2000, username: 1001, password: "usertwo" },
        1002: { account_number: 1002, name: "raju", balance: 7000, username: 1002, password: "userthree" },
        1003: { account_number: 1003, name: "nikil", balance: 6000, username: 1003, password: "userfour" },

    }
    getAccountDetails() {
       
        return this.accounts;
    }
    authenticate(uname, pwd) {
        let data = this.getAccountDetails();
        if (uname in data) {
            if (uname == data[uname]["username"] & pwd == data[uname]["password"]) {
                console.log("Authentication Sucess");
                this.status = 1;//sucess
                return uname;
            }
            else {
                console.log("Incorrect password");
                return -1;//incorrect password
            }
        }
        else {
            console.log("Invalid user");
            return 0;//invalid user
        }


    }
    balanceEnquiry(accno) {
        if (this.status == 1) {
            let data = this.getAccountDetails();
            console.log(data[accno]["balance"]);
        }
        else {
            console.log("You must login");
        }
    }

    fundTransfer(user, to_accno, amt) {
        if (this.status == 1) {
            let data = this.getAccountDetails();
            if (!(to_accno in data)) {
                console.log("Invalid to_account number");
            }
            else {
                let balance = data[user]["balance"];
                if (balance < amt) {
                    console.log("Transaction Failed.. Insufficient balance");
                }
                else {
                    //credit
                    data[to_accno].balance += amt;
                    //debit
                    data[user].balance -= amt;
                    console.log(data);
                }

            }
        }
        else {
            console.log("You must login");
        }
    }
}
var b1 = new Bank();
let user = b1.authenticate(1000, "userone");
b1.balanceEnquiry(user);
b1.fundTransfer(user, 1001, 2000);
b1.balanceEnquiry(user);