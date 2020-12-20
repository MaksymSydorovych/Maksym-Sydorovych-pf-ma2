//question 1
Create an array called petArray with 3 string items in it: "cat", "cow", "dog".
//answer 1
var petArray = ["cat", "cow", "dog"];
//question 2
Console log the value of the second item in petArray.
//answer 2
console.log(petArray[1]);
//question 3
Add the item "sheep" to petArray using the push method.
//answer 3
petArray.push (sheep);
//question 4
Console log how many items there are now in petArray using the length method.
//answer 4
console.log(petArray.length);
//question 5
Create an object called catObject with 3 properties: name, colour, age. Add appropriate values (and type of values) for each of these properties.
//answer 5
var catObject = {
	name: "Alex",
	colour: "grey",
	age: "2"
};
//question 6
Console log the value of the third property of catObject.
//answer 6
console.log(catObject.age);
//question 7
Take the value of catObject (the {} part) and place it inside an array called catArray.
//answer 7
var catArray = [
	{
		name: "Alex",
		colour: "grey",
		age: "2"

	}
];
//question 8
Loop through catArray and console log each property of each object inside (there will be only 1 object inside).
//answer 8
for (var i = 0; i < catArray.length; i++){
	console.log(catArray[i]);
};
//question 9
Create a function called logToConsole. The function should accept 1 argument. Decide on the name of the argument and console log its value inside the function.
//answer 9
function logToConsole(argumentOne){
	console.log(argumentOne);
};
//question 10
Call the logToConsole function and pass in the value "donkey".
//answer 10
function logToConsole(argumentOne){
	return "donkey";
};
logToConsole();
