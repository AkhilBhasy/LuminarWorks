class Student{
    constructor(rollno,name,course,total){
        this.rollno=rollno;
        this.name=name;
        this.course=course;
        this.total=total;
    }
    printStudent(){
        console.log(this.rollno,this.name,this.course,this.total);
    
    }
}

var stud1=new Student(101,"Akhil","MEARN",490);
stud1.printStudent();