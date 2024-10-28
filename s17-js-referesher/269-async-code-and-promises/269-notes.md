# Lecture 269. Asynchronus Code and Promises

When logged out, we will see 'Hello', 'Hi!' on two different lines before we see
'Timer is done!' because Node.js / JS in general do not block code execution
until the Timer block of code is done. This means the last two lines of code is
Synchronus code that will logout immediately but the `setTimeout()` will execute
with a 2 seconds delay.

The Arrow func in the Timer func is a Callback func as it should callback and
execute sometime in the future.

**_Promises_**

When working with Async code, there is multiple techniques of handling it. Having
another func named `fetchData` and inside setup a timer so we don't need to setup
a DB. Using `then()` blocks of code is more readable than having infinitely nested
callbacks.

```js
/* Asynchronus code:
Will execture code in the body after a 2 seconds delay.
*/
setTimeout(() => {
  console.log('Timer is done!');
}, 2000);

/* Synchronus code:
as will execute one after another - no delay.
*/
console.log('Hello');
console.log('Hi!');
```

## Promises Feature in JS

When we have nested Callback func's, we can use Promises instead for more
readable code. There are third party packages that write Promises for us so
most of the time we don't need to mannually write them.

```js
/* Create a new Object based on a Constructor func which is built into JS and node.js. 
take a Callback which gets two arguments, resolved and reject. First arg completes the
Promise - resolves it successfully. Second one rejects it - throws an error. The
Async code is inside the body of this Constructor func. Set timeout func do not 
give us a Promise API so we need a Callback in it so no need for a Callback inside 
`fetchData` func. Instead we need `resolve()` func as we successfully return the 
resolve value. In resolve() and after defining the data, we just `return` it.
*/

const fetchData = () => {
  // Promise Constructure func.
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 2000);
  });
  // Return the Promise as we have defined the data in the resolve func above.
  return promise;
};

// We see 'Done!' from the loggout twice as we call `fetchData()` twice.
setTimeout(() => {
  console.log('Timer is done!'); // logout to test in Terminal
  // Call the `fetchData` func but when the timer completes.
  // `.then()` is callable on a Promise and code in the body of this method will
  // execute when the Promise has been returned.
  // We have a chain of `then` blocks. Returning the statement converts it into
  // a Promise that instantly resolves. Then we add another `then` block which is
  // refering to the Promise in the return statement. This is more readable than
  // having infinitely nested callbacks.
  fetchData()
    .then((text) => {
      console.log(text); // -> Done!
      return fetchData(); // This is a Promise
    })
    .then((text2) => {
      console.log(text2); // -> Done!
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
```

### Async Await

This is another way of managing nested Callbacks (rather than using Promises feature) two modern
keywords in modern JS.

The syntax for Async Await can be more complex than Promises.
