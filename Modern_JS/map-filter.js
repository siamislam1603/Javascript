const numbers=[3,4,7,6,5];
const output=[];
for(let i=0;i<numbers.length;i++){
    output.push(numbers[i]*numbers[i]);
}
console.log(output);

//map function to iterate through array
const square=num=>num*num;
let result=numbers.map(square);
console.log('Using map function and arrow function:',result);

// These parameters can be used while using map function
result=numbers.map(function(element,index,array){
    console.log(element,index,array);
    return element*element;
});
console.log(result);

// Shortest version of map function.
result=numbers.map(num=>Math.pow(num,3));
console.log('Using map & arrow function to find the cubes of the numbers:',result);

//Filter function
const biggerNums=numbers.filter(num=>num>5);
console.log('Find all numbers >5 in array using filter:',biggerNums);

//Find function
const findNum=numbers.find(num=>num>5);
console.log('Find the 1st the number that match the given condition:',findNum);