class Parent
{
    m1(){
        console.log("inside m1 mmethod");
    }
}
class Child extends Parent{
    m2(){
        console.log("inside m2 method");
    }
}
class SubChild extends Child{
    m3(){
        console.log("inside m3 method");
    }
}

var obj=new SubChild();
obj.m3();
obj.m2();
obj.m1();