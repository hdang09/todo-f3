import { useState, useRef } from 'react';

function Todo() {
    const [inputValue, setInputValue] = useState('');
    const [tasks, setTasks] = useState(
        JSON.parse(window.localStorage.getItem('tasks')) || [],
    );
    const [editIndex, setEditIndex] = useState(false);

    const inputRef = useRef();
    const buttonRef = useRef();

    const addTask = () => {
        if (editIndex) {
            tasks[editIndex] = inputValue;
            setEditIndex(false);
            inputRef.current.placeholder = '';
            buttonRef.current.innerText = 'Add';
        } else {
            var newTask = [...tasks, inputValue];
            setTasks(newTask);
        }
        window.localStorage.setItem('tasks', JSON.stringify(newTask || tasks));

        setInputValue('');
        inputRef.current.focus();
    };

    const removeTask = (indexTask) => {
        const newTask = tasks.filter((task, index) => index !== indexTask);
        setTasks(newTask);
        window.localStorage.setItem('tasks', JSON.stringify(newTask));
    };

    const editTask = (index) => {
        inputRef.current.focus();
        inputRef.current.placeholder = 'Type to edit...';
        buttonRef.current.innerText = 'Edit';
        setEditIndex(index);
    };

    return (
        <>
            <button onClick={func} style={{ float: 'right' }}>
                Log Out
            </button>
            <input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                ref={inputRef}
            />
            <button onClick={() => addTask()} ref={buttonRef}>
                Add
            </button>

            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>
                        <span>{task}</span>
                        <button
                            style={{ marginLeft: 10 }}
                            onClick={() => removeTask(index)}
                        >
                            x
                        </button>
                        <button onClick={() => editTask(index)}>Edit</button>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Todo;
