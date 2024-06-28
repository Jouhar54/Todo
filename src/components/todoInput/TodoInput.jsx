import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../app/todosSlice';
import './TodoInput.scss';

const TodoInput = () => {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        if (input.trim()){
            dispatch(addTodo(input));
            setInput('');
        }
    };

  return (
    <form onSubmit={handleSubmit} className="todo-input">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;