let name = 'kumar';
let age = 28;

console.log(name, age);

let a = 10;
let b = 5;
let c = a + b;
console.log(c);

if (c % 2 == 0) {
  console.log(`${c} is an even number`);
} else {
  console.log(`${c} is an odd number`);
}

let num = 0;

if (num > 0) {
  console.log(`${num} is a positive number`);
} else if (num < 0) {
  console.log(`${num} is a negative number`);
} else {
  console.log(`${num} is a equal number`);
}

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

for (let i = 0; i <= 20; i++) {
  if (i % 2 == 0) {
    console.log(`Even Numbers is : ${i}`);
  }
}

function sum(a, b) {
  return a + b;
}

console.log(sum(2, 5));

for (let i = 0; i <= 20; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log('Fizzbuzz');
  } else if (i % 3 == 0) {
    console.log('Fizz');
  } else if (i % 5 == 0) {
    console.log('buzz');
  } else {
    console.log(i);
  }
}

let arr = [1, 2, 3, 4];
let total = arr.reduce((prev, cur) => {
  return prev + cur;
}, 0);
console.log(total);

for (let i = 0; i <= 12; i++) {
  console.log(`${i} x 2 = ${i * 2}`);
}

function findMax(arr) {
  let max = arr[0];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

console.log(findMax([3, 7, 2, 9]));

const subtract = (a, b) => a - b;

console.log(subtract(9, 6));

let color = 'blue';

switch (color) {
  case 'red':
    console.log('it is a red color');
    break;
  case 'green':
    console.log('it is a green color');
    break;
  case 'blue':
    console.log('it is a blue color');
    break;

  default:
    console.log('there is a no color');
}

function outer() {
  let counter = 10;
  function inner() {
    counter++;
    console.log(counter);
  }
  inner();
}
outer();

let y = 10;
let result = y > 10 ? 'true' : 'false';
console.log(result);

let js = 'amazing';
if (js === 'amazing') {
  console.log('amazing to learn a javascript');
} else {
  console.log('slightly difficult to learn');
}

var n = 5;

for (let i = 0; i <= n; i++) {
  console.log(n * i);
}
console.log(n);

let d = (e = f = 25 - 10 - 5);
console.log(d, e, f);
console.log(d);

let isAge = 18;

if (isAge > 18) {
  console.log(`${isAge} is Eligible  to apply for voter id & driving liscence`);
} else {
  console.log(
    `${isAge} is not Eligible  to apply for voter id & driving liscence`,
  );
}

const inputyear = '1991';
console.log(Number(inputyear) + 18); // type conversion
console.log(inputyear + 18);

let todos = [
  {
    id: 1,
    name: 'vicky',
    age: 20,
  },
  {
    id: 2,
    name: 'raja',
    age: 25,
  },
  {
    id: 3,
    name: 'bhai',
    age: 20,
  },
  {
    id: 4,
    name: 'vasanth',
    age: 24,
  },
  {
    id: 5,
    name: 'vasu',
    age: 25,
  },
  {
    id: 6,
    name: 'arun',
    age: 24,
  },
  {
    id: 7,
    name: 'suriya',
    age: 27,
  },
];

for (let i = 0; i < todos.length; i++) {
  console.log(todos[i]);
}

let todoFilter = todos.filter((todo) => todo.age > 20);
console.log(todoFilter);

let todoMap = todos.map((todo) => todo.name);
console.log(todoMap);

let todoFind = todos.find((todo) => todo.age > 20);
console.log(todoFind);

todos.forEach((todo) => {
  console.log(todo);
});

console.log(String(23), 23);
console.log(typeof 23);

console.log('23' - '10' - 3);
console.log('23' + '10' + 3);

let nu = '1' + 1;
nu -= 1;
console.log(nu);

//  5 falsy values 0,null,undefined,NaN
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean('jonas'));
console.log(Boolean({}));
console.log(Boolean(''));

let money = 0;

if (money) {
  console.log("so you don't have a money and then you don't spend it ");
} else {
  console.log('you have a money & job so you can spend it');
}

let obj = {
  name: 'ashwin',
  role: 'player',
};
// obj['name'] ="kumar";

