import React, { useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
import {v4 as uuidv4} from 'uuid';  

const ToDoWrapper = () => {
    const [todos, setTodos] = useState([]);

    const addToDo=todo=>{
        setTodos([...todos, {id: uuidv4(), task: todo, completed: false, isEditing: false}]);
        console.log(todos);
    }

    const toggleComplete = id => {
        setTodos(todos.map(todo=>(
            todo.id===id ? {...todo, completed: !todo.completed} : todo
        )));
    }

    const deleteTask = id => {
        setTodos(todos.filter(todo=>todo.id !==id))
    }

    const editTask = id => {
        setTodos(todos.map(todo=>(
            todo.id=== id? {...todo, isEditing: !todo.isEditing}: todo
        )))
    }

    const editToDo=(task, id)=> {
        setTodos(todos.map(todo=>(
            todo.id===id ? {...todo, task, isEditing: !todo.isEditing} : todo
        )))
    }
//mt-[5rem] p-[2rem] mx-7
    return (
        <div className='flex justify-center  mt-[5%]'>

        <div className='bg-[#1A1A40] w-[800px] rounder-lg  p-[2rem]'>
            <h1 className='text-3xl text-white font-bold'>TO DO LIST</h1>

            <ToDoForm addToDo={addToDo}/>

            {todos.map((todo, index)=>(
                todo.isEditing ? (
                    <EditToDoForm editTask={editToDo} task={todo}/>
                ) :
                (
                    <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask}/>
                )
            ))}
        </div>  

        </div>
    );
}

export default ToDoWrapper;
