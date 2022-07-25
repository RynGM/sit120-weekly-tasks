let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
console.log(fruits);

// Find method
console.log(fruits.find((fruit) => fruit === 'Apple'));
console.log(fruits.find((fruit) => fruit === 'Apple1'));

// findIndex method
// -1 means not found
console.log(fruits.findIndex((fruit) => fruit === 'Apple'));
console.log((firstIndex = fruits.findIndex((fruit) => fruit === 'Apple1')));

// Push method
// Push adds an element to the end of the array
// Push return a new length of the array
console.log(fruits.push('Kiwi'));
console.log(fruits);

// Pop method
// Pop removes the last element of the array.
// Pop returns the removed element
console.log(fruits.pop());
console.log(fruits);

let numbers = [5, 2, 6, 1, 7];
// We can use sort method to sort the array.
console.log(numbers.sort());

// slice method
// Slice is to cut out a part of the array.
console.log(fruits.slice(2, 5));

// If we only give one parameter, it will cut out the rest of the array.
console.log(fruits.slice(1));
console.log(fruits.slice(-1));

// Using foreach to iterate through an array
fruits.forEach((fruit) => console.log(fruit));

let names = ['Bob', 'George', 'Anne', 'Django'];

// Reverse the names
console.log(names.reverse());

// Check for Bob with 'Includes'
if (names.includes('Bob')){
    console.log("We've got a Bob!")
} else {
    console.log("No bobs here");
}

// A numeric array
let moreNumbers = [8, 2, 7, 3, 1];

// Removes and returns the first element of the array.
console.log(moreNumbers.shift());