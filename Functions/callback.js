function doSomething(name,age,task){
    console.log('Hello',name);
    console.log('Your age is',age);
    task();
}
function eatNow(){
    console.log('You must eat now');
}
function takeShower(){
    console.log('Now take shower');
}
doSomething('Jamal',20,eatNow);
doSomething('Kamal',30,takeShower);