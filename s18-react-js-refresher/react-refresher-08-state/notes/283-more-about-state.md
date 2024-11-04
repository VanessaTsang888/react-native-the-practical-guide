# 283 - More About State

`useState` will return two elements. First is the initial state, second is a func that allows us to update that state snapshot.

`setCourseGoals((prevCourseGoals) => prevCourseGoals.concat(newGoal));` -> we only have one expression which we immediatly return so we don't need the return statement and the braces.

Since if a user clicks Add Goal button multiple times, the course goals which are currently rendered on screen might not be our latest state as not all state updates might have been processed yet. Therefore is a better form of updating this (see above code) instead of passing our new state data to set course goals we can pass a func to set course goals, a func which receives that latest state `prevCourseGoals` and has to return a new state snapshot and React will then schedule all these func calls and gaurantee us thatthey are executed in the right order so that even if a state update was deferred, by the time the update thereafter executes, it guarantees you the first one executed as well. Then we simply return `prevCourseGoals.concat(newGoal));`.

We only need this if our state update depends on the previous state's data as this one does,
