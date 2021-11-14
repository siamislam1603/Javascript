const numbers=[1,2,3,4,5,6,7,8];
let result=numbers.slice(2,5); //show from 2 to 5-1 index
console.log(result);
result=numbers.splice(2,5); // Delete elements from index 2 to 2+(5-1)
console.log(result);
console.log(numbers);
replacedArray=[5,9];
result=numbers.splice(1,2,...replacedArray); //delete elements from index 1 to 1+(2-1) and replaced those index elements by replaced array elements.
console.log(result);
console.log(numbers);