/********************************************************************************************
Lecture 281. Parent - Child Communication:

To pass data from parent component to child component we use a callback func 
called `addNewGoalHandler`.
This gives us away to communicate back from the child to the parent with help of such a func.
***********************************************************************************************/

import React from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const courseGoals = [
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ];

  // Callback func `addNewGoalHandler` for parent - child communication
  // will get triggered upon the `onSubmit` event on form element -> NewGoal component.
  const addNewGoalHandler = (newGoal) => {
    courseGoals.push(newGoal); // Push `newGoal` constant into the `courseGoalsabove` Array.
    console.log(courseGoals);
  };

  // Pass the Callback func `addNewGoalHandler` into NewGoal child component
  // via `onAddGoal` prop so that the user can add a new goal when they click the Add Goal button
  // within the form element.

  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal onAddGoal={addNewGoalHandler} />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
