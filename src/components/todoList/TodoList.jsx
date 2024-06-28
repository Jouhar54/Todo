import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toggleTodo, deleteTodo, editTodo } from '../../app/todosSlice';
import './TodoList.scss';

const TodoList = () => {
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [editingId, setEditingId] = useState(null);
    console.log(todos);
    const [newText, setNewText] = useState('');

  const handleEditClick = (id, text) => {
    setEditingId(id);
    setNewText(text);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    dispatch(editTodo({ id: editingId, text: newText }));
    setEditingId(null);
    setNewText('');
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li key={todo.id} className={todo.completed ? 'completed' : ''}>
          {editingId === todo.id ? (
            <form onSubmit={handleEditSubmit}>
              <input
                type="text"
                value={newText}
                onChange={(e) => setNewText(e.target.value)}
                required
              />
              <button type="submit">Save</button>
              <button type="button" onClick={() => setEditingId(null)}>Cancel</button>
            </form>
          ) :(<>
            <span onClick={() => dispatch(toggleTodo(todo.id))}>{todo.text}</span>
          <button onClick={() => dispatch(deleteTodo(todo.id))}>Delete</button>
          <button onClick={() => handleEditClick(todo.id, todo.text)}>Edit</button>
          </>
          )}
          
        </li>
      ))}
    </ul>
  )
}

export default TodoList