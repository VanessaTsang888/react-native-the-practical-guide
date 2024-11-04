/*********************************************************************************

Lecture 282. Managing State:

Regular JS Array - React ignors it but when we change this Array it should
update the JSX of the component.

To use state we need to import `useState`  from react. Its a built-in func 
and a React Hook. A func that we can execute inside of functional components
such as App Component.
The `conact()` method does not modify the original arrays or strings but returns 
a new one containing the concatenated elements.

********************************************************************************/

import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

// Regular JS Array - React ignors it and we need to tell React not to ignor it
// and instead when we change this Array it should update the UI/the JSX of the component
// in this case of the App component.
// Pass our Array of goals as the initial state. This tell React that we have some state.
// Store it in constant as we need to get access to this initial state so we can use it in
// the rest of this component. This hook returns two elements, the latest state and a func
// that allows us to update that state snapshot.
const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // Update our course goals by adding a new goal.
    setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));
  };

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
