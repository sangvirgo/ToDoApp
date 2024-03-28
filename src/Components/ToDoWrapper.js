import React, { useEffect, useState } from 'react';
import ToDoForm from './ToDoForm';
import ToDo from './ToDo';
import EditToDoForm from './EditToDoForm';
import {v4 as uuidv4} from 'uuid';  

const ToDoWrapper = () => {
    const [notification, setNotification] = useState('TO DO LIST')
    // test
    const storageTodos=JSON.parse(localStorage.getItem("todos")) || [];
    const [todos, setTodos] = useState(storageTodos);

    useEffect(()=>{
        const timer=setTimeout(()=>{
            setNotification('TO DO LIST');
        }, 2000);

        return () => clearTimeout(timer);
    }, [notification])




    const addToDo = todo => {
        if (todo.trim() !== '' && !todos.some(task => task.task === todo.trim())) {
            const newTodo = { id: uuidv4(), task: todo, completed: false, isEditing: false };
            setTodos([...todos, newTodo]);
            localStorage.setItem("todos", JSON.stringify([...todos, newTodo]));
        } else {
            setNotification('Task already exists');
        }
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

    const DeleteAllToDo = () => {
        localStorage.removeItem("todos");
        setTodos([]);
    }
//mt-[5rem] p-[2rem] mx-7
    return (

        <div className='flex justify-center  mt-[5%]'>

        <div className='bg-[#1A1A40] w-[800px] rounder-lg  p-[2rem]'>
            <h1 className={`text-3xl font-bold ${notification==='TO DO LIST' ? 'text-white' : 'text-red-500'}`}>{notification}</h1>

            <ToDoForm addToDo={addToDo}  DeleteAllToDo={DeleteAllToDo}/>

            {todos.map((todo, index)=>(
                todo.isEditing ? (
                    <EditToDoForm editTask={editToDo} task={todo}/>
                ) :
                (
                    <ToDo task={todo} key={index} toggleComplete={toggleComplete} deleteTask={deleteTask} editTask={editTask} />
                )
            ))}
        </div>  

        </div>
    );
}

export default ToDoWrapper;
