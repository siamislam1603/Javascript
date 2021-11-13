// Function declaration
function sum(a,b){
    const result=a+b;
    console.log('Function declaration:',result);
}
sum(2,3);

//Function expression
const total=function(num1,num2){
    const result=num1+num2;
    console.log('Function expression:',result);
};
total(2,3);