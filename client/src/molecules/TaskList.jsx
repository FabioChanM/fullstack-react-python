import {useEffect, useState} from 'react'
import { GetAlltask } from '../api/task.api';
import { TaskCard } from '../atoms/TaskCard';
export function TaskList(){


   const [task, setTask] = useState([]);
   useEffect (() =>  {
    async function loadTask(){
         const res = await GetAlltask();
         console.log(res.data);
         setTask(res.data);
       }
      console.log("pagina guardad")
      loadTask();
   },[])
   return <div>
      {task.map(task=>(

      <TaskCard key={task.id} task={task}/>

   ))}
   </div>;
}