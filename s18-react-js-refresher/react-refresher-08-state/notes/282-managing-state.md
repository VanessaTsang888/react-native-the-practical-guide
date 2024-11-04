# Lecture 282. Managing State

As we can see from the Console tab, now the new goal is part of the new Array but the output on screen didn't change. This leads up to 'state' a core concept of React.

App.js

React don't re-render the JSX code and therefore when user clicks the Add Goal button the component don't re-render. Instead we have to tell React when it should re-render and we do so by using a concept called 'state' that will manage data when changed.

Inside of App component we call `useState` and to it we pass our Array of goals as the initial state. This tell React that we have some state. We need to get access to this initial state so we store it in a constant so we can use it in the rest of the component as `courseGoals` is now missing everywhere. `useState` returns an Array of two elements. The first element is our latest state snapshot (either our initial state or our updated state). The second element of that Array returned by `useState` is a func that allows us to update that state snapshot.
Now we want to update our course goals by adding a new goal `setCourseGoals((prevCourseGoals)`.

We can have multiple state pieces and they are watched independently.
