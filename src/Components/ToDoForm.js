import React, { useEffect, useRef, useState } from 'react';

const ToDoForm = ({addToDo}) => {
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const [value, setValue] = useState('');

    const handleSubmit =e => {
        e.preventDefault();
        addToDo(value);
        setValue('');
        console.log(value);
    }

    return (
        <div>
            <form className='w-[100%] mb-[1rem]' onSubmit={handleSubmit}>
                <input
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    ref={inputRef}
                    type='text'
                    className='outline-none bg-none border-purple-700 px-4 py-2 mt-4 mb-8 w-72 text-black border-[1px] border-solid placeholder-gray'
                    placeholder='What is the task today?'           
                />
                <button 
                    className='bg-[#8758ff] text-white border-none p-2 cursor-pointer'
                    type='submit'
                >
                    Add Task
                </button>
            </form>
        </div>
    );
}

export default ToDoForm;
