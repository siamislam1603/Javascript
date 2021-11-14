const obj={name:'Kamal', phone:0232132231, age:23, friends:['Jalal','Rahim','Selim','Jamal'], info:{
    country:'asjus',
    leader:'dsakfj'
}};
const {phone,friends,country,age}=obj; //Object destructuring, property must be same with the object property otherwise, it'll show undefined.
console.log(age,friends,phone,country);

const {leader}=obj.info;
console.log(leader);

// Array destructuring
const array=['Selim','Amir',"Alam",'Jamal','Kamal','Siddik'];
const [firstName,secondName,...restNames]=array;
console.log(firstName,secondName,restNames);