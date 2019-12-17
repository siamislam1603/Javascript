var age=prompt('What is your age?');
console.log(age,',data type:',typeof age);
var drink= age>=18 ? 'beer' : 'Juice';
console.log('Drink '+drink);
//Expression
var name= function findName(){
    var b= 'Hello';
}
//
console.log(name);
//Array
var ar=['siam','islam',1998,false,'blue'];

ar.push('CSE');//add to last
ar.unshift('Md.');//add to 1st
console.log(ar,ar[0]);

ar.pop()//remove from last
ar.shift()//remove from first

console.log(ar,ar[0]);

console.log(ar.indexOf('hello') === -1 ? 'hello doesn`t exist in the array' : 'hello exist in the array');

//Loop

for(var i=0;i<ar.length;i++){
    console.log(ar[i]);
}

//Object

var ball={
    width:50,
    height:30
}
var person=new Object();
person.fName='Siam';
person['lname']='Islam';
console.log(person,ball);