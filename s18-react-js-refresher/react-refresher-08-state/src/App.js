/*********************************************************************************

Lecture 283 - More About State:

`setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));`
Update our course goals by adding a new goal.
No chance React deferring updates - bulletproof approach which will always work.

********************************************************************************/

import React, { useState } from 'react';

import GoalList from './components/GoalList/GoalList';
import NewGoal from './components/NewGoal/NewGoal';
import './App.css';

const App = () => {
  const [courseGoals, setCourseGoals] = useState([
    { id: 'cg1', text: 'Finish the Course' },
    { id: 'cg2', text: 'Learn all about the Course Main Topic' },
    { id: 'cg3', text: 'Help other students in the Course Q&A' },
  ]);

  const addNewGoalHandler = (newGoal) => {
    // Update our course goals by adding a new goal.
    // No chance React deferring updates - bulletproof approach which will always work.
    // We need this as our state update depends on the previous state's data as this one does.
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
