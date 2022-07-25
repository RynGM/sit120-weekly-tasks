const now = new Date(Date.now());
console.log('the current time is');
console.log(now.toDateString());

// const today = new Date();

// const birthday = new Date('1995-12-17-T03:24:00');

console.log(now.getDay());
console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());


now.setFullYear(2020);
console.log(now.getFullYear());

now.setDate(10);
console.log(now.getDate());

let newDate = new Date();
setTimeout(() => {
    newDate = Date.now()
    console.log(newDate - now);
}, 1000);

console.log(now.toLocaleString('en-GB', { timeZone: 'UTC'}));

console.log(now.toTimeString());

console.log(now.toLocaleTimeString('en-GB'));