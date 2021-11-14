function sum(num1,num2=20){
    return num1+num2;
}
let total=sum(10);
console.log('Using default value of a parameter:',total);
total=sum(10,2);
console.log('Using send value of a parameter:',total);