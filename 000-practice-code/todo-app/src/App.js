import './App.css';
// 1. we are going to import use state -- this is a hook in React
// this allows us to add state - or a data store in React 
import { useState } from 'react';

// 2. We are going to create a variable for id -- this will be used for new items in the todo list
let id = 0;

// 3. We will the need to create an array that store the task as onjects
// its like vue, every object needs an id, also since each attribute follows the key value pair pattern, task needs a label and the actual task is a string
const INITIAL_TASKS = [
  {id: id++, label: 'Feed the cat'},
  {id: id++, label: 'Wash the dishes'},
  {id: id++, label: 'Clean the kitchen'},
];

// This is your functional component named App
export default function App() {

  // we will need to bring the tasks into the app using the useState hook
  const [tasks, setTasks] = useState(INITIAL_TASKS);
  // this will have the the input for new tasks, default set to empty string
  const [newTask, setNewTask] = useState('');

  // Items inside the return will render the UI in the application
  return (
    // This is the JSX code defining the structure of your component
    <div>
      {/*Todo List heading */}
      <h1>Todo List</h1>
      
      {/*New Task Input */}
      {/*Aria-label is meant for screen readers to be able to enterpret the input field*/}
      {/*Value is like v-bind:value in Vue.js that binds the value in the input field to the variable that will store that data in the state*/}
      {/*Onchange is like the function that looks for on click event and does something */}
      <div>
        <input 
        aria-label="Add new task" 
        type="text" 
        placeholder='Add your task' 
        value={newTask} 
        onChange={(event) =>{
          setNewTask(event.target.value);
          }} 
        />

        <div>
          {/*We are now including the new task in the tasks state (INITIAL_TASKS) based on a on click event on the submit button -- it uses the concat function to add the new object in the initial tasks array */}
          <button onClick={(event) => {
            setTasks(
              tasks.concat({
                id: id++,
                label: newTask.trim(),
              }),
            );
            {/*We will need to reset the sertNewTask state as empty string so we can add more*/}
            setNewTask('');
          }}>Submit</button>
        </div>
      </div>

      {/*This is where the existing tasks live*/}
      <div>
        <ul>
          {tasks.map(({id,label}) => (
            <li key={id}>
              <span>{label}</span>
              <button onClick={(event) => {
                setTasks(
                  tasks.filter((task) => task.id !== id),
                );
              }}>Delete</button>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}