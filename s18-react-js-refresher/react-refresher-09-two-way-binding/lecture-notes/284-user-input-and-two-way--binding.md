# Lecture 284 - User Input and Two-Way Binding

The user want to be able to add their own goals. Therefore, we need to reset the input after user has added a new goal. To build this feature we need 'state management' on the NewGoal component code file.
This means once the user has entered their goal into the input field and clicked the Add Goal button then the input should auto reset back to an empty String.

`<input />` component
State management is also sometimes called two-way binding.

`value={enteredText}`
We binding the value of the input and on every keystroke .
`onChange={textChangeHandler}`
We are updating to value which we then bind back to the input so that we always reflect the latest value inside of the input but we also able to manage this in a state driven way so that we also have a chance of manipulating the value from inside our code and reflect this back

**_`value={enteredText}`_**

The event handler `onChange` within the return statement needs to know it needs to reflect the current value stored in entered text. We tell the `<input>` component that it should do so by binding its value prop. We can bind this with the 'enteredText' and with this we can tell the input component that the value displayed in the input should be the value stored in `enteredText = ''` so now we need to change this from a regular variable to 'state'.

1. Import `useState` at the top of code file.

`<input type='text' value={enteredText} onChange={textChangeHandler} />`

We are binding the value of the input and on every keystroke we are updating to value which we then bind back to the input. So that we always reflect the latest value inside of the input but
`setEnteredText(event.target.value);`
we also are able to manage this is a state-driven way so we have a chance of manipulating the value from inside our code and reflect this back into the input.

Now the user can add new goals.
