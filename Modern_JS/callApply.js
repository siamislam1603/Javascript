const normalPerson={
    firstName:'Rahim',
    lastName:'Uddin',
    salary:15000,
    getFullName:function(){
        console.log(`${this.firstName} ${this.lastName}`);
    },
    chargeBill:function(amount){
        console.log(this);
        this.salary-=amount;
        return this.salary;
    }
};
normalPerson.chargeBill(1000);
normalPerson.chargeBill(3000);
console.log(normalPerson.salary);

const heroPerson={
    firstName:'Hero',
    lastname:'Jalal',
    salary:20000
}
const friendlyPerson={
    firstName:'Hero',
    lastname:'Jamal',
    salary:40000
}

//Bind can be used to apply another object's method
const heroChargeBill=normalPerson.chargeBill.bind(heroPerson); // this will update (this) to the heroPerson object.
heroChargeBill(2000);
heroChargeBill(2000);
console.log('Hero person (bind):',heroPerson.salary);
console.log('Normal person:',normalPerson.salary);

const friendlyChargeBill=normalPerson.chargeBill.bind(friendlyPerson);
friendlyChargeBill(4000);
friendlyChargeBill(3000);
console.log('Friendly person (bind):',friendlyPerson.salary);
console.log('Normal Person:',normalPerson.salary);

// We don't need to declare any function to apply call like bind. it can be directly applied to the new object to call another object's method.
console.log('\n call method:');
normalPerson.chargeBill.call(heroPerson,5000);
normalPerson.chargeBill.call(heroPerson,8000);
console.log(heroPerson.salary);

// apply is also same as call but we need to send arguments as array not the elements.
console.log('\n apply method:');
normalPerson.chargeBill.apply(friendlyPerson,[3000]);
console.log(friendlyPerson.salary);