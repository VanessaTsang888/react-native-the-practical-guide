/****************************************************************************************
Lecture 280. Handling Events:

We want to be able to add new goals on our Goals App.
Add Goal button -> button click event on `<form></form>` element within return statement.
We want to handle the click event in the client-side with JS and not on the server-side.
Our server only serves the index.html file located inside the public directory.
*****************************************************************************************/

import React from 'react';

import './NewGoal.css';

// Nested callback func will get `event` parameter which is also an Object.
// Using hard-coded dummy text but will make this dynamic later.
const NewGoal = () => {
  const addGoalHandler = (event) => {
    event.preventDefault(); // Prevent browser from sending some request to the BE.

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal!',
    };

    console.log(newGoal); // Testing in VSCode -> Terminal.
  };

  // As a value we pass a func with a pointer to reference the `addGoalHandler`
  // func so we not calling the func but just referencing or point to it.
  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' />
      <button type='submit'>Add Goal</button>
    </form>
  );
};

export default NewGoal;
