var accounts = {
    1000: {
        acno: 1000, ac_type: "savings", balance: 5000, c_transactions: [
            { date: "01/05/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    },
    1001: {
        acno: 1001, ac_type: "savings", balance: 6000, c_transactions: [
            { date: "01/06/2021", from: 1000, amount: 1000 },
            { date: "02/05/2021", from: 1003, amount: 500 },
            { date: "03/07/2021", from: 1001, amount: 1000 }]
    },
    1002: {
        acno: 1002, ac_type: "credit", balance: 3000, c_transactions: [
            { date: "01/06/2021", from: 1002, amount: 1000 },
            { date: "02/05/2021", from: 1000, amount: 500 },
            { date: "03/06/2021", from: 1001, amount: 1000 }]
    }

}


//1000   -- bal?
console.log(accounts[1000].balance);

//add 1003:{acno:1003,ac_type:"savings",balance:3000}
accounts[1003] = { acno: 1003, ac_type: "savings", balance: 3000 };
console.log(accounts);


//print credit transactions of acno 1002
console.log(accounts[1002].c_transactions);

//print all credit transations of acno 1000 whose amount>500
accounts[1000].c_transactions.filter(transaction=>transaction.amount>500).
forEach(transaction=>console.log(transaction));

//total amount of 1000 by credit trans
var tot_credit=accounts[1000].c_transactions.map(trans=>trans.amount).reduce((amt1,amt2)=>amt1+amt2);
console.log(tot_credit);

//lowest transtn of 1000 by credit trns
var min_credit=accounts[1000].c_transactions.map(trans=>trans.amount).reduce((amt1,amt2)=>amt1<amt2?amt1:amt2);
console.log(min_credit);


//credit trans dates of acno 1001
accounts[1001].c_transactions.forEach(trans=>console.log(trans.date));


//first credit trans date
console.log("first credit trans date");
console.log(accounts[1000].c_transactions[0].date); 