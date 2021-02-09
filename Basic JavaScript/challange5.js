/* Let's remember the first coding challange where Mark and John compared their BMIs.Let's now implement the same functionality
with objects and methods.
1.For each of them,create an object with properties for their full name,mass and height.
2.Then add a method to each object to calculate the BMI.Save the BMI to the object and also return it from the method.
3.In the end,log to the console who has the highest BMI,together with the full name and the respective BMI.Don't forget they might
have the same BMI.

Remember:BMI = mass/height^2 (mass in kg and height in meter) */
var mark={
    name:'Mr. Mark',
    mass:50,
    height:13.5,
    calculateBMI:function(){
        return this.mass/(this.height*this.height);
    }
};
var john={
    name:'Mr. John',
    mass:40,
    height:10.5,
    calculateBMI:function(){
        return this.mass/(this.height*this.height);
    }
};

function compareBMI(johnBMI,markBMI){
    if(johnBMI>markBMI)
        console.log(john.name,' has the highest BMI and his BMI is ',johnBMI);
    else if(johnBMI<markBMI)
        console.log(mark.name,' has the highest BMI and his BMI is ',markBMI);
    else
        console.log(john.name,' and ',mark.name,' both have the equal BMI and their BMI is ',johnBMI);
}
var johnBMI=john.calculateBMI();
var markBMI=mark.calculateBMI();
compareBMI(johnBMI,markBMI);
