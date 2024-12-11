import {useState} from 'react'
import { nanoid } from 'nanoid';
import  './TodoList.css'
import TodoDelete from './TodoDelete';

const API_URL = "http://localhost:3000"

function TodoList () {
let [tasks, setTasks] = useState([])
    
function AddTask (e){
    let newTaskText = e.target.value.trim();
    if(newTaskText.length>0){
        let newTask = {
            id: nanoid(),
            text: newTaskText,
            checked: false,
        };
        setTasks([...tasks, newTask])
    }
    e.target.value = '';
}
function toggleTask(id){
   setTasks(tasks.map((tasks)=>tasks.id === id ? {...tasks, checked: !tasks.checked} : tasks ));
}
function onDelete (id) {
    setTasks(tasks.filter(task => task.id !== id))
}

return (
    <>
    <label htmlFor="">Type your new task here:</label>
    
<input type="text" placeholder='Write here' onBlur={AddTask}/>  <button>AddTask</button>
    <ul>
        {
        tasks.map((task)=>
        <li  style={{listStyleType: "number" }} key={task.id}
        >{task.text } 
        <input type="checkbox" checked = {task.checked} 
         onChange={()=>toggleTask(task.id)}/> 
        <TodoDelete onDelete={onDelete} id={task.id}/>
        
            </li>
        )}
    </ul>
    </>
    );
}
export default TodoList;