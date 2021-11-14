const ages1=[10,15,18,22];
const ages2=[33,20,29,39];
const ages3=[40,30,50];
const allAges=ages1.concat(ages2).concat([5]).concat(ages3);
console.log('Concat all arrays without spread operator:',allAges);

// using ... we can get all the elements of an array
const allAges2=[...ages1,...ages2,5,...ages3];
console.log('\nConcat all arrays with spread operator:',allAges2);

const findMax=Math.max(20,50,12,3);
console.log('\nFinding max between numbers:',findMax);

const findMax2=Math.max(...ages1); // max takes elements as a parameter not a list, that's why spread operator is used to get all the elements of the array.
console.log('\nFinding max from array elements:',findMax2);