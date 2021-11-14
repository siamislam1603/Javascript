class Parent{
    constructor(){
        this.fatherName='Salim';
    }
    setProperty(amount){
        return `Net worth of $${amount}b`;
    }
}
class Child extends Parent{
    constructor(name) {
        super();
        this.childName=name;
    }
    getFullName(){
        return this.childName+' '+this.fatherName;
    }
    updateProperty(amount){
        return this.setProperty(amount+1);
    }
}
const firstChild=new Child('Jalal');
const secondChild=new Child('Kamal');
console.log(firstChild);
console.log(firstChild.getFullName());
console.log(firstChild.updateProperty(2.5));
console.log(secondChild);
console.log(secondChild.getFullName());
console.log(secondChild.setProperty(2));