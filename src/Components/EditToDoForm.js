import React, { useEffect, useRef, useState } from 'react';

const EditToDoForm = ({editTask, task}) => {
    const inputRef=useRef(null);

    useEffect(()=>{
        inputRef.current.focus();
    }, []);

    const [value, setValue] = useState(task.task);

    const handleSubmit =e => {
        e.preventDefault();
        editTask(value, task.id);
        setValue('');
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
                    placeholder='Update Task!'           
                />
                <button 
                    className='bg-[#00f2ff] text-black border-none p-2 cursor-pointer'
                    type='submit'
                >
                    Update Task
                </button>
            </form>
        </div>
    );
}

export default EditToDoForm;
