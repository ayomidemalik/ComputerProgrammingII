//console.log("Testing");

//var a;
//a = 10;
//b = 11;
//var c = 12;
//a = "Me";
//console.log(a);

//Arithmetic operations
/*a = 10;
b = 20;
c = a + b;
console.log(c);
console.log(b-a);
console.log(b/a);
console.log(a*b);
console.log(a**2);
a++;
console.log(a);
b--;
console.log(b);
*/

/*String operations
firstname = "Abdulmalik";
lastname = "Memud";
fullname = firstname + " " + lastname;
console.log(fullname);
*/

//Comparison operations
/*a = 10; 
a < 11; //Returns true 
console.log(a < 11); //Displays true in console 
var test = a > 20; //Declares a variable named test and gives it the value of false. 
console.log(test); //Displays false in console 
a >= 10; //Returns true 
a <= 20; //Returns true 
a == 10; //Returns true 
a === "10"; //Returns false because a holds an integer value of 10 and not string value "10"
*/

//Logical operations
/*a = 1; 
b = 2; 
console.log(a < 3 && b < 3); //Prints true as both a and b contain values that are less than 3. 
console.log(a > 3 && b < 3); //Prints false as the first condition (a > 3) is not true. 
console.log(a > 3 || b < 3); //Prints true as at least one condition (b < 3) is true. 
console.log(!(a < 3)); //Prints false as condition (NOT a < 3) is false. 
console.log(!(a < 3) || !(b > 3)); //Prints true as one of the conditions (NOT b > 3) is true. 
*/

//Ternary (conditional) operations
/*var age = 17; 
var adult = (age > 20)? "Yes" : "No"; 
console.log(adult); //This should display the string "No"
*/

//Bitwise operations
/*5 << 1; //Equivalent of 5 * 2 
5 <<2; //Equivalent of 5 * 4 
5 <<3; //Equivalent of 5 * 8 
40 >> 1; //Equivalent of 40 / 2 
40 >>2; //Equivalent of 40 / 4 
40 >>3; //Equivalent of 40 / 8
*/

//The typeof operator
/*typeof  "Pius Onobhayedo";  //Returns the value "string" 
typeof false;  //Returns the value "boolean" 
typeof (10 + 10);  //Returns the value "number" 
typeof 33;  //Returns the value "number"
*/

//The if/else statement
/*var minimumVotingAge = 18; 
var age = 17; 
if (age < minimumVotingAge){ 
console.log("Not eligible to vote"); 
}else{ 
console.log("Eligible to vote"); 
} 
*/

//The switch statement
/*var dayOfTheWeekCount = 1; 
switch (dayOfTheWeekCount){ 
case 1: 
console.log("Sunday"); 
break; 
case 2: 
case 3: 
case 4: 
case 5: 
case 6: 
case 7: 
console.log("Monday"); 
break; 
console.log("Tuesday"); 
break; 
console.log("Wednesday"); 
break; 
console.log("Thursday"); 
break; 
console.log("Friday"); 
break; 
console.log("Saturday"); 
break; 
default: 
console.log("Sorry, day of the week numbered " + dayOfTheWeekCount + " does not exist") 
} //The switch statement prints out Sunday
var ageRange = "below 13"; 
switch (ageRange){ 
case "below 1": 
console.log("Infant"); 
break; 
case "below 13": 
console.log("Pre-teen"); 
break; 
case "below 20": 
console.log("Teenager"); 
break; 
default: 
console.log("Adult") 
}//This switch statement should print out Pre-teen. */

//The for loop
/*for (var c = 1; c < 11; c++){
    if (c==7) continue;
    console.log(c);
}
*/
//The while loop
/*var n = 0; 
while(n != 5){ 
    n = Math.floor((Math.random() * 10)); //math.random will give a floating point number between 0(inclusive) and 1(exclusive)
    console.log(n) //math.floor rounds the number downwards to the nearest whole integer, making the result an integer
}
*/

/*var n = 0; 
while(n != 5){ 
    n = Math.random(); //generate a random number between 0 and 1 exclusive of 1. 
    n = n * 10;//multiply the number generated by 10 
    n = Math.floor(n); //round down 
    console.log(n); //print the final number 
} 
*/

//The do...while loop
/*var x = 0; 
do{ 
    x+= 1; 
    console.log(x) 
}while(x < 10) 
*/

/*var readlineSync = require('readline-sync'); //make the module just installed available for use in our program 
var answer; //declare variable named answer; 
do{ 
    //use question() function to read input and assign the value to answer 
    answer = readlineSync.question('What should I do? [Type "exit" for me to quit]: '); 
    console.log('You asked me to '+ answer) 
}while(answer != 'exit')
*/

