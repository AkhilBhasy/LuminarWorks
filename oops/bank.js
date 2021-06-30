class Bank {
    createAccount(accno, name, bal) {
        this.account_no = accno;
        this.name = name;
        this.balance = bal;
    }
    balanceEnquiry() {
        console.log("Available Balance:" + this.balance + "Rs");
    }
    deposit(amt) {
        this.balance += amt;
        console.log(`Yout account number${this.account_no} has been credited with amount ${amt}. Your Available Balance: ${this.balance} `);
    }
    withdrawal(amt) {
        if (this.balance < amt) {
            console.log("Transaction Failed.. Insufficient Balance..");
        }
        else {
            this.balance -= amt;
            console.log(`Yout account number${this.account_no} has been debited with amount ${amt}. Your Available Balance: ${this.balance} `);
        }
    }
}

var obj1 = new Bank();
obj1.createAccount(1001, "Shinu", 5000);
obj1.balanceEnquiry();
obj1.deposit(1000);
obj1.withdrawal(1000);
