/*Mark and John are trying to compare their BMI(Body Mass 
Index),which is calculated using formula: BMI=mass/height^2.
(mass in kg and height in meter).

1.Store Mark's and John's mass and height in variables
2.Calculate both their BMIs
3.Create a boolean variable containig information about
whether Mark has a higher BMI than John.
4.Print a string to the console containig the variable from 
step-3.(Something like "Is Mark's BMI higher than John's? 
true").
*/
var markMass=50,markHeight=20,johnMass=60,johnHeight=16;
var markBMI=markMass/(markHeight*markHeight);
var johnBMI=johnMass/(johnHeight*johnHeight);
var isMarkBMIHigher = markBMI > johnBMI;
console.log('Is Mark\'s BMI higher than John\'s?',isMarkBMIHigher);