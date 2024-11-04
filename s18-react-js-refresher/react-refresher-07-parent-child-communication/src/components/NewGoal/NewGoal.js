/******************************************************************************************
Lecture 281. Parent - Child Communication:

To pass data from parent component to child component we use a callback func 
called `addNewGoalHandler`.
******************************************************************************************/

import React from 'react';

import './NewGoal.css';

const NewGoal = (props) => {
  const addGoalHandler = (event) => {
    event.preventDefault();

    const newGoal = {
      id: Math.random().toString(),
      text: 'My new goal!',
    };

    // Call `onAddGoal` as that is the name we chosen in App component.
    // Execute this as it holds a pointer to a func.
    props.onAddGoal(newGoal);
  };

  // `onSubmit` is an Event Handler but it is also just a prop.
  // `className` is also a prop on the form element. In vanilla HTML
  // it would be an Attribute.
  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' />
      <button type='submit'>Add Goal</button>
    </form>
  );
};

export default NewGoal;
