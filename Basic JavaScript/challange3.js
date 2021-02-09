/* 1.Create an array with some years where persons were born.
2.Create an empty array(just [])
3.Use a loop to fill the array with the ages of the persons.
4.Use another loop to log into the console whether each person is of full age(18 or older),as well as their age.
5.Finally,create a function called printFullAge which receives the vector of years as an argument,executes the steps 2,3,4 &
returns a vector of true/false boolean values:true if the person is of full age(>=18 years) and false if not(<18 years)
6.Call the function with two different vectors and store the results in two variables:full_1 and full_2

Example input:[1965,2008,1992]
example output:[true,false,true]

Hint:You can use a loop not only to read from an array,like y[i],but also set values in an array,like y[i]=... you can also use 
the specific array methods */
var obj={
    born:[1965,2008,1992],
    years:[],
    calculateAge:function(yearsOfBirth){
        return 2021-yearsOfBirth;
    },
    printFullAge:function(years){
        var fullAge=[];
        for(var i=0;i<3;i++){       
            var calcAge=this.calculateAge(years[i]);
            if(calcAge>=18){
                console.log('Full age as person is ',calcAge,' years old (>=18)');
                fullAge.push(true);
            }
            else{
                console.log('Not Full age as person is ',calcAge,' years old (<18)');
                fullAge.push(false);
            }
        }
        return fullAge;
    }
};

for(var i=0;i<3;i++){
    obj.years[i]=obj.born[i];
}

var full_1=obj.printFullAge(obj.years);
var full_2=obj.printFullAge([2010,2008,1992]);
console.log(obj.years,full_1);
console.log([2010,2008,1992],full_2);