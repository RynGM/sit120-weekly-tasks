var helloworld = 'Hello World';
console.log(helloworld[0]);

// Comparing strings
let a= 'a';
let b = 'b';
if (a < b){
    console.log(a + ' is less than ' + b);

} else if (a > b){
    console.log(a + ' is greater than ' + b);
} else {
    console.log(a + ' and ' + b + ' are equal.');
}

// Lowercase and uppercase
let c = 'c';
let d = 'd';

console.log(c.toUpperCase());
console.log(d.toUpperCase());
console.log(c + d);

// Writing long strings
let longString =
    'This is an example of a very long string that ' +
    'needs to be read across multiple lines because ' +
    'the code would be otherwise unreadable.';

console.log(longString);
longString = 
    'This is a very long string which needs \
to wrap across multiple lines because \
otherwise my code is unreadable.';

console.log(longString);

// String length
let txt = "AOIFJOEWIFJOEJFEOWJFEIOJE";
let length = txt.length;

console.log('The text length is ' + length);


// Replacing string content
let text = "Eat a taco!";
let newText = text.replace("taco", "nutritional breakfast");

console.log(newText);

// Concatination
let text1 = "Free";
let text2 = "Pizza";
let text3 = text1.concat(" ", text2);

console.log(text3);

