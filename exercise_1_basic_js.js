/**
 * Created by Ibrahim on 7/21/2018.
 */


/* In the console, enter any expression that
    uses +, -, / or *, and whose answer evaluates to 42
*/
console.log("Task 1 (Operators)");
console.log(60/2+22-10);




/*
Enter one expression that satisfies all of the following two criteria:
The answer evaluates to 28
The expression contains 3 different values
*/
console.log("Task 2 (Operators)");
console.log(40/2+8);



/*
 Enter one expression that satisfies all of the following three criteria:
 The answer evaluates to 36
 The expression contains 3 different values
 The expression contains exactly one set of parenthesis
 * */
console.log("Task 3 (Parenthesis)");
console.log((20*2)-4);

/*
 Enter one expression that satisfies all of the following three criteria:
 The answer evaluates to 90
 The expression contains 6 different values
 The expression contains exactly two set of parenthesis
 * */
console.log("Task 4 (Parenthesis)");
console.log((20*2)+(80/2)+(20-10));


/*
 Build a String with the name of your favorite fruit and favorite drink separated by space and each word starting with capital letter
 */
console.log("Task 5 (String)");
console.log("Favorite fruit Pineapple and Favorite drink Mango shake");


/*
 Build the following output in one String:
 Hello World
 This is “Monday!”
 */
console.log("Task 6 (String)");
console.log("Hello World! \n This is 'Monday!'");


/*Typing ‘Hello world ’+ 8/4 in console gives the following string Hello World 2
 Build a string in the same order which gives result Hello World 14. Use 4 values and 3 operators in mathematical expression
 */
console.log("Task 7 (Concatenation)");
console.log("Hello World! " + 8/4);
console.log("Hello World! " + (4/2+6*2));

/*Build the following output in one String:
 Hello World 9/3
 */
console.log("Task 8 (String)");
console.log("Hello World! 9/3");

/*Create two variables ‘a’ and ‘b’ and store any numeric value in them.
Create a third variable ‘c’ and store the value of ‘a’ and ‘b’ variables multiplied.
 */
console.log("Task 9 (Variable)");
var a = 5;
var b = 6;
var c = a * b;
console.log(c);


/*Store the following into variables: year of birth and current year.
 Output your age on screen
 */
console.log("Task 10 (Variable)");
var year_of_birth = 1993;
var current_year = 2018;
var age = current_year - year_of_birth;
console.log(age);


/*Store the following into variables: job title, geographical location, favorite car
 Output on your screen like this:
 ‘You will be a web developer in Pakistan, and will drive Honda Civic’
 */
console.log("Task 11 (Variable)");
var job_title = "web developer";
var geographical_location = "Pakistan";
var favorite_car = "Honda Civic";

console.log("You will be a" + " " + job_title + " " + "in" + " " + geographical_location + ", and will drive " + favorite_car);


/*Store a radius into a variable
 Calculate the circumference in a variable based on the radius and output like this: ‘Circumference of circle is NN’
 Calculate the area in a variable based on the radius and output like this: ‘Area of circle is NN’
 */
console.log("Task 12 (Variable)");
var radius = 20;
var circumference = 2 * Math.PI * radius;
var area = Math.PI * radius**2;

console.log("You will be a" + " " + job_title + " " + "in" + " " + geographical_location + ", and will drive " + favorite_car);



/*Store a Celsius temperature in a variable. Convert it to Fahrenheit in a separate variable
 F = C X 9/5 + 32
 Store a Fahrenheit temperature in a variable. Convert it to Celsius in a separate variable
 C = (F-32) X 5/9
 */
console.log("Task 13 (Variable)");
var celsius  = 35;
var F = celsius * 9/5 + 32;
console.log("Fahrenheit: " + F);

var fahrenheit = 95;
var C = (fahrenheit-32) * 5/9;
console.log("Celsius: " + C);



/*Create two variables and swap their values using a third variable */
console.log("Task 14 (Variable)");
var a  = 2;
var b = 3;
var b = [a, a = b][0];
console.log("Swap: " + b);

// Second Method
var x = 10;
var y = 20;
var tmp = x;
x = y;
y = tmp;
console.log("Value of X=" + x + " and value of Y=" + y);



/*Print your name 10 times using console.log()*/
console.log("Task 15 (Loops)");
for(var i = 0; i < 10; i++){
    console.log("Muhammad Ibrahim");
}


/*Print numbers from 10 to 1 on the console using for loop*/
console.log("Task 16 (Loops)");
for(var i = 10; i > 0; i--){
    console.log(i);
}

/*Write a condition to compare two integers and display the larger one. */
console.log("Task 17 (If/else)");
var a = 12;
var b = 20;

if(a > b){
    console.log(a + " is Greater");
}
else{
    console.log(b + " is Greater");
}


/*Write a condition to sort three numbers. Display an alert box to show the results
 Sample Input: 0, -1, 4
 Output:  4, 0, -1
 */
console.log("Task 18 (If/else)");

var num1= 0;
var num2=-1;
var num3= 4;
if (num1>num2 && num1>num3)
{
    if (y>z)
    {
        console.log(x + ", " + y + ", " +z);
    }
    else
    {
        console.log(x + ", " + z + ", " +y);
    }
}
else if (y>x && y >z)
{
    if (x>z)
    {
        console.log(y + ", " + x + ", " +z);
    }
    else
    {
        console.log(y + ", " + z + ", " +x);
    }
}
else if (z>x && z>y)
{
    if (x>y)
    {
        console.log(z + ", " + x + ", " +y);
    }
    else
    {
        console.log(z + ", " + y + ", " +x);
    }
}