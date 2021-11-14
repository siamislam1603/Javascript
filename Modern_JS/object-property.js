const students=[
    {id:45,name:'Jalal'},
    {id:54,name:'Kamal'},
    {id:64,name:'Hasan'}
];
allNames=students.map(student=>student.name);
console.log(allNames);
const requiredStudents=students.filter(student=>student.id>50);
console.log(requiredStudents);
const biggerOne=students.find(student=>student.id>50);
console.log(biggerOne);