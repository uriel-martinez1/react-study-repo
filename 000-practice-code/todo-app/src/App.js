import './App.css';
// 1. we are going to import use state -- this is a hook in React
// this allows us to add state - or a data store in React 
import { useState } from 'react';

// 2. Encapsulate the ID generation so that it can only be read and modified from external modifications
// This variable after the (() => {...})() is not accesible from the outside the function, this is a IIFE
const newId = (() => {
  let id = 0;
  return () => id++;
})();

// 3. We will the need to create an array that store the task as onjects
// its like vue, every object needs an id, also since each attribute follows the key value pair pattern, task needs a label and the actual task is a string
const INITIAL_TASKS = [
  {id: newId(), label: 'Feed the cat'},
  {id: newId(), label: 'Wash the dishes'},
  {id: newId(), label: 'Clean the kitchen'},
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
      <form onSubmit={(event) => {
        event.preventDefault();
        if (newTask.trim() === '') {
          window.alert('The task field is empty! Please add task.');
          return;
        }
        {/*This creates a new array (...) and adds the new task with generatd id number and label in input */}
        setTasks([
          ...tasks,
          {id: newId(), label: newTask.trim() },
        ]);

        {/*This is not setting the setNewTask variable to an empty string */}
        setNewTask('');
        }}>

        {/*Value is like v-bind:value in Vue.js that binds the value in the input field to the variable that will store that data in the state*/}
        {/*Onchange is like the function that looks for on click event and does something */}
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
          <button>Submit</button>
        </div>
      </form>

      {/*This displays an empty message when there are no tasks or it asks a question right before deleting the task*/}
      {tasks.length === 0  ? (<div>No tasks added</div>) : (
        <ul>
          {tasks.map(({id,label}) => (
            <li key={id}>
              <span>{label}</span>

              <button onClick={() => {
                if(window.confirm('Are you sure you want to delete the task?')) 
                {setTasks(tasks.filter((task) => task.id !== id))}
                }}>Delete
              </button>

            </li>
          ))}
        </ul>
      )}

    </div>
  );
}