/*var readline = require('readline'); //load the readline module into the runtime environment 

//Next, create the input/output interface as required by readline module. 
var readlineAsync = readline.createInterface({ 
    input: process.stdin, 
    output: process.stdout 
}); 

//Next, declare and define a function named recursiveReadLineAsync 
function recursiveReadLineAsync()  { 
    readlineAsync.question('What should I do? [Type "exit" for me to quit]: ', function (answer){ 
        console.log('You asked me to ' + answer) 
        if (answer == 'exit') //Condition for terminating further self call 
            return readlineAsync.close(); //quit the function if answer == exit  
        recursiveReadLineAsync(); //No exit yet. Call self again to ask another question. 
}); 
}; 
//Finally, invoke the defined function to start the recursion 
recursiveReadLineAsync();
*/

//Function declaration
//By direct declaration

/*function addTwoNumbersA(number1, number2){
    return number1 + number2; //Add the two numbers passed when function is called
}

//By expression 
//var addTwoNumbersB = function(number1, number2){
//    return number1 + number2;
//}

console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA and print return value (50).
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB and print return value (50).


console.log(addTwoNumbersA(20,30)); //Call addTwoNumbersA defined below. Correct! 
function addTwoNumbersA(number1, number2){ 
    return number1 + number2; //Add the two numbers passed when function is called 
} 
console.log(addTwoNumbersB(20,30)); //Call addTwoNumbersB defined below. Wrong! 
var addTwoNumbersB = function(number1, number2){ 
    return number1 + number2; //Add the two numbers passed when function is called 
*/

//Passing arguments to function by value or by reference
//Define a function that receives a number to be squared 
/*function square(number){ 
    number = number**2; 
    return number; 
} 
var number = 20; //Declare variable that holds number to be squared 
var numberSquared = square(number); //Pass number (by value) to the square() function  
console.log(numberSquared); //The function returns 400 
console.log(number); //The value of number variable outside the function remains 20
*/

//Capturing arguments as array within the function - the arguments object
/*function multiplier(){
    var product = 1;
    for (var x = 0; x < arguments.length; x++){
        product = product * arguments[x];
    }
    return product;
}
console.log(multiplier(10,30)); //Prints 300 to the console
console.log(multiplier(10,30,10)); //Prints 3000 to the console
*/

//Function scope variables
/*var accumulatedTotal = 0; //Declare and initialize a global variable. 
//Declare function named sum that expects two parameters named number1 and number2. 
function sum(number1, number2){ 
    //The variables named total, number1 and number2 below are function scope variables. 
    //They are not visible from outside the function.  
    var total = number1 + number2; 
    //Update the global variable named accumulatedTotal. 
    //Even though not declared within the function, it is visible. 
    accumulatedTotal = accumulatedTotal + total;  
    return total; 
} 
console.log(sum(2,3)); //Call sum() function and print to console the total returned. 
console.log(sum(10,20)); //Call sum() function and print to console the total returned. 
console.log(accumulatedTotal); //Show the latest value held in the global variable. This should return 35
*/

//Array literal
//Declare a variable named vehicles and assign an array literal that contains three elements 
/*var vehicles = ["car","lorry","trailer"];  
console.log(vehicles); //Prints out the array literal [ 'car', 'lorry', 'trailer' ] 
//Declare a variable named basket and assign an empty array literal. 
var basket = [ ]; 
console.log(basket); //Prints out the array literal [ ]  
*/

//Declare a variable named myExpressions and assign an array literal which contains expressions. 
/*var myExpressions = ["car", 2+3, 10, true];  //The second element includes a plus operation 
console.log(myExpressions); //Prints out [ 'car', 5, 10, true] 
*/

//Accessing array elements
/*console.log(myExpressions[0]); //Prints out 'car' 
console.log(myExpressions[1]); //Prints out 5 
console.log(myExpressions[2]); //Prints out 10 
console.log(myExpressions[3]); //Prints out true 
myExpressions[3] = false; //Change the expression at position 3. 
console.log(myExpressions[3]); //Prints out false
*/

//Array literals can also contain undefined elements as shown below
/*var myExpressions = ["car", , 10, true];  //The second element (i.e. index position 1), is undefined 
console.log(myExpressions[1]); //Prints out undefined 
*/

//Object literal - contains a list of other expressions in curly braces
/*var myObject = { 
    name: { //nested object: an object in an object
    firstName : "Pius", 
    surname: "Onobhayedo" 
    }, 
    expertise: "Software design and development", 
    languages: ["Python","JavaScript","Java","C++"], 
    isRetired: false,
    favouriteCombination: 3 + 3
}

//Accessing object properties
console.log(myObject.name); //Prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject['name']); //Also prints out { firstName: 'Pius', surname: 'Onobhayedo' }. 
console.log(myObject.expertise); //Prints out Software design and development 
console.log(myObject['expertise']); //Also prints out Software design and development 
console.log(myObject.languages); //Prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject['languages']); //Also prints out [ 'Python', 'JavaScript', 'Java', 'C++' ] 
console.log(myObject.isRetired); //Prints out false 
console.log(myObject['isRetired']); //Also prints out false 
console.log(myObject.favouriteCombination); //Prints out 6 
console.log(myObject['favouriteCombination']); //Also prints out 6 

//Accessing nested objects 
console.log(myObject.name.firstName); //Prints out Pius. 
console.log(myObject['name']['firstName']); //Also prints out Pius. 
*/

