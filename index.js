/* POP method removes the last item from the list of items in the Array, the POP method also returns a value, the item removed from the array can be stored in a varible */


// use the POP methid without storing the return value for the 1st example
let myArray = ["milk", "cheese", "bread", "juice"];

myArray.pop(); //this removes the last item in the Array

console.log ("myArray", myArray);
// now remove the "bread" and use the return value in the new varible 'popItem'

// we store the item that was removed in a varible named 'popItem'
let popItem = myArray.pop();

console.log ("myArray", myArray);
console.log ("poppedItem", popItem);


