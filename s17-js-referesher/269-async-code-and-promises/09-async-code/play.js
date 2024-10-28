// Async Code and Promises
/*
What is Async code?
The concept:
Although the Async code is written before the Sync code, it is the
data inside the Sync code that will get logged out before the Async
code as the Callback func inside the Set Timer func will only
execute once the 2 seconds has expired.
*/

/*
With this code we don't need to set-up a DB.
Write Promise rather than nested Callbacks.


*/
const fetchData = () => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Done!');
    }, 2000);
  });
  return promise;
};

/* 
`setTimeout()` is a func built into Node.js 
inside we define a func that should execture after a certain timer expired, we use Arrow Func
but can use named func etc. The second argument is the timer i.e. set to 2 seconds we expres
this in milli-seconds -> 2000 milli-seconds. In the body we logout some plain text to test
this built-in func works as expected. Run file to test -> cmd: `node play.js`. For 2 seconds
nothing happens then we see 'Timer is done!' logged out in Terminal.

Frist parameter is the Callback func, the second param is how long until the 
the Callback func will get executed.

Once the 2 seconds on the Set Timer func has expired, then JS will use the
Callback func (Arrow func) to callback and execute it. Therefore:
1. JS will reconise the Callback func and move on to execute the Synchronus code.
2. Only after the 2 seconds in the Set Timer func has expired, it will
callback and execute the Callback func which is the Arrow func.

When we have nested Callback func's, we can use a feature called Promises 
instead for more readable code.

*/

setTimeout(() => {
  console.log('Timer is done!'); // logout to test in Terminal
  fetchData()
    .then((text) => {
      console.log(text);
      return fetchData();
    })
    .then((text2) => {
      console.log(text2);
    });
}, 2000);

console.log('Hello!');
console.log('Hi!');
