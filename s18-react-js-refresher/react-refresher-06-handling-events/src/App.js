/*************************************************************************
Lecture 280. Handling Events:

Passing data from parent to child components.

*************************************************************************/

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

  // `goals` prop: we reference or point to the `courseGoals` constant
  // that has the above Array of x3 objects inside it because we
  // want to pass data from parent to child.
  return (
    <div className='course-goals'>
      <h2>Course Goals</h2>
      <NewGoal />
      <GoalList goals={courseGoals} />
    </div>
  );
};

export default App;
