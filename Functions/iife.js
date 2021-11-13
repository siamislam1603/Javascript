function printName(name){
    console.log('Function declaration:',name);
}
printName('Jalal');

// Immediately imvoked function expression
(function(name){
    console.log('Immediately imvoked function expression:',name);
})('Kamal');