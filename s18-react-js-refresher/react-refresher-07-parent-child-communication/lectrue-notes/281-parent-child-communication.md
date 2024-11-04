# Lecture 281. Parent - Child Communication

App.js

To pass data from parent component to child component we use a callback func called `addNewGoalHandler` which will get triggered upon the `onSubmit` event on the form element -> NewGoal component.

The return statement

## Pass `addNewGoalHandler`

Pass the Callback func `addNewGoalHandler` into NewGoal child component
via `onAddGoal` prop so that the user can add a new goal when they click the Add Goal button
within the form element. We are only pointing at the `addNewGoalHandler` callback func and not calling it.

`onAddGoal` prop: It is convention to name props which the end pass func to lower level components like event handlers as func's we pass down to components in
the end will be called by these components upon certain events.

NewGoal.js

Now inside of NewGoal component we can accept props parameter.
Since we have defined `onAddGoal` prop in App component, we want to call `newGoal` inside of `addGoalHandler` func in NewGoal component.

Call `onAddGoal` as that is the name we chosen in App component. Execute this as it holds a pointer to a func. Pass `newGoal` as an argument to the func as in the `addNewGoalHandler` func in App component we expect to get a new goal `const addNewGoalHandler = (newGoal) => {...}`

### Test in UI

When we click the Add Goal button, in the Console tab of DevTools we see that we are outputing our new course goals Array which are the old goals and the new goals: `courseGoals.push(newGoal);`.

NewGoal.js
Therefore, we are passing the goal from the lower level (child component) to new goal component - parent component using `props.onAddGoal(newGoal);` on NewGoal component works.
`<NewGoal onAddGoal={addNewGoalHandler} />`
It works as we used props to pass a func that is then called by the child components instead of passing data directly from parent to child. This gives us away to communicate back from the child to the parent with help of such a func.
