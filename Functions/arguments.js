//Arguments is a special object of a function like array which is accessible in it's local scope and can be treated like array
function calculateSum(num1,num2){
    console.log('Array like objects:',arguments);
    var sum=0;
    for(var i=0;i<arguments.length;i++){
        element=arguments[i];
        sum+=element;
    }
    return sum;
}
const result=calculateSum(2,3,5,6);
console.log('Sum:',result);