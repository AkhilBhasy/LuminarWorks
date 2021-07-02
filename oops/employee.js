class Employee {
    constructor(id, name, desig, salary, exp) {
        this.id = id;
        this.name = name;
        this.desig = desig;
        this.salary = salary;
        this.exp = exp;
    }
}


//create 5 employee objects
var emp1 = new Employee(101, "Akhil", "developer", 75000, 2);
var emp2 = new Employee(102, "Shinu", "market", 35000, 3);
var emp3 = new Employee(103, "Sayooj", "UI", 45000, 4);
var emp4 = new Employee(104, "Hiran", "QA", 20000, 2);
var emp5 = new Employee(105, "Binu", "HR", 25000, 5);

//highest salaried employee
var emps = [emp1,emp2,emp3,emp4,emp5];
console.log(emps);
// let high_sal = 0, high_emp;
// for (let emp of emps) {
//     if (emp.salary > high_sal) {
//         high_sal = emp.salary;
//         high_emp = emp;
//     }
// }

let high_emp=emps.reduce(obj1,obj2)
console.log("Highest salaried Employee ",high_emp);

//sort employees according to their experience
emps.sort((emp1,emp2)=>emp1.exp-emp2.exp);
console.log("After Sorting");
console.log(emps);



//check is there any employee working as qa
var is_there=emps.some(emp=>emp.desig=="QA");
console.log(is_there);