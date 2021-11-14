class Student{
    constructor(id,name){
        this.id=id;
        this.name=name;
        this.batch=39;
    }
}
const student1=new Student(10,'Jalal');
const student2=new Student(11,'Kamal');
console.log(student1,student2);
console.log('Student-1 name:',student1.name);