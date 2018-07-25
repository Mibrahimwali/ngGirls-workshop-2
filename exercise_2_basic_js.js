/**
 * Created by Ibrahim on 7/23/2018.
 */

/**
 *Create a function that takes your name as input and then print it on screen using console.log()
 */
console.log("Task 1 (Functions)");
function myname(name){
    console.log(name);
}

myname("Ibrahim");


/**
 *Create a function that takes two integers as input and return multiplication of those two integers.

 Hint: Use return command to return a value
 */
console.log("Task 2 (Functions)");
function multi(num1, num2){
    return num1*num2;
}
multi(2,2);


/*
* Create two functions with the same name. One function accepts one input and return the same value
* while second function accepts two variables and return their sum.
 Call these two functions separately with input values
 * */
console.log("Task 3 (Functions)");
function fone(num1){
    return num1;
}
function fone(num2, num3){
    return num2 + num3;
}

fone(2);

fone(2,2);



/*
* Write a JavaScript function that reverse a number
 Example: Input 4567
 Output: 7654
 * */
console.log("Task 4 (Functions)");
function reverse_a_number(n)
{
    n = n + ""; //first convert integer to string
    return n.split("").reverse().join(""); //split() is use to convert string in array variable, reverse() is use to reverse array values,
                                            // join() is use to join array values in string.
}
console.log(reverse_a_number(4567));



/*
*Declare an array of 10 integers and print them by incrementing 1 to each of the number using for-loop
 * */

console.log("Task 5 (Array)");

var arrayint = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (var i = 0; i < arrayint.length; i++){
    arint[i] += 1;
}
alert(arrayint);


/*
* Write a JavaScript function that accepts an array of integers and returns the sum of the elements of the array
 Hint: Use ‘for’ loop to iterate over the array
 * */

console.log("Task 6 (Array)");
var sum = 0;
function forsum(numarray) {
    for (var i = 0; i < numarray.length; i++) {
        sum += numarray[i]
    }
    return sum;
}

var numbers = [10, 20, 30, 40];

forsum(numbers);



/*
* Write a JavaScript loop that runs through 1-15. For each iteration,
* it should check if the number is even or odd and display results like: ‘0 is even’
 Hint: Use ‘for’ loop and if-else condition
 * */

console.log("Task 7 (Array)");

for (var i=0; i <= 15; i++) {
    if (i === 0) {
        console.log(i +  " is even");
    }
    else if (i % 2 === 0) {
        console.log(i + " is even");
    }
    else {
        console.log(i + " is odd");
    }
}


/*
*Create a JavaScript object which includes your biodata in multiple properties
 Example: name, date of birth, place of birth, etc.
 * */

console.log("Task 8 (Objects)");

var biodata = {name:"Ibrahim", dob:"25-09-1993", pob:"Karachi", nationality:"Pakistani", skills:"Web Development"};


/*
* Display your biodata using the object created in previous exercise
 Hint: Use ‘for-in’ loop
 * */
console.log("Task 9 (Objects)");

var txt = "";
var biodata = {name:"Ibrahim", dob:"25-09-1993", pob:"Karachi", nationality:"Pakistani", skills:"Web Development"};
var key;
for (key in biodata) {
    txt += biodata[key] + " ";
}
console.log(txt);


/*
* Find out if an object has certain property using .hasOwnProperty method and display the result on the console

 Hint: Find if your biodata object has the property of ‘age’
 * */
console.log("Task 10 (Objects)");

var biodata = {name:"Ibrahim", dob:"25-09-1993", pob:"Karachi", nationality:"Pakistani", skills:"Web Development"};

if(biodata.hasOwnProperty("name")){

    console.log(biodata.name);
}


/*
* Write a JavaScript function that accepts a string as a parameter and find the longest word within the string

 Hint: Use split, for-loop, and length property
 * */

console.log("Bonus Task");

function find_longest_word(str)
{
    var array = str.match(/\w[a-z]{0,}/gi); //used to retrieve the matches when matching a string against a regular expression
    var result = array[0]; //sorting first word in variable

    for(var x = 1 ; x < array.length ; x++)
    {
        if(result.length < array[x].length) //comparing length of variable
        {
            result = array[x];
        }
    }
    return result;
}
console.log(find_longest_word('Exercise two basic'));



//end
//Happy Coding