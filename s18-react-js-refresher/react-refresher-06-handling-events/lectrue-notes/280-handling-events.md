# Lecture 280. Handling Events:

**_App.js_**

Passing data from parent to child components.

**_NewGoals.js_**

We want to be able to add new goals on our Goals App.
Add Goal button -> button click event on `<form></form>` element within return statement.
We want to handle the click event in the client-side with JS and not on the server-side.
Our server only serves the index.html file located inside the public directory.

As a value we pass a func with a pointer to reference the `addGoalHandler` func so we not calling the func but just referencing or point to it.
