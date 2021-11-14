const name="kamal";
// name="Jamal"; we can't reassign a constant
console.log(name);

const numbers=[10,24,2];
numbers[1]=4;
numbers.push(23);
console.log(numbers);
// numbers=['res','sdjsk']; we can't reassign constant array but can update it's values. Simmilar thing is also applicable for constant objects.

let sum=0;
for(let i=0;i<10;i++){
    sum+=i;
    var j=i+1;
}
console.log('Var (j) is accessible to its parent scope:',j);
console.log('Let variable (i) is not accessible outside its local scope:',i);