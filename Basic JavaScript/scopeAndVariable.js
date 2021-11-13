//Var variables can be accessed within the scope and can be redefined and assigned multiple times
if(true){
    var varVariable='This is me';
    var varVariable='This is Siam';
}
console.log(varVariable);

//let and const variables can be accessed only within it's block and can't be redefined multiple times.
if(true){
    let letVariable='This is a let variable';
    letVariable='This let variable only can be reassigned but can not be redefined';
    const constVariable={
        name:'Siam',
        Dept:'CSE'
    };
    constVariable.name='Siam Islam';//property of a const object can be modified but it can't be reassigned like let variable
    console.log(letVariable);
    console.log(constVariable,'Const variable cannot be reassigned but if it is a object then its property can be modified only');
}