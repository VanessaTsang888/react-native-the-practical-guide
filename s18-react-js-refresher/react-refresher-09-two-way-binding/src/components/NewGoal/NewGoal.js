/*******************************************************************************************
Lecture 284 - User Input and Two-Way Binding:

The user want to be able to add their own goals. Therefore, we need to reset the input after 
user has added a new goal. To build this feature we need 'state management' on the NewGoal 
component code file. This means once the user has entered their goal into the input field 
and clicked the Add Goal button then the input should auto reset back to an empty String.

When the state changes then it should rerender our JSX code.

**********************************************************************************************/

// Need to import `useState` hook/func so that we can use it inside of our NewGoal component.
import React, { useState } from 'react';

import './NewGoal.css';

// State management also known as Two-Way Binding.
// The second element is a func to update the state to reset it to an empty String aster
// user have set a new goal.
const NewGoal = (props) => {
  const [enteredText, setEnteredText] = useState('');

  const addGoalHandler = (event) => {
    event.preventDefault();

    // text prop or key has the changed value
    const newGoal = {
      id: Math.random().toString(),
      text: enteredText,
    };

    // Update user input to reset it bacl to empty String with this func
    setEnteredText('');

    props.onAddGoal(newGoal);
  };

  // With every keystroke we change the `enterText`.
  // This value don't depend on the previous state and will rerender this component on every keystroke.
  //
  const textChangeHandler = (event) => {
    setEnteredText(event.target.value);
  };

  // input component: reflect the current value stored in `enteredText` key or prop.
  // Bind `value` prop to `enteredText` to tell input component that the value displayed in the
  // input should be the value stored in `enteredText`.
  // This latest value `enteredText` will be reflected on the input element.
  return (
    <form className='new-goal' onSubmit={addGoalHandler}>
      <input type='text' value={enteredText} onChange={textChangeHandler} />
      <button type='submit'>Add Goal</button>
    </form>
  );
};

export default NewGoal;
