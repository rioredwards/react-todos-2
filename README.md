# Lesson 4.1: Performance, Typescript, Testing, and Project Structure

## Improve Project Structure

- Inside the src/ directory, create a new folder named components/
- Move the following files into the components/ directory
  - AddTodoForm.jsx
  - InputWithLabel.jsx
  - TodoContainer.jsx (stretch goal - you may not have this in your files)
  - TodoList.jsx
  - TodoListItem.jsx
  - Any CSS modules associated with the components above
- Open src/App.jsx

- Update the import path for TodoContainer.jsx (stretch goal)

## Install Prop Types Library

- If you're using NPM, run npm install --save prop-types instead

`yarn add prop-types`

## Assign Component Prop Types

Documentation: [prop-types](https://github.com/facebook/prop-types?tab=readme-ov-file#usage)

- Open AddTodoForm.jsx
- Import PropTypes from the "prop-types" package
- Below the AddTodoForm function, define the propTypes property of that function as a new object

  - Inside the object, define a property with key onAddTodo (prop name) and value PropTypes.func (function data type)

- Run your application and view in browser
  - Verify that your Todo List still appears correctly with no console errors Repeat the steps above for each of the following components, be sure to use the appropriate key/value pairs depending on the props for each:
    - InputWithLabel.jsx
    - TodoContainer.jsx (stretch goal)
    - TodoList.jsx
    - TodoListItem.jsx