/*myObject.favouriteCombination = 9 + 9; 
console.log(myObject.favouriteCombination); //Prints out 18 

//Adding new property to an existing object
myObject.newProperty = "another property added"; //Add a new property named newProperty 
console.log(myObject); //Prints out the string, another property added 
*/

//The delete and in operators for objects
/*
var phones = { 
    make: 'Samsung', 
    model: 'S7', 
    cost: 500 
} 
console.log('make' in phones); //Prints out true 
delete phones.make; //Delete property phones.make 
console.log('make' in phones); //Prints out false
*/

//User-created object blueprints
/*function Person(firstName, lastName, height, weight){ 
    //Below are properties 
    this.firstName = firstName; 
    this.lastName = lastName; 
    this.height = height; 
    this.weight = weight; 
    //Below is a method 
    this.getFullName = function(){ return this.firstName + " " + this.lastName} 
}


//Instantiating an object
var person1 = new Person("Pius", "Onobhayedo",1.72, 80); 
var person2 = new Person("Mary", "Joseph", 1.7, 70);

console.log (person1.firstName); //Prints out Pius 
console.log (person1.getFullName()); //Prints out Pius Onobhayedo 
console.log (person2.firstName); //Prints out Mary 
console.log (person2.getFullName()); //Prints out Mary Joseph 


//Differentiating between constructor and prototype in classical JavaScript
person1.complexion = "light brown"; //Specify complexion value for object instance, person1. 
console.log(person1.complexion);  //Prints out light brown. 
console.log(person2.complexion); //Prints out the default value for complexion i.e. dark brown. 
*/

//Similarly
/*Person.prototype.getComplexion = function ( ){ 
    return this.complexion 
} 
Person.prototype.setComplexion = function (complexion){ 
    this.complexion = complexion; 
} 
person1.setComplexion('black'); //Use the method just added to blueprint person 
console.log(person1.getComplexion( )); //Prints out black. 
*/

//Built-in object blueprints - Math
Math.E; //The static property E holds the value of Euler’s number i.e. 2.718281828459045. 
Math.PI; //The static property PI holds the value of Pi i.e. 3.141592653589793. 
Math.cos(45); //Method returns the cosine of number passed as argument. 
Math.abs(-30); //Method returns the absolute number equivalent of argument. 
Math.random( ); //Method returns random floating-point number between 0 and 1, inclusive of 0 and exclusive of 1. 
Math.max(10,5,60); //Method returns the maximum number among the arguments passed.  
Math.min(10,5,60); //Method returns the minimum number among the arguments passed.

//Built-in object blueprints - Date
/*
var today = new Date(); //Get today’s date 
//Instantiate new Date passing year, month-index and day in numbers 
var birthday = new Date(1980,4,30); //Note that month index is 0-11 for Jan-Dec 
//Instantiate new Date passing equivalent datetime string with date same as above 
var birthday = new Date('May 30, 1980 19:00:00'); 
//Instantiate new Date passing date and time using numbers 
var birthday = new Date(1980, 4, 30, 19, 0, 0);//Passing year, month-index, day, hour, min, sec as numbers 
//Below is a simple function that calculates present age 
function calculateAge(birthday){ 
    var today = new Date(); 
    var difference = today - birthday; //Returns equivalent of time elapsed since 1970 i.e. epoch time
    //Get the equivalent year for difference
    var yearEquivalent = new Date(difference).getFullYear();
    //Subtract 1970 to get age
    return yearEquivalent - 1970;
}

//Invoke function calculateAge()
var birthday = new Date (1980,12,30);
console.log(calculateAge(birthday)); //Prints out birthday
*/

/*function sleep(milliseconds) { 
    console.log("Going to sleep for " + milliseconds + " milliseconds...") 
    var begin = new Date().getTime(); 
    do{ 
        nextTime = new Date().getTime(); 
    }while(nextTime - begin < milliseconds) 
    console.log("Sleep over"); 
} 
//Call sleep 
sleep(3000); 

*/
/*
//RegExp
var re = new RegExp('xyz'); //'xyz' is the pattern to be matched
var re = /xyz/;
var searchString = "Locate xyz pattern in this text. The xyz could be in XYZ location"; 
//Simply check if pattern is in searchString using test() method. 
console.log(re.test(searchString)); //Should return true as xyz pattern is present in searchString. 
//Find index position using exec() method 
console.log(re.exec(searchString)); //Returns an array containing pattern, index and input as shown in comment below
/*[ 'xyz', 
index: 7, 
input: 'Locate xyz pattern in this text. The xyz could be in XYZ location' ]*/ 
//Find index position using search() method of String object passing the pattern as argument. 
/*
console.log(searchString.search(re)); //Returns index position.
*/

/*var result; 
while((result = re.exec(searchString))!= null){ //loop until no more match 
    //display the index found and the string 
    console.log("Index position " + result.index + " contains " + result[0]); 
}
*/

//JSON String