console.log(obj.name);
console.log(obj);

const age1 = 18;

if (age1 == 18) {
  console.log('you are now eligible! (loose)');
}
if (age1 === 18) {
  console.log('you are eligible now! (strict)');
}

let ageChecking = 29;
if (ageChecking >= 20) {
  console.log('Age is greater or equal 20');
} else if (ageChecking < 30) {
  console.log('Age is lesser than 30');
} else {
  console.log(
    'therefore age is not greater than 20 and then age is less than 30 ',
  );
}

let day = 'wednesday';

switch (day) {
  case 'monday':
    console.log(`${day} is a weekday`);
    break;
  case 'tuesday':
    console.log(`${day} is a weekday`);
    break;
  case 'wednesday':
    console.log(`${day} is a weekday`);
    break;
  case 'thursday':
    console.log(`${day} is a weekday`);
    break;
  case 'friday':
    console.log(`${day} is a weekday`);
    break;
  default:
    console.log('not a valid day ');
}

if (day === 'monday') {
  console.log(' it is an monday');
} else if (day === 'tuesday') {
  console.log('it is an tuesday');
} else if (day === 'wednesday' || day === 'thursday') {
  console.log('it is an wednesday');
  console.log('it is an thursday');
} else if (day === 'friday') {
  console.log('it is an friday');
} else {
  console.log('Not a valid day');
}

let number1 = 29;
let final = number1 >= 10 ? 'it is greater than 10' : 'it is lesser than 10 ';
console.log(final);

function newFn(name, age) {
  console.log(`I am ${name} and my age is ${age}`);
}

newFn('vicky', 23);

function calcAge(birthyear) {
  const Age = 2026 - birthyear; // function declaration
  return Age;
}
console.log(calcAge(1995));

const calcAge1 = function (birthyear) {
  return 2026 - birthyear; // function expression
};
console.log(calcAge1(2001));

// arrow function
const calcAge2 = (birthyear) => {
  return 2026 - birthyear;
};
const Age2 = calcAge2(2002);
console.log(Age2);
// another method
const calcAge3 = (birthyear) => 2026 - birthyear;
console.log(calcAge3(2002));

let yearsUntilRetirement = (birthyear, name) => {
  const calculateAge = 2026 - birthyear;
  const retirement = 65 - calculateAge;
  return `${name} retires in ${retirement} years`;
};
console.log(yearsUntilRetirement(2013, 'sukumaran'));

// function calling another function

const cutFruitPieces = (fruits) => {
  return fruits * 4;
};

const fruitProcessor = (lemon, pinapple) => {
  const lemonPieces = cutFruitPieces(lemon);
  const pinapplePieces = cutFruitPieces(pinapple);
  const juice = `juice with ${lemonPieces} piece of lemon and ${pinapplePieces} piece of pinapple .`;
  return juice;
};
const fruitJuice = fruitProcessor(4, 4);
console.log(fruitJuice);

let friends = ['sukumaran', 'perumal', 'saravanan', 'alagar'];
console.log('friends counting :', friends.length);
console.log(friends[friends.length - 1]);
friends[3] = 'raman ';
console.log(friends);
friends.push('ruby');
console.log(friends);
friends.unshift('sarguru');
console.log(friends);
friends.pop();
console.log(friends);
console.log(friends.indexOf('perumal'));
console.log(friends.indexOf('ruby'));
console.log(Array.isArray(friends));
console.log(friends.includes('sukumaran'));

