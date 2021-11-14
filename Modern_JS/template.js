const firstName='Kamal';
const lastName='Uddin';
let res=firstName+' '+lastName+' is a good boy.';
console.log('Without es-6 template:',res);

// es-6 template
res=`${firstName} ${20+30} is a good boy.`;
console.log('\nWith es-6 template:',res);

res="Rahim is a good boy.\n"
    + "He is a regular student.\n"
    + "He is sincere to his studies."
console.log('\nWithout es-6 template:',res);

res=`Rahim is a good boy.
He has obtained ${40*2}% marks in all subjects.
He makes his parents pround.`
console.log('\nWith es-6 template:',res);