/* Remember the tip calculator challange? Let's create a more advanced version using everything we learned!

This time,John and his family went to 5 different restaurants.The bills were $124,$48,$268,$180 and $42.
John likes to tip 20% of the bill when the bill is less than $50,15% when the bill is between $50 and $200,
and 10% if the bill is more than $200.

Implement a tip calculator using objects and loops:
1.Create an object with an array for the bill values
2.Add a method to calculate the tip
3.This method should include a loop to iterate over all the paid bills and do the tip calculations.
4.As an output,create 1) a new array containing all tips,and 2) an array containing final paid amounts(bill+tip).
HINT:start with two empty arrays [] as properties and then fill them up in the loop.

EXTRA AFTER FINISHING:Marks's family also went on a holiday,going to 4 different restaurants.The bills were 
$77,$375,$110,and $45.Mark likes to tip 20% of the bill when the bill is less than $100,10% when the bill is 
between $100 and $300,and 25% if the bill is more than $300(different than John)

5.Implement the same functionality as before,this time using Mark's tipping rules.
6.Create a function(not a method) to calculate the avg. of a given array of tips.HINT: Loop over the array,and 
in each iteration store the current sum in a variable (starting from 0).After you have the sum of the array,divide
it by the number of elements in it(that's how you calculate the avg.)
7.Calculate the avg. tip for each family
8.log to the console which family paid the highest tips on avg.
*/
var johnObj={
    bill:[124,48,268,180,42],
    paidBill:[],
    tip:[],
    calculateTip:function(){
        for(var i=0;i<this.bill.length;i++){
            if(this.bill[i]<=50){
                this.tip[i]=this.bill[i]*0.2;
            }
            else if(this.bill[i]>50 && this.bill[i]<200){
                this.tip[i]=this.bill[i]*0.15;
            }
            else if(this.bill[i]>=200){
                this.tip[i]=this.bill[i]*0.1;
            }
            this.paidBill[i]=this.tip[i]+this.bill[i];
        }
        console.log('John Bills:',this.bill);
        console.log('John Tips:',this.tip);
        console.log('John Paid Bills:',this.paidBill);
    }
};
function avgTips(obj){
    var sum=0;
    for(var i=0;i<obj.tip.length;i++){
        sum+=obj.tip[i];
    }
    return sum/obj.tip.length;
}
johnObj.calculateTip();

var markObj={
    bill:[77,375,110,45],
    paidBill:[],
    tip:[],
    calculateTip:function(){
        for(var i=0;i<this.bill.length;i++){
            if(this.bill[i]<=100){
                this.tip[i]=this.bill[i]*0.2;
            }
            else if(this.bill[i]>100 && this.bill[i]<300){
                this.tip[i]=this.bill[i]*0.1;
            }
            else if(this.bill[i]>=300){
                this.tip[i]=this.bill[i]*0.25;
            }
            this.paidBill[i]=this.tip[i]+this.bill[i];
        }
        console.log('Mark Bills:',this.bill);
        console.log('Mark Tips:',this.tip);
        console.log('Mark Paid Bills:',this.paidBill);
    }
};
markObj.calculateTip();

console.log('John avg. tip:',avgTips(johnObj));
console.log('Mark avg. tip:',avgTips(markObj));

