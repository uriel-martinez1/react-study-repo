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
  const [newTasks, setNewTask] = useState('');

  // Items inside the return will render the UI in the application
  return (
    // This is the JSX code defining the structure of your component
    <div>
      {/*Todo List heading */}
      <h1>Todo List</h1>
      
      {/*New Task Input */}
      <div>
        <input type="text" placeholder='Add your task' />
        <div>
          <button>Submit</button>
        </div>
      </div>

      {/*This is where the existing tasks live*/}
      <div>
        <ul>
          <li>
            <span>Feed the cat</span> 
            <button>Completed</button>
          </li>
          <li>
            <span>Wash the dishes</span> 
            <button>Completed</button>
          </li>
          <li>
            <span>Clean the kitchen</span> 
            <button>Completed</button>
          </li>
        </ul>
      </div>

    </div>
  );
}