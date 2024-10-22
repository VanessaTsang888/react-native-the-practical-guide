// Lecutre 267. Spread Operator & Rest Parameters

/*
We want to implement a pattern where when we add a new hobby, 
we don't edit the original Array but create new Array with all 
the old values and the new values. This is common pattern called
immutability (we never edit existing values but we always replace 
them with copies plus the changes). The idea is we avoid erros as
we always have this clear approach of copy, then edit and don't 
edit existing objects which might lead to more unreadable code.

*/

const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

const copiedPerson = { ...person };
console.log(copiedPerson);

const hobbies = ['Sports', 'Cooking'];

/* We can aopy an Array using a slice operator. 

const copiedArray = hobbies.slice();
console.log(copiedArray); // [ 'Sports', 'Cooking' ]

*/

/* Netted Array:
Or instead of slice we could creat a new Array and add `hobbies` constant in it.

const copiedArray = [hobbies];

This will display an Array with another Array inside it, known as nested Arrays.
Its an new Array where the first element is the old Array which is the exact same 
object not a copy of that. This is not what we want as we want to use the Spread Operator
to do the job.

console.log(copiedArray); // [ [ 'Sports', 'Cooking'] ]
*/

// Use the Spread Operator which is the three dots we can add in front of an Array or an Object.

const copiedArray = [...hobbies];
/* 
This will display an Array with another Array inside it, known as nested Arrays.
continue from 2:25 of https://www.udemy.com/course/react-native-the-practical-guide/learn/lecture/20604082#overview
*/
console.log(copiedArray);

const toArray = (...args) => {
  return args;
};

console.log(toArray(1, 2, 3, 4));
