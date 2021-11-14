// function declaration
// function doubleIt(num){
//     return num*2;
// }

// function expression
// const doubleIt=function myFunc(num){
//     return num*2;
// }

// es-6 arrow function
const doubleRes=num => num*2;
const sumRes=(num1,num2) => num1+num2;
const ret5=() => 5;
const doMath=(num1,num2)=>{
    const sum=num1+num2;
    const diff=num1-num2;
    return sum*diff;
};
console.log('Double of 5 is:',doubleRes(5));
console.log('Sum of 5,10 is:',sumRes(5,10));
console.log('Get 5:',ret5());
console.log('Do maths:',doMath(7,5));