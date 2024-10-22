// Lecture 266. Arrays, Objests and Reference Types:

/**********************************************************************************
In JS Arrays are a type of Object that stores a collection of values.
When we store the Array in the constant and then change 
the values or items in the Array, this is legal and valid JS
as Arrays are a Reference Type meaning they store a reference to an
object rather than the object itself. This allows for sharing and mutability, 
making arrays and objects powerful tools for building dynamic apps.
This rule applies to Objects as well.
*********************************************************************************/

// Objects are a reference type:
const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

// Arrays are reference types:
const hobbies = ['Sports', 'Cooking'];

/******************************************************************************
Example to evidence that an Array is a reference type:
We change the above Array to add another hobby called 'Programming' 
to the existing Array that is stored in the `hobbies` constant.
This is elgal and valid JS and when we use the `push()` method on the
 `hobbies` constant the changed or updated Array is display as expected. 
******************************************************************************/

hobbies.push('Programming'); // [ 'Sports', 'Cooking', 'Programming' ]
console.log(hobbies);

/***************************************************************************
Reference types only store an address or pointing at the place in memory where 
that Array is stored and that address has NOT changed by us adding a new element.
So the thing that is stored in the constant is just the address and has NOT changed.
Therefore, our constant value has NOT changed. The thing it is pointing at has
changed but that don't matter here so its fine for us to edit a constant value -
we only editing the constan thing its point at which is the address, not the
actual Array itself. 
***************************************************************************/

/***************************************************************************
Reference Types in JavaScript
In JavaScript, reference types are a category of data types that store a reference to an object, rather than the object itself. Arrays, objects, and functions are all reference types.

Key Characteristics of Reference Types
Reference: Reference types store a reference to an object, rather than the object itself.
Mutability: Reference types are mutable, meaning their contents can be changed after creation.
Sharing: Multiple variables can reference the same object, allowing for shared state.

Examples:
***************************************************************************/

// 1. Array as a Reference Type:

const arr1 = [1, 2, 3];
const arr2 = arr1;
arr2.push(4); // modifies the original array
console.log(arr1); // [1, 2, 3, 4];
