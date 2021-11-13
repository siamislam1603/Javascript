var num1=2;

console.log('1st function')
//closure means bracket which keeps the reference of every instance outside of it's scope
var sum=function(){
    var num2=3;
    return function(){
        return num1+num2;//Here num1 is in global scope and num2 is is sum scope
    };
}
myFunc=sum();
console.log(myFunc());
console.dir(myFunc);

//Private property can be accessed in a protected way through closure
console.log('2nd function')
function bankAccount(initialBalance){
    balance=initialBalance; //balance property can be accessed directly from outside
    return function(){
        return balance; //scope:closure{bankAccount},This can be accessed from outside
    };
}
var account=bankAccount(100000);
console.log(account());
console.dir(account);