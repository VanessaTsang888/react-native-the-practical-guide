// Lecture 268. Destructuring:

/*
We can quickly access element(s) from Objects or from Arrays by their property name (Objects) 
or by their position (Array) and to drop (not delete just not used in our func ect) the data we 
don't need on that particular code snippet we working on.

In object destructuring we have to pull-out values by their property name but in Array destructuring
we don't need to because our elements in the Array have no names and instead they are pulled-out by 
their position.
*/

// Person object:
const person = {
  name: 'Max',
  age: 29,
  greet() {
    console.log('Hi, I am ' + this.name);
  },
};

// Pull out the name from the person object.
const printName = (personData) => {
  console.log(personData.name);
};

// This func call with `person` object passed-in as a parameter will logout in terminal as 'Max'.
printName(person); // Max

// Another way is to use Object Destructuring.
// We us a pair of braces and specify the propert we are interested in such as `name`.
// This will be stored in a local variable called 'name' and
// it will be pulled-out inside of the console statement and used here.
// When we use the same func call we also get 'Max' printed out which is expected.
/*
We can also logout other properties at the sametime:

const printName = ({ name, age, greet }) => {
  console.log(name);
};

*/

const printName = ({ name }) => {
  console.log(name);
};

printName(person); // Max

// We can also do the destructuring outside.
// Update on 24/10/2024:
// However, 'name' in JavaScript is Deprecated. The `name` global variable refers to `window.name`,
// which has a special meaning and is considered deprecated by TypeScript. This is because `window.name`
// is not a standard JavaScript property and its behavior can vary across browsers.

// Two new constants. First one to store the `name` data, and second one to store the `age` data.
const { name, age } = person;

// The objects we are logging out here are retrieved via object destructuring.
console.log(name, age); // Max 29

// We can also destructure Arrays:

const hobbies = ['Sports', 'Cooking'];
// Unlike object destructuring, here we can choose what we want to call our
// constants as in Arrays our elements have no names, they are instead pulled-out by position.
const [hobby1, hobby2] = hobbies;
// Logout two different values that we got from the Array Destructuring above.
console.log(hobby1, hobby2); // Sports Cooking