function calcTip(bill) {
  return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [151, 69, 36, 111];
const tips = [
  calcTip(bills[0], calcTip(bills[1], calcTip(bills[2]), calcTip(bills[3]))),
];
console.log(bills, tips);

const userDetails = {
  name: 'jonas',
  age: 29,
  profession: 'teacher',
};

console.log(userDetails.profession);
userDetails['profession'] = 'tech teacher';
console.log(userDetails);

for (let i = 0; i <= 10; i++) {
  console.log(`Lifting Repetition : ${i}`);
}

let years = [1991, 1998, 2001, 2002, 1969];
let ages = [];
for (let i = 0; i < years.length; i++) {
  ages.push(2026 - years[i]);
}
console.log(`current age is  : ${ages}`);

const jonas = [
  'jonas',
  'schmedtmann',
  'teacher',
  ['michael', 'peter', 'steven'],
];

for (let i = jonas.length - 1; i >= 0; i--) {
  console.log(jonas[i]);
}

let i = 1;

while (i <= 10) {
  console.log('while loop :', i);
  i++;
}

let dice = Math.round(Math.random() * 6) + 1;
// console.log(dice)
while (dice !== 6) {
  console.log(`dice value is : ${dice}`);
  dice = Math.round(Math.random() * 6) + 1;
}

// hoisting
console.log(undefined);
if (!numProducts) deleteShoppingCart();
var numProducts = 10;

function deleteShoppingCart() {
  console.log('All The Products Will Be Deleted!');
}

// this keyword  -> never ever use a arrow fn as a method
const schmedtmann = {
  name: 'schmedtmann',
  job: 'teacher',
  birthYear: 1990,
  calcuAge: function () {
    return 2026 - this.birthYear;
  },

  greetFn: function () {
    console.log(`hey ${this.name}`);
  },
};
console.log(schmedtmann.calcuAge());
schmedtmann.greetFn();

// const fr = schmedtmann.calcuAge;
// console.log(fr())

const User = {
  firstName: 'raju',
  lastName: 'bhai',
  birthAge: 25,
};

//  shallow copy
const newUser = User;
newUser.firstName = 'raj';
console.log(User);
console.log(newUser);

// deep copy -> it will not modify the original take it as a reference
let userClone = structuredClone(User);
userClone.birthAge = 27;
console.log(User);
console.log(userClone);

const restaurant = {
  name: 'classico Italiano',
  location: 'Via Angelo Tavantia 23,Firenze , Italy',
  catergories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  startMenu: ['Focaccia', 'Bruschetta', 'Garlic', 'Bread', 'Caprese', 'Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  Order: function (starterIndex, mainIndex) {
    return [this.startMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
// destructuring

const [first, , second] = restaurant.catergories;
console.log(first, second);

const { startMenu, mainMenu } = restaurant;
console.log(startMenu, mainMenu);

let [main, secondary] = restaurant.catergories;
console.log(main, secondary);

// swtiching variables
const temp = main;
main = secondary;
secondary = temp;
console.log(main, secondary);

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starter, mainer] = restaurant.Order(3, 2);
console.log(starter, mainer);

const nested = [2, 4, [5, 6]];
const [l, , [m, o]] = nested;
console.log(l, m, o);

const num1 = [3, 13, 27];
const [p = 1, q = 1, v = 1, x = 0] = num1; // by default values wil be set like that
console.log(p, q, v, x);

let num2 = 3;
let num3 = 9;
const object = { num2: 63, num3: 69 };
({ num2, num3 } = object);
console.log(num2, num3);

// rest operator because on left side ,only a variable separated by commas not as values
let res = [1, 2, 3, 4, 5];
let [one, two, ...rest] = res;
console.log(one, two, rest);

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
};
console.log(add(2, 3));
console.log(add(5, 3, 7, 2));
console.log(add(8, 2, 5, 3, 2, 1, 4));
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// or
let numb = 36;

let guess = numb ? numb : 3;
console.log(guess);

let numb1 = 96;
let guess2 = numb1 || 3;
console.log(guess2);

// and
console.log('jonas' && 23);
console.log(0 && undefined);
console.log(54 && {});

//  null or undefined
let nul = '';
let nullish = nul ?? 0;
console.log(nullish);

// for-of

for (let [key, rest] of res.entries()) {
  console.log(`${key + 1} ${rest}`);
}

//  nullish and optional chaining

console.log(restaurant.Order?.(0, 2) ?? 'N/A');

console.log(restaurant.startMenu?.[4] ?? 'N/A');

/*  maps and sets

sets => has a unique values , set  doesn't allow the duplicates 
map => allows the duplicate values, it can be iterable into a new array

*/

const orderSet = new Set([
  'pasta',
  'pizza',
  'noodles',
  'biriyani',
  'pasta',
  'pizza',
  'Chicken rice',
]);
console.log('orderedList :', orderSet);
console.log(orderSet.size);
console.log(orderSet.has('noodles'));
console.log(orderSet.has('mutton biriyani'));
orderSet.add('chicken burger');
orderSet.delete('pasta');
// orderSet.clear()
console.log(orderSet);

for (set of orderSet) {
  console.log(set);
}

let restMap = new Map();
restMap.set(1, 10);
restMap.set(2, 20);
restMap.set(3, 30);
restMap.set(4, 40);
restMap.set(5, 50);
console.log(restMap);
restMap.delete(2);
restMap.has(3);
console.log(restMap);
console.log(restMap.size);

/*
data structure => collection of data
types =>    simple list(array,set) , key value pairs(object,maps)
*/

// strings
let passanger = 'jOnAs';

let passengerCorrect =
  passanger[0].toUpperCase() + passanger.slice(1).toLowerCase();

console.log('Before :', passanger);
console.log('After  :', passengerCorrect);

let email = 'hello@js.io';
let loginEmail = '   Hello@js.Io';

const normalize = loginEmail.toLowerCase().trim();

if (email === normalize) {
  console.log('Email Login Successfully !');
} else {
  console.log('Failed To Login !');
}

let wrestlerName = 'johnchina five ';

let finalName = wrestlerName.replace('five', 'champ');
console.log(finalName);

// split and join

const [FirstName, LastName] = 'raju priyan'.split(' ');
console.log(FirstName, LastName);

let NewName = ['Mr.', FirstName.toUpperCase(), LastName.toUpperCase()].join(
  ' ',
);
console.log(NewName);

let padNum = 5;
console.log(String(padNum).padStart(4, '0')); // "0005"
console.log(String(padNum).padEnd(4, '0')); // "0005"

// higher order function

let upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

let transformer = function (str, fn) {
  console.log(`original string : ${str}`);
  console.log(`Transformmed string : ${fn(str)}`);
};

transformer('learning javascript concept !', upperFirstWord);

// functions returning functions
const greet = function (message) {
  return (name) => {
    console.log(`${message} ${name}`);
  };
};
const greetFn = greet('Hey');
greetFn('JavaScript !');
greetFn('welcome !');

// arrow
const greetArr = (greeting) => (Name) => console.log(`${greeting} ${Name}`);
greetArr('Welcome to')('Javascript masteringf!');

/*call and apply
call => function invokes immediately and passes arguments one by one
apply => passes arguments into an array

*/

let person1 = {
  perName: 'Ruban',
};

function greetFunc(city) {
  console.log(`Hi ${this.perName} from ${city} `);
}

greetFunc.call(person1, 'Chennai');

let person2 = {
  perName1: 'kutty',
};

function greetFunc1(city, country) {
  console.log(`Hi ${this.perName1} from ${city} in ${country}`);
}

greetFunc1.apply(person2, ['madurai', 'india']);

// bind => does't call the function immediately.it will be return into a new function

let person3 = {
  perName2: 'sukumaran',
};
const greetFunc2 = function () {
  console.log(`My Name is ${this.perName2}`);
};

let newGreetFunc = greetFunc2.bind(person3);
newGreetFunc();

//  immediately invoke function expression (only executed once never again )

const runOnce = function () {
  console.log('This will never run again!');
};
runOnce();

// IIFE (immediately execute the function without saving)
(function () {
  console.log('This will be never run again!');
})();

(() => console.log('This will be also never run again!'))();

(function (num) {
  let terNum = num === 10 ? "yes,it's correct" : "No,it's false";
  console.log(terNum);
})(10);

// counter function (parent to child)
let counterFun = function () {
  let counter = 1;
  function childFn() {
    counter++;
    console.log(counter);
  }
  childFn();
};

counterFun();

// ForEach iteration (does'nt use the break & continue)

let movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((move) => {
  if (move > 0) {
    console.log(`ForEach Loop ->  Positive Number :${move}`);
  } else if (move < 0) {
    console.log(`ForEach Loop -> Negative Number : ${move}`);
  } else {
    console.log('There is a nothing');
  }
});
console.log('========================================================');

// For Of

let movementsOne = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (let movement of movementsOne) {
  if (movement > 0) {
    console.log(`For Of Loop -> Positive Number :${movement}`);
  } else if (movement < 0) {
    console.log(`For Of Loop -> Negative Number : ${movement}`);
  } else {
    console.log('There is a nothing');
  }
}

// Map

let currencies = new Map([
  ['IND', 'India'],
  ['UAE', 'United Arab Emirates'],
  ['EUR', 'Euro'],
]);

currencies.forEach((key, value) => {
  console.log(` Using Map : ${key} : ${value}`);
});

console.log('============================================================');

// Set

let currenciesUnique = new Set(
  ['UAE', 'United Arab Emirates'],
  ['EUR', 'Euro'],
  ['IND', 'India'],
);

currencies.forEach((keys, values) => {
  console.log(`Using Set : ${keys} : ${values}`);
});

//  map , filter & Reduce

let mapMethod = [3, 1, 4, 3, 2];

let mapResult = mapMethod.map((arr) => arr * 2);
console.log('Map :', mapResult);

let filterMethod = [3, 1, 4, 3, 2];

let filterResult = filterMethod.filter((arr1) => arr1 > 2);
console.log('Filter :', filterResult);

let reduceMethod = [3, 1, 4, 3, 2];

let Total = reduceMethod.reduce((prev, cur) => {
  return prev + cur;
}, 0);

console.log('Reduce :', Total);

let movementDesc = movements.map(
  (mov, i) =>
    `Movement ${i + 1} : You ${mov > 0 ? `${mov} Deposited` : `${mov} Withdraw`}`,
);

console.log(movementDesc);

//find method => will not return a new array , it will return a boolean value or match the condition

let FindResult = movements.find((moves) => moves > 200);
console.log(FindResult);

// findIndex method

const idx = movements.findIndex((m) => m === 70);
console.log(idx); // index of first 3, or -1 if not found

// findlast

const findLast = movements.findLast((moves) => moves < 0);
console.log(findLast);

const findLastIdx = movements.findLastIndex((mov) => mov < 0);
console.log(findLastIdx);

/* Returns a boolean value
  some => at least one satisfiy
  Every  => Every condition will be satisfied
  */

let someResult = movements.some((some) => some > 200);
console.log(someResult);

let EveryResult = movements.every((eve) => eve > 100);
console.log(EveryResult);

// flat & flatMap => multiple arrays return into a single array

const flatArr = [[1, 2, 3], [4, 5, 6], 7, 8, 9];
console.log(flatArr.flat());

const flatMap = flatArr.map((flat) => console.log(flat));

// sort

let sortArr = [10, 20, 30, 40, 50, 60, 70, 80, 90];
console.log(sortArr.sort());

let sortResult = sortArr.sort((a, b) => b - a);
console.log(sortResult);

// array grouping => (actual variable , call back fn)

let groupMovements = Object.groupBy(movements, (movement) =>
  movement > 0 ? 'Deposites' : 'WithDrawals',
);
console.log(groupMovements);

//  non-destructive methods => toString,toReversed , with => update the index value

const newMovement = movements.with(1, 2000);
console.log(newMovement);

// converting and checking number

console.log(Number('23'));
console.log(Number.parseInt('2.5'));
console.log(Number.parseFloat('3.9'));
console.log(Number.isNaN('50px'));
console.log(isNaN('hey hiii'));
console.log(Number.isNaN('e23f'));

// math and rounding

console.log(Math.sqrt(25));
console.log(5 ** 2);
console.log(Math.round(6.9)); //7
console.log(Math.abs(-65621));
console.log(Math.max(5, 18, 23, 11, 2));
console.log(Math.min(5, 18, 23, 11, 2));
console.log(Math.ceil(4.2)); //5
// both floor and trunc are same
console.log(Math.floor(5.5)); //5
console.log(Math.trunc(6.9)); //6
console.log(10 / 5); // quotient 2
console.log(9 % 3); // remainder 0
