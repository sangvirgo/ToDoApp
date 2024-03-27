import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'



const ToDo = ({task, toggleComplete, deleteTask, editTask}) => {
    return (
        <div className={`flex justify-between align-middle px-[1rem] py-[0.75rem] mb-[1rem] cursor-pointer ${task.completed ? 'bg-[#2eff16] text-black line-through' : 'bg-[#8758ff] text-white'}`}>
            
            <p>{task.task}</p>

            <div>
                <FontAwesomeIcon className='mr-6 cursor-pointer' icon={faPenToSquare} onClick={()=>editTask(task.id)}/>

                <FontAwesomeIcon className='cursor-pointer' icon={faTrash} onClick={()=>deleteTask(task.id)}/>

                <FontAwesomeIcon className='ml-6' icon={faCheck} onClick={()=>toggleComplete(task.id)}/>
            </div>
        </div>
    );
}

export default ToDo;
